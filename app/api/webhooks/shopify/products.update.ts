import _ from 'lodash';

import {
  ShopifyProductPayload,
  MediaType,
  ShopifyProduct,
  Metafield,
} from '@/services/shopify/types';
import * as orderchampProductService from '@/services/orderchamp/products.server';
import * as shopifyProductService from '@/services/shopify/products.server';
import * as faireProductService from '@/services/faire/products.server';
import {
  InventoryPolicy,
  Platform,
  ProductStatus,
  WebhookHandler,
} from '@/types';
import prisma from '@/db.server';
import { escapeHTML } from '@/utils/escape-html';

const action: WebhookHandler = async ({ request, shop, graphql }) => {
  const shopifyProduct = (await request.json()) as ShopifyProductPayload;

  console.log('=======');
  console.log(`Received PRODUCT_UPDATE webhook for ${shop}`);
  console.log('=======');

  // if updated_at - created_at less than 5 seconds
  const isImmediatelyAfterProductCreate =
    (new Date(shopifyProduct.updated_at).getTime() -
      new Date(shopifyProduct.created_at).getTime()) /
      1000 <
    5;

  if (isImmediatelyAfterProductCreate) {
    return new Response();
  }

  const metafieldKeys = Object.values(Metafield);

  const { metafields, platformPrice } =
    await shopifyProductService.retrieveMetafields(
      graphql,
      shopifyProduct.admin_graphql_api_id,
      metafieldKeys,
    );

  const totalInventory = shopifyProduct.variants.reduce(
    (acc, variant) => acc + variant.inventory_quantity,
    0,
  );

  const productFromDB = await prisma.platformProduct.findFirst({
    where: {
      platform: Platform.Shopify,
      storefrontId: shopifyProduct.admin_graphql_api_id,
    },
    include: {
      product: {
        include: {
          variants: {
            include: {
              platformProductVariants: true,
            },
          },
        },
      },
    },
  });

  if (!productFromDB) {
    return new Response();
  }

  const updatedProduct = await prisma.product.update({
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
      variants: {
        include: {
          platformProductVariants: true,
        },
      },
    },
  });

  if (!updatedProduct) {
    return new Response();
  }

  await prisma.platformProduct.update({
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

  const shopifyVariants = [...shopifyProduct.variants];
  const hasDefaultFromShopify = shopifyVariants.some(
    (variant) => variant.title === 'Default Title',
  );

  if (!hasDefaultFromShopify && shopifyVariants.length > 0) {
    const defaultProductVariant = await prisma.productVariant.findFirst({
      where: {
        shopifyProductStorefrontId: shopifyProduct.admin_graphql_api_id,
        platformProductVariants: {
          some: {
            platform: Platform.Shopify,
            title: 'Default Title',
          },
        },
      },
      include: { platformProductVariants: true },
    });

    if (defaultProductVariant) {
      const firstVariant = shopifyVariants[0];

      await prisma.productVariant.update({
        where: { id: defaultProductVariant.id },
        data: {
          sku: firstVariant.sku || `${firstVariant.id}-temp-sku`,
          inventoryQuantity: firstVariant.inventory_quantity,
          shopifyVariantStorefrontId: firstVariant.admin_graphql_api_id,
          updatedAt: firstVariant.updated_at,
        },
      });

      const defaultPlatformVariant =
        defaultProductVariant.platformProductVariants.find(
          (pv) => pv.platform === Platform.Shopify,
        );

      if (defaultPlatformVariant) {
        await prisma.platformProductVariant.update({
          where: { id: defaultPlatformVariant.id },
          data: {
            title: firstVariant.title,
            price: firstVariant.price,
            barcode: firstVariant.barcode,
            updatedAt: firstVariant.updated_at,
          },
        });
      }

      shopifyVariants.shift();
    }
  }

  for (const variant of shopifyProduct.variants) {
    const createdVariant = await prisma.productVariant.upsert({
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
        shopifyVariantStorefrontId: variant.admin_graphql_api_id,
        sku: variant.sku || `${variant.id}-temp-sku`,
        inventoryQuantity: variant.inventory_quantity,
        updatedAt: variant.updated_at,
      },
      include: {
        platformProductVariants: true,
      },
    });

    await prisma.platformProductVariant.upsert({
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
        price: platformPrice || variant.price,
        barcode: variant.barcode,
        platform: Platform.Shopify,
        createdAt: variant.created_at,
        updatedAt: variant.updated_at,
      },
      update: {
        title: variant.title,
        price: platformPrice || variant.price,
        barcode: variant.barcode,
        updatedAt: variant.updated_at,
      },
    });
  }

  console.log({
    shopifyProductVariantsCount: shopifyProduct.variants.length,
  });

  const mappedShopifyProduct: ShopifyProduct = {
    id: shopifyProduct.admin_graphql_api_id,
    title: shopifyProduct.title,
    vendor: shopifyProduct.vendor,
    category: {
      id: shopifyProduct.category.admin_graphql_api_id,
      name: shopifyProduct.category.name,
    },
    options: shopifyProduct.options.map(({ name, position, values }) => ({
      name,
      position,
      values,
    })),
    descriptionHtml: escapeHTML(shopifyProduct.body_html),
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
      nodes: shopifyProduct.variants.map((variant) => {
        const variantImage = shopifyProduct.images.find(
          (image) => String(image.id) === String(variant.image_id),
        );

        return {
          id: variant.admin_graphql_api_id,
          image: variantImage?.src
            ? {
                id: variantImage.id,
                url: variantImage.src,
              }
            : undefined,
          inventoryPolicy:
            variant.inventory_policy.toUpperCase() as InventoryPolicy,
          title: variant.title,
          inventoryQuantity: variant.inventory_quantity,
          price: platformPrice || variant.price,
          sku: variant.sku,
          msrp: String(Math.max(Number(variant.price), 0.01)),
          barcode: variant.barcode || '',
          selectedOptions: [
            variant.option1
              ? {
                  name:
                    shopifyProduct.options.find(
                      (option) => option.position === 1,
                    )?.name || 'Option-1',
                  value: variant.option1,
                }
              : null,
            variant.option2
              ? {
                  name:
                    shopifyProduct.options.find(
                      (option) => option.position === 2,
                    )?.name || 'Option-2',
                  value: variant.option2,
                }
              : null,
            variant.option3
              ? {
                  name:
                    shopifyProduct.options.find(
                      (option) => option.position === 3,
                    )?.name || 'Option-3',
                  value: variant.option3,
                }
              : null,
          ].filter(Boolean) as { name: string; value: string }[],
          createdAt: variant.created_at,
          updatedAt: variant.updated_at,
        };
      }),
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

  const platformMetadata = (metafields[Metafield.Platforms] ||
    []) as Platform[];

  if (platformMetadata.includes(Platform.Orderchamp)) {
    const marketplaceStorefront = (metafields[
      Metafield.OrderchampMarketplace
    ] || [])?.[0];

    const productCategory = (metafields[Metafield.OrderchampProductCategory] ||
      [])?.[0];

    await orderchampProductService.syncProduct(
      mappedShopifyProduct,
      productCategory,
      marketplaceStorefront,
    );

    // await prisma.$transaction(async (tx) => {
    //   const productFromDB = await tx.platformProduct.findFirst({
    //     where: {
    //       platform: Platform.Shopify,
    //       storefrontId: shopifyProduct.admin_graphql_api_id,
    //     },
    //     include: {
    //       product: {
    //         include: {
    //           variants: {
    //             include: {
    //               platformProductVariants: true,
    //             },
    //           },
    //         },
    //       },
    //     },
    //   });

    //   if (!productFromDB) {
    //     return;
    //   }

    //   const variantsToRemove = productFromDB?.product.variants.filter(
    //     (variant) =>
    //       !shopifyVariantIds.includes(variant.shopifyVariantStorefrontId),
    //   );

    //   // for (const variant of variantsToRemove) {
    //   //   for (const platformVariant of variant.platformProductVariants) {
    //   //     await tx.platformProductVariant.delete({
    //   //       where: {
    //   //         id: platformVariant.id,
    //   //       },
    //   //     });
    //   //   }

    //   //   await tx.productVariant.delete({
    //   //     where: {
    //   //       id: variant.id,
    //   //     },
    //   //   });
    //   // }
    // });
  }

  if (platformMetadata.includes(Platform.Faire)) {
    const productCategory = (metafields[Metafield.FaireCategory] || [])?.[0];

    await faireProductService.syncProduct(
      mappedShopifyProduct,
      productCategory,
    );
  }

  return new Response();
};

