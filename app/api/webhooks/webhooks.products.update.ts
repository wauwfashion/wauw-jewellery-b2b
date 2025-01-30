import _ from 'lodash';

import { PlatformProduct } from '@prisma/client';
import {
  FullShopifyProduct,
  MediaType,
  ShopifyProduct,
} from '@/services/shopify/types';
import * as orderchampProductService from '@/services/orderchamp/products.server';
import {
  InventoryPolicy,
  Platform,
  ProductStatus,
  WebhookHandler,
} from '@/types';
import { generateUpdateProductFields } from '@/utils/generate-update-product-fields';
import { ProductVariantWithPlatformVariants } from '@/utils/map-platform-products';
import { ProductUpdateFields } from '@/hooks/use-product-form-fields';
import prisma from '@/db.server';

const action: WebhookHandler = async ({ webhookContext, request }) => {
  const { payload, topic, shop } = webhookContext;

  const shopifyProduct = payload as FullShopifyProduct;

  console.log('=======');
  console.log(`Received ${topic} webhook for ${shop}`);
  console.log('=======');

  await prisma.$transaction(async (tx) => {
    const totalInventory = shopifyProduct.variants.reduce(
      (acc, variant) => acc + variant.inventory_quantity,
      0,
    );

    const productFromDB = await tx.platformProduct.findFirst({
      where: {
        storefrontId: shopifyProduct.admin_graphql_api_id,
        platform: Platform.Shopify,
      },
      include: {
        product: {
          include: {
            variants: true,
          },
        },
      },
    });

    if (!productFromDB) {
      return new Response();
    }

    const updatedProduct = await tx.product.update({
      where: {
        id: productFromDB?.productId ?? '',
      },
      data: {
        variantsCount: shopifyProduct.variants.length,
        hasOnlyDefaultVariant: shopifyProduct.variants.length === 1,
        updatedAt: shopifyProduct.updated_at,
        totalInventory,
      },
      include: {
        platformProducts: true,
      },
    });

    if (!updatedProduct) {
      return new Response();
    }

    const createdVariants: ProductVariantWithPlatformVariants[] = [];

    await tx.platformProduct.update({
      where: {
        id: productFromDB?.id,
      },
      data: {
        title: shopifyProduct.title,
        category: shopifyProduct.category.name,
        description: shopifyProduct.body_html,
        tags: shopifyProduct.tags.split(',').filter(Boolean),
        status: shopifyProduct.status.toUpperCase() as ProductStatus,
        updatedAt: shopifyProduct.updated_at,
      },
    });

    for (const variant of shopifyProduct.variants) {
      const createdVariant = await tx.productVariant.upsert({
        where: {
          shopifyProductStorefrontId_shopifyVariantStorefrontId: {
            shopifyVariantStorefrontId: variant.admin_graphql_api_id,
            shopifyProductStorefrontId: shopifyProduct.admin_graphql_api_id,
          },
        },
        create: {
          product: { connect: { id: updatedProduct.id } },
          sku: variant.sku || `${variant.id}-temp-sku`,
          inventoryQuantity: variant.inventory_quantity,
          shopifyVariantStorefrontId: variant.admin_graphql_api_id,
          shopifyProductStorefrontId: shopifyProduct.admin_graphql_api_id,
          createdAt: variant.created_at,
          updatedAt: variant.updated_at,
        },
        update: {
          sku: variant.sku || `${variant.id}-temp-sku`,
          inventoryQuantity: variant.inventory_quantity,
          updatedAt: variant.updated_at,
        },
        include: {
          platformProductVariants: true,
        },
      });

      createdVariants.push(createdVariant);

      await tx.platformProductVariant.upsert({
        where: {
          productVariant: {
            shopifyVariantStorefrontId: variant.admin_graphql_api_id,
          },
          platform: Platform.Shopify,
          storefrontId: variant.admin_graphql_api_id,
        },
        create: {
          productVariant: { connect: { id: createdVariant.id } },
          storefrontId: variant.admin_graphql_api_id,
          title: variant.title,
          price: variant.price,
          barcode: variant.barcode,
          platform: Platform.Shopify,
          createdAt: variant.created_at,
          updatedAt: variant.updated_at,
        },
        update: {
          title: variant.title,
          price: variant.price,
          barcode: variant.barcode,
          updatedAt: variant.updated_at,
        },
      });
    }
  });

  const productWithVariants = await prisma.product.findFirst({
    where: {
      shopifyStorefrontId: shopifyProduct.admin_graphql_api_id,
    },
    include: {
      platformProducts: true,
      variants: {
        include: {
          platformProductVariants: true,
        },
      },
    },
  });

  if (!productWithVariants) {
    return new Response();
  }

  const mappedShopifyProduct: ShopifyProduct = {
    id: shopifyProduct.admin_graphql_api_id,
    title: shopifyProduct.title,
    vendor: shopifyProduct.vendor,
    category: {
      id: shopifyProduct.category.admin_graphql_api_id,
      name: shopifyProduct.category.name,
    },
    options: shopifyProduct.options.map(({ name, position }) => ({
      name,
      position,
    })),
    descriptionHtml: shopifyProduct.body_html,
    hasOnlyDefaultVariant: shopifyProduct.variants.length === 1,
    variantsCount: {
      count: shopifyProduct.variants.length,
    },
    status: shopifyProduct.status.toUpperCase() as ProductStatus,
    tags: shopifyProduct.tags.split(',').filter(Boolean),
    totalInventory: shopifyProduct.variants.reduce(
      (acc, variant) => acc + variant.inventory_quantity,
      0,
    ),
    variants: {
      nodes: shopifyProduct.variants.map((variant) => ({
        id: variant.admin_graphql_api_id,
        inventoryPolicy:
          variant.inventory_policy.toUpperCase() as InventoryPolicy,
        title: variant.title,
        inventoryQuantity: variant.inventory_quantity,
        price: variant.price,
        sku: variant.sku,
        barcode: variant.barcode || '',
        selectedOptions: [
          variant.option1 ? { name: 'Option1', value: variant.option1 } : null,
          variant.option2 ? { name: 'Option2', value: variant.option2 } : null,
          variant.option3 ? { name: 'Option3', value: variant.option3 } : null,
        ].filter(Boolean) as { name: string; value: string }[],
        createdAt: variant.created_at,
        updatedAt: variant.updated_at,
      })),
    },
    media: {
      nodes: shopifyProduct.images.map((image) => ({
        id: image.id,
        mediaContentType: MediaType.IMAGE,
        preview: {
          image: {
            id: image.admin_graphql_api_id,
            url: image.src,
          },
        },
      })),
    },
    createdAt: shopifyProduct.created_at,
    updatedAt: shopifyProduct.updated_at,
  };

  await orderchampProductService.syncProduct(
    productWithVariants,
    mappedShopifyProduct,
  );

  // const platformProductsByPlatform =
  //   productWithVariants.platformProducts.reduce(
  //     (acc, product) => {
  //       acc[product.platform] = product;

  //       return acc;
  //     },
  //     {} as Record<Platform, PlatformProduct>,
  //   );

  // const orderchampPlatformProduct =
  //   platformProductsByPlatform[Platform.Orderchamp];

  // const orderchampUpdateProductFields = generateUpdateProductFields({
  //   currentPlatform: Platform.Orderchamp,
  //   productFields: {
  //     title: shopifyProduct.title,
  //     description: shopifyProduct.body_html || '',
  //     status: (orderchampPlatformProduct?.status ||
  //       ProductStatus.DRAFT) as ProductStatus,
  //     tags: orderchampPlatformProduct?.tags || [],
  //   },
  //   variantFields: productWithVariants.variants.reduce(
  //     (acc, variant) => {
  //       const orderchampPlatformVariant = variant.platformProductVariants.find(
  //         ({ platform }) => platform === Platform.Orderchamp,
  //       );

  //       if (orderchampPlatformVariant) {
  //         acc[orderchampPlatformVariant.id] = {
  //           barcode: orderchampPlatformVariant?.barcode || '',
  //           price: orderchampPlatformVariant?.price || '0.01',
  //           sku: variant?.sku || '',
  //         };
  //       }

  //       return acc;
  //     },
  //     {} as ProductUpdateFields['variantFields'],
  //   ),
  //   product: productWithVariants,
  // });

  // const orderchampProductVariants = productWithVariants.variants.flatMap(
  //   (variant) =>
  //     variant.platformProductVariants
  //       .map((platformVariant) => ({
  //         ...platformVariant,
  //         shopifyVariantStorefrontId: variant.shopifyVariantStorefrontId,
  //       }))
  //       .filter(
  //         (platformVariant) => platformVariant.platform === Platform.Orderchamp,
  //       ),
  // );

  // const newOrderchampVariants = shopifyProduct.variants.filter(
  //   (shopifyVariant) =>
  //     orderchampProductVariants.every(
  //       (variant) =>
  //         variant.shopifyVariantStorefrontId !==
  //         shopifyVariant.admin_graphql_api_id,
  //     ),
  // );

  // for (const newVariant of newOrderchampVariants) {
  //   const parentVariantId =
  //     productWithVariants.variants.find(
  //       (variant) =>
  //         variant.shopifyVariantStorefrontId ===
  //         newVariant.admin_graphql_api_id,
  //     )?.id || '';

  //   await orderchampProductService.createProductVariant(
  //     {
  //       inventoryPolicy:
  //         newVariant.inventory_policy.toUpperCase() as InventoryPolicy,
  //       barcode: newVariant.barcode || `${newVariant.id}`,
  //       sku: newVariant.sku || `${newVariant.id}-temp-sku`,
  //       price: newVariant.price || '0.01',
  //       inventoryQuantity: newVariant.inventory_quantity,
  //       option:
  //         newVariant?.option3 || newVariant?.option2 || newVariant?.option1,
  //       productId: orderchampUpdateProductFields.productFields.storefrontId,
  //     },
  //     parentVariantId,
  //   );
  // }

  // await orderchampProductService.updateProduct(
  //   orderchampUpdateProductFields,
  //   shopifyProduct.images.map((image) => ({
  //     sourceUrl: image.src,
  //   })),
  // );

  return new Response();
};

export default action;
