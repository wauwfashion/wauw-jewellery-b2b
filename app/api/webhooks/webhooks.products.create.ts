import _ from 'lodash';
import { ProductVariant } from '@prisma/client';
import { FullShopifyProduct } from '@/services/shopify/types';
import * as orderchampProductService from '@/services/orderchamp/products.server';
import {
  InventoryPolicy,
  Platform,
  ProductStatus,
  WebhookHandler,
} from '@/types';
import prisma from '@/db.server';

const action: WebhookHandler = async ({ webhookContext }) => {
  try {
    const { payload, topic, shop } = webhookContext;

    const shopifyProduct = payload as FullShopifyProduct;

    console.log('=======');
    console.log(`Received ${topic} webhook for ${shop}`);
    console.log('=======');

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

    await orderchampProductService.createProduct(
      {
        title: shopifyProduct.title,
        description: shopifyProduct.body_html,
        brand: shopifyProduct.vendor,
        images: shopifyProduct.images.map((image) => ({
          sourceUrl: image.src,
        })),
        ...options,
        variants: shopifyProduct.variants.map((variant) => ({
          barcode: String(Number(variant.barcode) || variant.id),
          inventoryPolicy:
            variant.inventory_policy.toUpperCase() as InventoryPolicy,
          inventoryQuantity: variant.inventory_quantity,
          price: String(Math.max(Number(variant.price) || 0.01, 0.01)),
          sku: variant.sku || `${variant.id}-temp-sku`,
          option1: variant.option1 || null,
          option2: variant.option2 || null,
          option3: variant.option3 || null,
        })),
      },
      productWithVariants,
    );

    return new Response();
  } catch (err) {
    console.log('Product create webhook error: ', err);
  }
};

export default action;