export default action;

// import _ from 'lodash';

// import {
//   ShopifyProductPayload,
//   MediaType,
//   ShopifyProduct,
//   Metafield,
// } from '@/services/shopify/types';
// import * as orderchampProductService from '@/services/orderchamp/products.server';
// import * as shopifyProductService from '@/services/shopify/products.server';
// import * as faireProductService from '@/services/faire/products.server';
// import {
//   InventoryPolicy,
//   Platform,
//   ProductStatus,
//   WebhookHandler,
// } from '@/types';
// import prisma from '@/db.server';
// import { escapeHTML } from '@/utils/escape-html';

// const action: WebhookHandler = async ({ webhookContext, request }) => {
//   const { payload, topic, shop, admin } = webhookContext;

//   const shopifyProduct = payload as ShopifyProductPayload;

//   console.log('=======');
//   console.log(`Received ${topic} webhook for ${shop}`);
//   console.log('=======');

//   // if updated_at - created_at less than 5 seconds
//   const isImmediatelyAfterProductCreate =
//     (new Date(shopifyProduct.updated_at).getTime() -
//       new Date(shopifyProduct.created_at).getTime()) /
//       1000 <
//     5;

//   console.log({ isImmediatelyAfterProductCreate });

//   if (isImmediatelyAfterProductCreate) {
//     return new Response();
//   }

