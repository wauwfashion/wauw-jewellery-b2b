import _ from 'lodash';
import { ProductVariant } from '@prisma/client';
import { Metafield, ShopifyProductPayload } from '@/services/shopify/types';
import * as faireProductService from '@/services/faire/products.server';
import * as orderchampProductService from '@/services/orderchamp/products.server';
import * as shopifyProductService from '@/services/shopify/products.server';
import {
  InventoryPolicy,
  Platform,
  ProductStatus,
  WebhookHandler,
} from '@/types';
import prisma from '@/db.server';
import {
  CreateFaireProductInput,
  FaireProductVariantOption,
} from '@/services/faire/types';
import { isWithinMultiplierRange } from '@/utils/is-within-multiplier-range';
import { escapeHTML } from '@/utils/escape-html';

const action: WebhookHandler = async ({ webhookContext, request }) => {
  try {
    const { payload, topic, shop, admin } = webhookContext;

    const shopifyProduct = payload as ShopifyProductPayload;

    const metafieldKeys = Object.values(Metafield);

    console.log('=======');
    console.log(`Received ${topic} webhook for ${shop}`);
    console.log('=======');

    const store = await prisma.store.findFirst({
      where: {
        domain: shop,
      },
    });

    const { metafields, platformPrice } =
      await shopifyProductService.retrieveMetafields(
        admin?.graphql!,
        shopifyProduct.admin_graphql_api_id,
        metafieldKeys,
      );

    console.log({
      metafields: JSON.stringify(metafields, null, 2),
    });

    const platformMetadata = (metafields[Metafield.Platforms] ||
      []) as Platform[];

    const productWithVariants = await prisma.$transaction(async (tx) => {
      const totalInventory = shopifyProduct.variants.reduce(
        (acc, variant) => acc + variant.inventory_quantity,
        0,
      );

      const createdProduct = await tx.product.create({
        data: {
          storeDomain: shop,
          totalInventory,
          variantsCount: shopifyProduct.variants.length,
          hasOnlyDefaultVariant: shopifyProduct.variants.length < 2,
          shopifyStorefrontId: shopifyProduct.admin_graphql_api_id,
        },
      });

      const createdVariants: ProductVariant[] = [];
      const storeName = shop.replace('.myshopify.com', '');
      const productId = shopifyProduct.id;

      await tx.platformProduct.create({
        data: {
          product: { connect: { id: createdProduct.id } },
          storefrontId: shopifyProduct.admin_graphql_api_id,
          title: shopifyProduct.title,
          category: shopifyProduct.category.name,
          platform: Platform.Shopify,
          tags: shopifyProduct.tags.split(',').filter(Boolean),
          description: shopifyProduct.body_html,
          sourceUrl: `https://admin.shopify.com/store/${storeName}/products/${productId}`,
          status: shopifyProduct.status.toUpperCase() as ProductStatus,
          createdAt: shopifyProduct.created_at,
          updatedAt: shopifyProduct.updated_at,
        },
      });

      for (const variant of shopifyProduct.variants) {
        const createdVariant = await tx.productVariant.create({
          data: {
            product: { connect: { id: createdProduct.id } },
            sku: variant.sku || `${variant.id}-temp-sku`,
            inventoryQuantity: variant.inventory_quantity,
            shopifyVariantStorefrontId: variant.admin_graphql_api_id,
            shopifyProductStorefrontId: shopifyProduct.admin_graphql_api_id,
            createdAt: variant.created_at,
            updatedAt: variant.updated_at,
          },
        });

        createdVariants.push(createdVariant);

        await tx.platformProductVariant.create({
          data: {
            productVariant: { connect: { id: createdVariant.id } },
            storefrontId: variant.admin_graphql_api_id,
            title: variant.title,
            price: variant.price,
            barcode: variant.barcode,
            platform: Platform.Shopify,
            createdAt: variant.created_at,
            updatedAt: variant.updated_at,
          },
        });
      }

      return {
        ...createdProduct,
        variants: createdVariants,
      };
    });

    const options = shopifyProduct.options.reduce(
      (acc, option) => {
        const optionLabel = `option${option.position}` as
          | 'option1'
          | 'option2'
          | 'option3';
        acc[optionLabel] = option.name;

        return acc;
      },
      {} as {
        option1: string;
        option2: string;
        option3: string;
      },
    );

    if (platformMetadata.includes(Platform.Orderchamp)) {
      const marketplaceStorefront = (metafields[
        Metafield.OrderchampMarketplace
      ] || [])?.[0];

      const productCategory = (metafields[
        Metafield.OrderchampProductCategory
      ] || [])?.[0];

      const input = {
        title: shopifyProduct.title,
        description: escapeHTML(shopifyProduct.body_html),
        brand: shopifyProduct.vendor,
        ...options,
        variants: shopifyProduct.variants.map((variant) => ({
          msrp: String(Math.max(Number(variant.price) || 0.01, 0.01)),
          barcode: String(Number(variant.barcode) || variant.id),
          inventoryPolicy:
            variant.inventory_policy.toUpperCase() as InventoryPolicy,
          inventoryQuantity: variant.inventory_quantity,
          price:
            platformPrice ||
            String(Math.max(Number(variant.price) || 0.01, 0.01)),
          sku: variant.sku || `${variant.id}-temp-sku`,
          option1: variant.option1 || null,
          option2: variant.option2 || null,
          option3: variant.option3 || null,
        })),
      };

      if (productCategory) {
        //@ts-ignore
        input.category = productCategory;
      }

      if (shopifyProduct.images.length > 0) {
        //@ts-ignore
        input.images = shopifyProduct.images.map((image) => ({
          sourceUrl: image.src,
        }));
      }

      await orderchampProductService.createProduct(
        input,
        productWithVariants,
        marketplaceStorefront,
      );
    }

    if (platformMetadata.includes(Platform.Faire)) {
      const input: CreateFaireProductInput = {
        name: shopifyProduct.title,
        description: escapeHTML(shopifyProduct.body_html),
        idempotence_token: shopifyProduct.admin_graphql_api_id,
        lifecycle_state: 'PUBLISHED',
        minimum_order_quantity: 1,
        unit_multiplier: 1,
        images: shopifyProduct.images.map((image) => ({
          url: image.src,
        })),
        allow_sales_when_out_of_stock: shopifyProduct.variants.some(
          (variant) =>
            variant.inventory_policy.toUpperCase() === InventoryPolicy.CONTINUE,
        ),
        variant_option_sets:
          shopifyProduct.options.length === 1 &&
          shopifyProduct.options[0].name === 'Title'
            ? []
            : shopifyProduct.options.map(({ name, values }) => ({
                name,
                values,
              })),
        variants: shopifyProduct.variants.map((variant) => {
          const options = shopifyProduct.options
            .map(({ name, position }) => {
              const optionKey = `option${position}` as
                | 'option1'
                | 'option2'
                | 'option3';

              const value = variant[optionKey];

              if (!value || value === 'Default Title') {
                return null;
              }

              return {
                name,
                value: variant[optionKey],
              };
            })
            .filter(Boolean) as FaireProductVariantOption[];

          const wholesalePrice =
            (Number(platformPrice) ||
              Math.max(Number(variant.price) || 0.01, 0.01)) * 100;

          const retailPrice =
            Math.max(Number(variant.price) || 0.01, 0.01) * 100;

          const preparedRetailPrice = isWithinMultiplierRange(
            wholesalePrice,
            retailPrice,
          )
            ? retailPrice
            : wholesalePrice * 2;

          return {
            idempotence_token: variant.admin_graphql_api_id,
            sku: variant.sku || `${variant.id}-temp-sku`,
            prices: [
              {
                geo_constraint: {
                  country_group: 'EUROPEAN_UNION',
                },
                wholesale_price: {
                  amount_minor: wholesalePrice,
                  currency: 'EUR',
                  // currency: store?.currencyCode || 'EUR',
                },
                retail_price: {
                  amount_minor: preparedRetailPrice,
                  currency: 'EUR',
                  // currency: store?.currencyCode || 'EUR',
                },
              },
            ],
            options,
          };
        }),
      };

      await faireProductService.createProduct(input, productWithVariants);
    }

    return new Response();
  } catch (err) {}
};

export default action;
