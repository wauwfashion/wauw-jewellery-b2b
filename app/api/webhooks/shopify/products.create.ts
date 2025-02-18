import _ from 'lodash';
import { ProductVariant } from '@prisma/client';
import {
  Metafield,
  ShopifyProductPayload,
  ShopifyProductPayloadOption,
  ShopifyProductPayloadVariant,
} from '@/services/shopify/types';
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
import { CreateProductInput } from '@/services/orderchamp/types';

const action: WebhookHandler = async ({ request, shop, graphql }) => {
  try {
    const shopifyProduct = (await request.json()) as ShopifyProductPayload;
    const metafieldKeys = Object.values(Metafield);

    const { metafields, platformPrice } =
      await shopifyProductService.retrieveMetafields(
        graphql,
        shopifyProduct.admin_graphql_api_id,
        metafieldKeys,
      );

    const shopifyProductVariants =
      await shopifyProductService.retrieveProductVariantsByProductID(
        shopifyProduct.admin_graphql_api_id,
      );

    let currentProductVariants: Partial<ShopifyProductPayloadVariant>[] = [];

    if (
      (shopifyProductVariants || [])?.length > shopifyProduct.variants.length
    ) {
      currentProductVariants = (shopifyProductVariants || []).map(
        (variant, idx) => {
          return {
            admin_graphql_api_id: variant.id,
            id: Number(variant.id.replace('gid://shopify/ProductVariant/', '')),
            barcode: variant.barcode,
            title: variant.title,
            image_id: Number(variant.image?.id.split('/').at(-1)),
            inventory_policy: variant.inventoryPolicy,
            inventory_quantity: variant.inventoryQuantity,
            position: variant.position || idx + 1,
            price: variant.price,
            sku: variant.sku,
            product_id: shopifyProduct.id,
            option1: variant.selectedOptions?.[0]?.value || undefined,
            option2: variant.selectedOptions?.[1]?.value || undefined,
            option3: variant.selectedOptions?.[2]?.value || undefined,
            created_at: variant.createdAt,
            updated_at: variant.updatedAt,
          };
        },
      );
    } else {
      currentProductVariants = [...shopifyProduct.variants];
    }

    const groupedVariantOptions = (shopifyProductVariants || []).reduce(
      (acc, variant) => {
        variant.selectedOptions.forEach((option) => {
          if (!acc[option.name]) {
            acc[option.name] = [];
          }
          acc[option.name].push(option.value);
        });

        return acc;
      },
      {} as Record<string, string[]>,
    );

    const shopifyProductOptions = Object.keys(groupedVariantOptions).map(
      (optionName) => ({
        name: optionName,
        values: groupedVariantOptions[optionName],
      }),
    );

    // console.log({
    //   currentProductVariantsCount: JSON.stringify(
    //     currentProductVariants,
    //     null,
    //     2,
    //   ),
    // });

    // console.log({
    //   shopifyProductOptions: JSON.stringify(
    //     shopifyProductOptions,
    //     null,
    //     2,
    //   ),
    // });

    console.log('=======');
    console.log(`Received PRODUCTS_CREATE webhook for ${shop}`);
    console.log('=======');

    const platformMetadata = (metafields[Metafield.Platforms] ||
      []) as Platform[];

    const totalInventory = shopifyProduct.variants.reduce(
      (acc, variant) => acc + variant.inventory_quantity,
      0,
    );

    const createdProduct = await prisma.product.create({
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

    await prisma.platformProduct.create({
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
      const createdVariant = await prisma.productVariant.create({
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

      await prisma.platformProductVariant.create({
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

    const productWithVariants = {
      ...createdProduct,
      variants: createdVariants,
    };

    const options = shopifyProductOptions.reduce(
      (acc, option, idx) => {
        const optionLabel = `option${idx + 1}` as
          | 'option1'
          | 'option2'
          | 'option3';

        if (!option?.name || idx + 1 > 3) {
          return acc;
        }

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

      const input: CreateProductInput = {
        title: shopifyProduct.title,
        description: escapeHTML(shopifyProduct.body_html),
        brand: shopifyProduct.vendor,
        ...options,
        variants: currentProductVariants.map((variant) => {
          const variantImage = shopifyProduct.images.find(
            (image) => String(image.id) === String(variant.image_id),
          );

          return {
            images: variantImage?.src ? [{ sourceUrl: variantImage.src }] : [],
            msrp: String(Math.max(Number(variant.price) || 0.01, 0.01)),
            barcode: String(Number(variant.barcode) || variant.id),
            inventoryPolicy:
              variant.inventory_policy!.toUpperCase() as InventoryPolicy,
            inventoryQuantity: variant.inventory_quantity || 0,
            price:
              platformPrice ||
              String(Math.max(Number(variant.price) || 0.01, 0.01)),
            sku: variant.sku || `${variant.id}-temp-sku`,
            option1: variant.option1 || null,
            option2: variant.option2 || null,
            option3: variant.option3 || null,
          };
        }),
      };

      if (productCategory) {
        //@ts-ignore
        input.category = productCategory;
      }

      if (shopifyProduct.images.length > 0) {
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
      const productCategory = (metafields[Metafield.FaireCategory] || [])?.[0];

      const input: CreateFaireProductInput = {
        name: shopifyProduct.title,
        description: escapeHTML(shopifyProduct.body_html),
        idempotence_token: shopifyProduct.admin_graphql_api_id,
        lifecycle_state:
          shopifyProduct.status.toUpperCase() === ProductStatus.ACTIVE &&
          shopifyProduct.images.length > 0
            ? 'PUBLISHED'
            : 'DRAFT',
        minimum_order_quantity: 1,
        unit_multiplier: 1,
        images: shopifyProduct.images.map((image) => ({
          url: image.src,
        })),
        allow_sales_when_out_of_stock: currentProductVariants.some(
          (variant) =>
            variant.inventory_policy?.toUpperCase() ===
            InventoryPolicy.CONTINUE,
        ),
        variant_option_sets:
          shopifyProductOptions.length === 1 &&
          shopifyProductOptions[0].name.toLowerCase() === 'title'
            ? []
            : shopifyProductOptions.map(({ name, values }) => ({
                name,
                values,
              })),
        variants: currentProductVariants.map((variant) => {
          const options = shopifyProductOptions
            .map(({ name }, idx) => {
              const optionKey = `option${idx + 1}` as
                | 'option1'
                | 'option2'
                | 'option3';

              if (idx + 1 > 3) {
                return null;
              }

              const value = variant[optionKey];

              if (!value || value === 'Default Title') {
                return null;
              }

              return {
                name,
                value,
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

          const variantImage = shopifyProduct.images.find(
            (image) => String(image.id) === String(variant.image_id),
          );

          return {
            idempotence_token: variant.admin_graphql_api_id!,
            sku: variant.sku || `${variant.id}-temp-sku`,
            prices: [
              {
                geo_constraint: {
                  country_group: 'EUROPEAN_UNION',
                },
                wholesale_price: {
                  amount_minor: Math.round(wholesalePrice),
                  currency: 'EUR',
                  // currency: store?.currencyCode || 'EUR',
                },
                retail_price: {
                  amount_minor: Math.round(preparedRetailPrice),
                  currency: 'EUR',
                  // currency: store?.currencyCode || 'EUR',
                },
              },
            ],
            images: variantImage?.src ? [{ url: variantImage.src }] : undefined,
            options,
            available_quantity: variant.inventory_quantity,
          };
        }),
      };

      if (productCategory) {
        input.taxonomy_type = {
          id: productCategory,
        };
      }

      console.log({
        createFaireProductInputVariantsCount: input.variants.length,
      });
      console.log({
        createFaireProductInputVariants: input.variants.map((variant) => ({
          options: variant.options,
        })),
      });
      console.log({ createFaireProductInput: JSON.stringify(input, null, 2) });

      await faireProductService.createProduct(input, productWithVariants);
    }

    return new Response();
  } catch (err) {}
};

export default action;

// import _ from 'lodash';
// import { ProductVariant } from '@prisma/client';
// import {
//   Metafield,
//   ShopifyProductPayload,
//   ShopifyProductVariant,
// } from '@/services/shopify/types';
// import * as faireProductService from '@/services/faire/products.server';
// import * as orderchampProductService from '@/services/orderchamp/products.server';
// import * as shopifyProductService from '@/services/shopify/products.server';
// import {
//   InventoryPolicy,
//   Platform,
//   ProductStatus,
//   WebhookHandler,
// } from '@/types';
// import prisma from '@/db.server';
// import { CreateFaireProductInput } from '@/services/faire/types';
// import { isWithinMultiplierRange } from '@/utils/is-within-multiplier-range';
// import { escapeHTML } from '@/utils/escape-html';
// import { CreateProductInput } from '@/services/orderchamp/types';

// const action: WebhookHandler = async ({ request, shop, graphql }) => {
//   try {
//     const shopifyProduct = (await request.json()) as ShopifyProductPayload;
//     // const { payload, topic, shop, admin } = webhookContext;

//     // const shopifyProduct = payload as ShopifyProductPayload;

//     const metafieldKeys = Object.values(Metafield);

//     const { metafields, platformPrice } =
//       await shopifyProductService.retrieveMetafields(
//         graphql,
//         shopifyProduct.admin_graphql_api_id,
//         metafieldKeys,
//       );

//     const shopifyProductVariants =
//       (await shopifyProductService.retrieveProductVariantsByProductID(
//         shopifyProduct.admin_graphql_api_id,
//       )) || [];

//     console.log({
//       shopifyProductVariants: JSON.stringify(shopifyProductVariants, null, 2),
//     });
//     console.log({
//       shopifyProductVariantsWebhook: JSON.stringify(
//         shopifyProduct.variants,
//         null,
//         2,
//       ),
//     });

// let currentProductVariants: ShopifyProductVariant[] = [];

// console.log({
//   variantImageIds: JSON.stringify(
//     shopifyProduct.variants.map((variant) => variant.image_id),
//   ),
// });

// if (shopifyProduct.variants.length > shopifyProductVariants.length) {
//   currentProductVariants = shopifyProduct.variants.map((variant) => {
//     const variantImage = shopifyProduct.images.find(
//       (image) => String(image.id) === String(variant.image_id),
//     );

//     return {
//       id: variant.admin_graphql_api_id,
//       image: variantImage
//         ? {
//             id: variantImage.admin_graphql_api_id,
//             url: variantImage.src,
//           }
//         : undefined,
//       title: variant.title,
//       inventoryPolicy:
//         variant.inventory_policy.toUpperCase() as InventoryPolicy,
//       inventoryQuantity: variant.inventory_quantity,
//       price: platformPrice || variant.price,
//       msrp: variant.price,
//       sku: variant.sku,
//       barcode: variant.barcode || undefined,
//       selectedOptions: shopifyProduct.options
//         .map(({ name, position }) => ({
//           name,
//           value:
//             variant[
//               `option${position}` as 'option1' | 'option2' | 'option3'
//             ],
//         }))
//         .filter((option) => !!option.value) as {
//         name: string;
//         value: string;
//       }[],
//       createdAt: variant.created_at,
//       updatedAt: variant.updated_at,
//     };
//   });
// } else {
//   currentProductVariants = [...shopifyProductVariants];
// }

// console.log({
//   currentProductVariants: JSON.stringify(currentProductVariants, null, 2),
// });

// const groupedVariantOptions = currentProductVariants.reduce(
//   (acc, variant) => {
//     variant.selectedOptions.forEach((option) => {
//       if (!acc[option.name]) {
//         acc[option.name] = [];
//       }
//       acc[option.name].push(option.value);
//     });

//     return acc;
//   },
//   {} as Record<string, string[]>,
// );

// const shopifyProductOptions = Object.keys(groupedVariantOptions).map(
//   (optionName) => ({
//     name: optionName,
//     values: groupedVariantOptions[optionName],
//   }),
// );

//     console.log('=======');
//     console.log(`Received PRODUCTS_CREATE webhook`);
//     console.log('=======');

//     const platformMetadata = (metafields[Metafield.Platforms] ||
//       []) as Platform[];

//     const productWithVariants = await prisma.$transaction(async (tx) => {
//       const totalInventory = shopifyProduct.variants.reduce(
//         (acc, variant) => acc + variant.inventory_quantity,
//         0,
//       );

//       const createdProduct = await tx.product.create({
//         data: {
//           storeDomain: shop,
//           totalInventory,
//           variantsCount: shopifyProduct.variants.length,
//           hasOnlyDefaultVariant: shopifyProduct.variants.length < 2,
//           shopifyStorefrontId: shopifyProduct.admin_graphql_api_id,
//         },
//       });

//       const createdVariants: ProductVariant[] = [];
//       const storeName = shop.replace('.myshopify.com', '');
//       const productId = shopifyProduct.id;

//       await tx.platformProduct.create({
//         data: {
//           product: { connect: { id: createdProduct.id } },
//           storefrontId: shopifyProduct.admin_graphql_api_id,
//           title: shopifyProduct.title,
//           category: shopifyProduct.category.name,
//           platform: Platform.Shopify,
//           tags: shopifyProduct.tags.split(',').filter(Boolean),
//           description: shopifyProduct.body_html,
//           sourceUrl: `https://admin.shopify.com/store/${storeName}/products/${productId}`,
//           status: shopifyProduct.status.toUpperCase() as ProductStatus,
//           createdAt: shopifyProduct.created_at,
//           updatedAt: shopifyProduct.updated_at,
//         },
//       });

//       for (const variant of shopifyProduct.variants) {
//         const createdVariant = await tx.productVariant.create({
//           data: {
//             product: { connect: { id: createdProduct.id } },
//             sku: variant.sku || `${variant.id}-temp-sku`,
//             inventoryQuantity: variant.inventory_quantity,
//             shopifyVariantStorefrontId: variant.admin_graphql_api_id,
//             shopifyProductStorefrontId: shopifyProduct.admin_graphql_api_id,
//             createdAt: variant.created_at,
//             updatedAt: variant.updated_at,
//           },
//         });

//         createdVariants.push(createdVariant);

//         await tx.platformProductVariant.create({
//           data: {
//             productVariant: { connect: { id: createdVariant.id } },
//             storefrontId: variant.admin_graphql_api_id,
//             title: variant.title,
//             price: variant.price,
//             barcode: variant.barcode,
//             platform: Platform.Shopify,
//             createdAt: variant.created_at,
//             updatedAt: variant.updated_at,
//           },
//         });
//       }

//       return {
//         ...createdProduct,
//         variants: createdVariants,
//       };
//     });

//     // const options = shopifyProduct.options.reduce(
//     //   (acc, option) => {
//     //     const optionLabel = `option${option.position}` as
//     //       | 'option1'
//     //       | 'option2'
//     //       | 'option3';
//     //     acc[optionLabel] = option.name;

//     //     return acc;
//     //   },
//     //   {} as {
//     //     option1: string;
//     //     option2: string;
//     //     option3: string;
//     //   },
//     // );

//     if (platformMetadata.includes(Platform.Orderchamp)) {
//       const marketplaceStorefront = (metafields[
//         Metafield.OrderchampMarketplace
//       ] || [])?.[0];

//       const productCategory = (metafields[
//         Metafield.OrderchampProductCategory
//       ] || [])?.[0];

//       const input: CreateProductInput = {
//         title: shopifyProduct.title,
//         description: escapeHTML(shopifyProduct.body_html),
//         brand: shopifyProduct.vendor,
//         option1: currentProductVariants[0]?.selectedOptions?.[0]?.name || null,
//         option2: currentProductVariants[0]?.selectedOptions?.[1]?.name || null,
//         option3: currentProductVariants[0]?.selectedOptions?.[2]?.name || null,
//         variants: currentProductVariants.map((variant) => ({
//           images: variant?.image?.url ? [{ sourceUrl: variant.image.url }] : [],
//           msrp: String(Math.max(Number(variant.msrp) || 0.01, 0.01)),
//           barcode: String(
//             Number(variant.barcode) ||
//               variant.id.replace('gid://shopify/ProductVariant/', ''),
//           ),
//           inventoryPolicy: variant.inventoryPolicy as InventoryPolicy,
//           inventoryQuantity: variant.inventoryQuantity,
//           price:
//             platformPrice ||
//             String(Math.max(Number(variant.price) || 0.01, 0.01)),
//           sku: variant.sku || `${variant.id}-temp-sku`,
//           option1:
//             variant.selectedOptions.find(
//               ({ name }) =>
//                 name === currentProductVariants[0]?.selectedOptions?.[0]?.name,
//             )?.value || null,
//           option2:
//             variant.selectedOptions.find(
//               ({ name }) =>
//                 name === currentProductVariants[0]?.selectedOptions?.[1]?.name,
//             )?.value || null,
//           option3:
//             variant.selectedOptions.find(
//               ({ name }) =>
//                 name === currentProductVariants[0]?.selectedOptions?.[2]?.name,
//             )?.value || null,
//           // option1: variant.option1 || null,
//           // option2: variant.option2 || null,
//           // option3: variant.option3 || null,
//         })),
//       };

//       if (productCategory) {
//         //@ts-ignore
//         input.category = productCategory;
//       }

//       if (shopifyProduct.images.length > 0) {
//         const images = shopifyProduct.images.map((image) => ({
//           sourceUrl: image.src,
//         }));

//         console.log({
//           shopifyProductImages: JSON.stringify(images, null, 2),
//         });

//         input.images = shopifyProduct.images.map((image) => ({
//           sourceUrl: image.src,
//         }));
//       }

//       console.log({ orderchampCreateInput: JSON.stringify(input, null, 2) });

//       await orderchampProductService.createProduct(
//         input,
//         productWithVariants,
//         marketplaceStorefront,
//       );
//     }

//     if (platformMetadata.includes(Platform.Faire)) {
//       const productCategory = (metafields[Metafield.FaireCategory] || [])?.[0];

//       const input: CreateFaireProductInput = {
//         name: shopifyProduct.title,
//         description: escapeHTML(shopifyProduct.body_html),
//         idempotence_token: shopifyProduct.admin_graphql_api_id,
//         lifecycle_state:
//           shopifyProduct.status.toUpperCase() === ProductStatus.ACTIVE &&
//           shopifyProduct.images.length > 0
//             ? 'PUBLISHED'
//             : 'DRAFT',
//         minimum_order_quantity: 1,
//         unit_multiplier: 1,
//         images: shopifyProduct.images.map((image) => ({
//           url: image.src,
//         })),
//         allow_sales_when_out_of_stock: currentProductVariants.some(
//           (variant) => variant.inventoryPolicy === InventoryPolicy.CONTINUE,
//         ),
//         variant_option_sets:
//           shopifyProduct.options.length === 1 &&
//           shopifyProduct.options[0].name.toLowerCase() === 'title'
//             ? []
//             : shopifyProductOptions,
//         variants: currentProductVariants.map((variant) => {
//           const wholesalePrice =
//             (Number(platformPrice) ||
//               Math.max(Number(variant.price) || 0.01, 0.01)) * 100;

//           const retailPrice =
//             Math.max(Number(variant.msrp) || 0.01, 0.01) * 100;

//           const preparedRetailPrice = isWithinMultiplierRange(
//             wholesalePrice,
//             retailPrice,
//           )
//             ? retailPrice
//             : wholesalePrice * 2;

//           return {
//             idempotence_token: variant.id,
//             sku: variant.sku || `${variant.id}-temp-sku`,
//             prices: [
//               {
//                 geo_constraint: {
//                   country_group: 'EUROPEAN_UNION',
//                 },
//                 wholesale_price: {
//                   amount_minor: wholesalePrice,
//                   currency: 'EUR',
//                   // currency: store?.currencyCode || 'EUR',
//                 },
//                 retail_price: {
//                   amount_minor: preparedRetailPrice,
//                   currency: 'EUR',
//                   // currency: store?.currencyCode || 'EUR',
//                 },
//               },
//             ],
//             images: variant?.image?.url
//               ? [{ url: variant.image.url }]
//               : undefined,
//             options: variant.selectedOptions,
//             available_quantity: variant.inventoryQuantity,
//           };
//         }),
//       };

//       if (productCategory) {
//         input.taxonomy_type = {
//           id: productCategory,
//         };
//       }

//       await faireProductService.createProduct(input, productWithVariants);
//     }

//     return new Response();
//   } catch (err) {}
// };

// export default action;