//   const metafieldKeys = Object.values(Metafield);

//   const { metafields, platformPrice } =
//     await shopifyProductService.retrieveMetafields(
//       admin?.graphql!,
//       shopifyProduct.admin_graphql_api_id,
//       metafieldKeys,
//     );

//   await prisma.$transaction(async (tx) => {
//     const totalInventory = shopifyProduct.variants.reduce(
//       (acc, variant) => acc + variant.inventory_quantity,
//       0,
//     );

//     const productFromDB = await tx.platformProduct.findFirst({
//       where: {
//         platform: Platform.Shopify,
//         storefrontId: shopifyProduct.admin_graphql_api_id,
//       },
//       include: {
//         product: {
//           include: {
//             variants: {
//               include: {
//                 platformProductVariants: true,
//               },
//             },
//           },
//         },
//       },
//     });

//     if (!productFromDB) {
//       return new Response();
//     }

//     const updatedProduct = await tx.product.update({
//       where: {
//         id: productFromDB?.productId ?? '',
//       },
//       data: {
//         variantsCount: shopifyProduct.variants.length,
//         hasOnlyDefaultVariant: shopifyProduct.variants.length === 1,
//         updatedAt: shopifyProduct.updated_at,
//         totalInventory,
//       },
//       include: {
//         platformProducts: true,
//         variants: {
//           include: {
//             platformProductVariants: true,
//           },
//         },
//       },
//     });

//     if (!updatedProduct) {
//       return new Response();
//     }

//     await tx.platformProduct.update({
//       where: {
//         id: productFromDB?.id,
//       },
//       data: {
//         title: shopifyProduct.title,
//         category: shopifyProduct.category.name,
//         description: shopifyProduct.body_html,
//         tags: shopifyProduct.tags.split(',').filter(Boolean),
//         status: shopifyProduct.status.toUpperCase() as ProductStatus,
//         updatedAt: shopifyProduct.updated_at,
//       },
//     });

//     const shopifyVariants = [...shopifyProduct.variants];
//     const hasDefaultFromShopify = shopifyVariants.some(
//       (variant) => variant.title === 'Default Title',
//     );

//     if (!hasDefaultFromShopify && shopifyVariants.length > 0) {
//       const defaultProductVariant = await tx.productVariant.findFirst({
//         where: {
//           shopifyProductStorefrontId: shopifyProduct.admin_graphql_api_id,
//           platformProductVariants: {
//             some: {
//               platform: Platform.Shopify,
//               title: 'Default Title',
//             },
//           },
//         },
//         include: { platformProductVariants: true },
//       });

//       if (defaultProductVariant) {
//         const firstVariant = shopifyVariants[0];

//         await tx.productVariant.update({
//           where: { id: defaultProductVariant.id },
//           data: {
//             sku: firstVariant.sku || `${firstVariant.id}-temp-sku`,
//             inventoryQuantity: firstVariant.inventory_quantity,
//             shopifyVariantStorefrontId: firstVariant.admin_graphql_api_id,
//             updatedAt: firstVariant.updated_at,
//           },
//         });

//         const defaultPlatformVariant =
//           defaultProductVariant.platformProductVariants.find(
//             (pv) => pv.platform === Platform.Shopify,
//           );

//         if (defaultPlatformVariant) {
//           await tx.platformProductVariant.update({
//             where: { id: defaultPlatformVariant.id },
//             data: {
//               title: firstVariant.title,
//               price: firstVariant.price,
//               barcode: firstVariant.barcode,
//               updatedAt: firstVariant.updated_at,
//             },
//           });
//         }

//         shopifyVariants.shift();
//       }
//     }

//     for (const variant of shopifyProduct.variants) {
//       const createdVariant = await tx.productVariant.upsert({
//         where: {
//           shopifyProductStorefrontId_shopifyVariantStorefrontId: {
//             shopifyVariantStorefrontId: variant.admin_graphql_api_id,
//             shopifyProductStorefrontId: shopifyProduct.admin_graphql_api_id,
//           },
//         },
//         create: {
//           product: { connect: { id: updatedProduct.id } },
//           sku: variant.sku || `${variant.id}-temp-sku`,
//           inventoryQuantity: variant.inventory_quantity,
//           shopifyVariantStorefrontId: variant.admin_graphql_api_id,
//           shopifyProductStorefrontId: shopifyProduct.admin_graphql_api_id,
//           createdAt: variant.created_at,
//           updatedAt: variant.updated_at,
//         },
//         update: {
//           shopifyVariantStorefrontId: variant.admin_graphql_api_id,
//           sku: variant.sku || `${variant.id}-temp-sku`,
//           inventoryQuantity: variant.inventory_quantity,
//           updatedAt: variant.updated_at,
//         },
//         include: {
//           platformProductVariants: true,
//         },
//       });

//       await tx.platformProductVariant.upsert({
//         where: {
//           productVariant: {
//             shopifyVariantStorefrontId: variant.admin_graphql_api_id,
//           },
//           platform: Platform.Shopify,
//           storefrontId: variant.admin_graphql_api_id,
//         },
//         create: {
//           productVariant: { connect: { id: createdVariant.id } },
//           storefrontId: variant.admin_graphql_api_id,
//           title: variant.title,
//           price: platformPrice || variant.price,
//           barcode: variant.barcode,
//           platform: Platform.Shopify,
//           createdAt: variant.created_at,
//           updatedAt: variant.updated_at,
//         },
//         update: {
//           title: variant.title,
//           price: platformPrice || variant.price,
//           barcode: variant.barcode,
//           updatedAt: variant.updated_at,
//         },
//       });
//     }
//   });

//   const mappedShopifyProduct: ShopifyProduct = {
//     id: shopifyProduct.admin_graphql_api_id,
//     title: shopifyProduct.title,
//     vendor: shopifyProduct.vendor,
//     category: {
//       id: shopifyProduct.category.admin_graphql_api_id,
//       name: shopifyProduct.category.name,
//     },
//     options: shopifyProduct.options.map(({ name, position, values }) => ({
//       name,
//       position,
//       values,
//     })),
//     descriptionHtml: escapeHTML(shopifyProduct.body_html),
//     hasOnlyDefaultVariant: shopifyProduct.variants.length === 1,
//     variantsCount: {
//       count: shopifyProduct.variants.length,
//     },
//     status: shopifyProduct.status.toUpperCase() as ProductStatus,
//     tags: shopifyProduct.tags.split(',').filter(Boolean),
//     totalInventory: shopifyProduct.variants.reduce(
//       (acc, variant) => acc + variant.inventory_quantity,
//       0,
//     ),
//     variants: {
//       nodes: shopifyProduct.variants.map((variant) => ({
//         id: variant.admin_graphql_api_id,
//         inventoryPolicy:
//           variant.inventory_policy.toUpperCase() as InventoryPolicy,
//         title: variant.title,
//         inventoryQuantity: variant.inventory_quantity,
//         price: platformPrice || variant.price,
//         sku: variant.sku,
//         msrp: String(Math.max(Number(variant.price), 0.01)),
//         barcode: variant.barcode || '',
//         selectedOptions: [
//           variant.option1
//             ? {
//                 name:
//                   shopifyProduct.options.find((option) => option.position === 1)
//                     ?.name || 'Option-1',
//                 value: variant.option1,
//               }
//             : null,
//           variant.option2
//             ? {
//                 name:
//                   shopifyProduct.options.find((option) => option.position === 2)
//                     ?.name || 'Option-2',
//                 value: variant.option2,
//               }
//             : null,
//           variant.option3
//             ? {
//                 name:
//                   shopifyProduct.options.find((option) => option.position === 3)
//                     ?.name || 'Option-3',
//                 value: variant.option3,
//               }
//             : null,
//         ].filter(Boolean) as { name: string; value: string }[],
//         createdAt: variant.created_at,
//         updatedAt: variant.updated_at,
//       })),
//     },
//     media: {
//       nodes: shopifyProduct.images.map((image) => ({
//         id: image.id,
//         mediaContentType: MediaType.IMAGE,
//         preview: {
//           image: {
//             id: image.admin_graphql_api_id,
//             url: image.src,
//           },
//         },
//       })),
//     },
//     createdAt: shopifyProduct.created_at,
//     updatedAt: shopifyProduct.updated_at,
//   };

//   const platformMetadata = (metafields[Metafield.Platforms] ||
//     []) as Platform[];

//   if (platformMetadata.includes(Platform.Orderchamp)) {
//     const marketplaceStorefront = (metafields[
//       Metafield.OrderchampMarketplace
//     ] || [])?.[0];

//     const productCategory = (metafields[Metafield.OrderchampProductCategory] ||
//       [])?.[0];

//     await orderchampProductService.syncProduct(
//       mappedShopifyProduct,
//       productCategory,
//       marketplaceStorefront,
//     );

//     // await prisma.$transaction(async (tx) => {
//     //   const productFromDB = await tx.platformProduct.findFirst({
//     //     where: {
//     //       platform: Platform.Shopify,
//     //       storefrontId: shopifyProduct.admin_graphql_api_id,
//     //     },
//     //     include: {
//     //       product: {
//     //         include: {
//     //           variants: {
//     //             include: {
//     //               platformProductVariants: true,
//     //             },
//     //           },
//     //         },
//     //       },
//     //     },
//     //   });

//     //   if (!productFromDB) {
//     //     return;
//     //   }

//     //   const variantsToRemove = productFromDB?.product.variants.filter(
//     //     (variant) =>
//     //       !shopifyVariantIds.includes(variant.shopifyVariantStorefrontId),
//     //   );

//     //   // for (const variant of variantsToRemove) {
//     //   //   for (const platformVariant of variant.platformProductVariants) {
//     //   //     await tx.platformProductVariant.delete({
//     //   //       where: {
//     //   //         id: platformVariant.id,
//     //   //       },
//     //   //     });
//     //   //   }

//     //   //   await tx.productVariant.delete({
//     //   //     where: {
//     //   //       id: variant.id,
//     //   //     },
//     //   //   });
//     //   // }
//     // });
//   }

//   if (platformMetadata.includes(Platform.Faire)) {
//     const productCategory = (metafields[Metafield.FaireCategory] || [])?.[0];

//     await faireProductService.syncProduct(
//       mappedShopifyProduct,
//       productCategory,
//     );
//   }

//   return new Response();
// };

// export default action;
