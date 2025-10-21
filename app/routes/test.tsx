import {
  retrieveAllProducts as retrieveAllShopifyProducts,
  retrieveMetafields,
  retrieveProductVariantsByProductID,
} from '@/services/shopify/products.server';
import {
  retrieveAllProducts as retrieveAllFaireProducts,
  createProduct as createFaireProduct,
} from '@/services/faire/products.server';
import { unauthenticated } from '@/shopify.server';
import { ActionFunctionArgs, json } from '@remix-run/node';
import { isWithinMultiplierRange } from '@/utils/is-within-multiplier-range';
import { MediaType, Metafield } from '@/services/shopify/types';
import { Platform, ProductStatus } from '@prisma/client';
import {
  CreateFaireProductInput,
  FaireProductVariantOption,
} from '@/services/faire/types';
import { escapeHTML } from '@/utils/escape-html';
import { InventoryPolicy } from '@/types';

// export async function action(params: ActionFunctionArgs) {
// const { admin } = await unauthenticated.admin('info-65b6.myshopify.com');

// const shopifyProducts = await retrieveAllShopifyProducts(admin.graphql);
// const faireProducts = (await retrieveAllFaireProducts()) || [];

// const targetProducts = shopifyProducts.filter(
//   (shopifyProduct) =>
//     !faireProducts.some(
//       (faireProduct) => shopifyProduct.title === faireProduct.name,
//     ),
// );

//   const metafieldKeys = Object.values(Metafield);

//   for (const product of targetProducts) {
//     const productWithVariants = await prisma.product.findFirst({
//       where: {
//         shopifyStorefrontId: product.id,
//       },
//       include: {
//         variants: true,
//       },
//     });

//     if (!productWithVariants) {
//       continue;
//     }

//     const { metafields, platformPrice } = await retrieveMetafields(
//       admin.graphql,
//       product.id,
//       metafieldKeys,
//     );

//     const platformMetadata = (metafields[Metafield.Platforms] ||
//       []) as Platform[];

//     const groupedVariantOptions = (product.variants.nodes || []).reduce(
//       (acc, variant) => {
//         variant.selectedOptions.forEach((option) => {
//           if (!acc[option.name]) {
//             acc[option.name] = [];
//           }
//           acc[option.name].push(option.value);
//         });

//         return acc;
//       },
//       {} as Record<string, string[]>,
//     );

//     const shopifyProductOptions = Object.keys(groupedVariantOptions).map(
//       (optionName) => ({
//         name: optionName,
//         values: groupedVariantOptions[optionName],
//       }),
//     );

//     const currentProductVariants = product.variants.nodes.map(
//       (variant, idx) => ({
//         admin_graphql_api_id: variant.id,
//         id: Number(variant.id.replace('gid://shopify/ProductVariant/', '')),
//         barcode: variant.barcode,
//         title: variant.title,
//         image_id: Number(variant.image?.id.split('/').at(-1)),
//         inventory_policy: variant.inventoryPolicy,
//         inventory_quantity: variant.inventoryQuantity,
//         position: variant.position || idx + 1,
//         price: variant.price,
//         sku: variant.sku,
//         product_id: Number(product.id.replace('gid://shopify/Product/', '')),
//         option1: variant.selectedOptions?.[0]?.value || undefined,
//         option2: variant.selectedOptions?.[1]?.value || undefined,
//         option3: variant.selectedOptions?.[2]?.value || undefined,
//         created_at: variant.createdAt,
//         updated_at: variant.updatedAt,
//       }),
//     );

//     if (platformMetadata.includes(Platform.Faire)) {
//       const productCategory = (metafields[Metafield.FaireCategory] || [])?.[0];

//       const input: CreateFaireProductInput = {
//         name: product.title,
//         description: escapeHTML(product.descriptionHtml),
//         idempotence_token: `${product.id}-new`,
//         lifecycle_state:
//           product.status.toUpperCase() === ProductStatus.ACTIVE &&
//           product.media.nodes.filter(
//             ({ mediaContentType }) => mediaContentType === MediaType.IMAGE,
//           ).length > 0
//             ? 'PUBLISHED'
//             : 'DRAFT',
//         minimum_order_quantity: 1,
//         unit_multiplier: 1,
//         images: product.media.nodes
//           .filter(
//             ({ mediaContentType }) => mediaContentType === MediaType.IMAGE,
//           )
//           .map((media) => ({
//             url: media.preview.image.url,
//           })),
//         allow_sales_when_out_of_stock: currentProductVariants.some(
//           (variant) =>
//             variant.inventory_policy?.toUpperCase() ===
//             InventoryPolicy.CONTINUE,
//         ),
//         variant_option_sets:
//           shopifyProductOptions.length === 1 &&
//           shopifyProductOptions[0].name.toLowerCase() === 'title'
//             ? []
//             : shopifyProductOptions.map(({ name, values }) => ({
//                 name,
//                 values,
//               })),
//         variants: currentProductVariants.map((variant) => {
//           const options = shopifyProductOptions
//             .map(({ name }, idx) => {
//               const optionKey = `option${idx + 1}` as
//                 | 'option1'
//                 | 'option2'
//                 | 'option3';

//               if (idx + 1 > 3) {
//                 return null;
//               }

//               const value = variant[optionKey];

//               if (!value || value === 'Default Title') {
//                 return null;
//               }

//               return {
//                 name,
//                 value,
//               };
//             })
//             .filter(Boolean) as FaireProductVariantOption[];

//           const wholesalePrice =
//             (Number(platformPrice) ||
//               Math.max(Number(variant.price) || 0.01, 0.01)) * 100;

//           const retailPrice =
//             Math.max(Number(variant.price) || 0.01, 0.01) * 100;

//           const preparedRetailPrice = isWithinMultiplierRange(
//             wholesalePrice,
//             retailPrice,
//           )
//             ? retailPrice
//             : wholesalePrice * 2;

//           const variantImage = product.media.nodes
//             .filter(
//               ({ mediaContentType }) => mediaContentType === MediaType.IMAGE,
//             )
//             .find(
//               (media) =>
//                 String(media.preview.image.id.split('/').at(-1)) ===
//                 String(variant.image_id),
//             )?.preview.image.url;

//           return {
//             idempotence_token: `${product.id}-${variant.admin_graphql_api_id!}`,
//             sku: variant.sku || `${variant.id}-temp-sku`,
//             prices: [
//               {
//                 geo_constraint: {
//                   country_group: 'EUROPEAN_UNION',
//                 },
//                 wholesale_price: {
//                   amount_minor: Math.round(wholesalePrice),
//                   currency: 'EUR',
//                   // currency: store?.currencyCode || 'EUR',
//                 },
//                 retail_price: {
//                   amount_minor: Math.round(preparedRetailPrice),
//                   currency: 'EUR',
//                   // currency: store?.currencyCode || 'EUR',
//                 },
//               },
//             ],
//             images: variantImage ? [{ url: variantImage }] : undefined,
//             options,
//             available_quantity: variant.inventory_quantity,
//           };
//         }),
//       };

//       if (productCategory) {
//         input.taxonomy_type = {
//           id: productCategory,
//         };
//       }
//       // console.log({
//       //   createFaireProductInputVariantsCount: input.variants.length,
//       // });
//       // console.log('\n\n====================');
//       // console.log({ shopifyProductOptions });
//       // console.log({
//       //   currentProductVariants: currentProductVariants.map(
//       //     ({ option1, option2, option3 }) => ({ option1, option2, option3 }),
//       //   ),
//       // });
//       // console.log('====================\n\n');
//       // console.log({
//       //   createFaireProductInputVariants: JSON.stringify(
//       //     input.variants,
//       //     null,
//       //     2,
//       //   ),
//       // });

//       await createFaireProduct(input, productWithVariants);
//     }
//   }

//   return json({
//     targetProducts,
//     count: targetProducts.length,
//     // products: shopifyProducts,
//     // faireProducts,
//     // faireCount: faireProducts.length,
//     // shopifyCount: shopifyProducts.length,
//   });
// }

export async function action(params: ActionFunctionArgs) {
  // const duplicates: Record<string, number> = {};
  // const faireProducts = (await retrieveAllFaireProducts()) || [];

  // for (const product of faireProducts) {
  //   duplicates[product.name] ??= 0;
  //   duplicates[product.name]++;
  // }

  // const result = Object.fromEntries(
  //   Object.entries(duplicates).filter(([name, count]) => count > 1),
  // );

  // return json({
  //   data: result,
  //   totalCount: Object.values(result).reduce(
  //     (acc, count) => acc + count - 1,
  //     0,
  //   ),
  // });

  const { admin } = await unauthenticated.admin('info-65b6.myshopify.com');

  const shopifyProducts = await retrieveAllShopifyProducts(admin.graphql);
  const faireProducts = (await retrieveAllFaireProducts()) || [];
  const result: Record<string, string[]> = {};

  const shopifyNames = [...new Set(shopifyProducts.map((p) => p.title))];
  const faireNames = [...new Set(faireProducts.map((p) => p.name))];

  // const targetProducts = shopifyProducts.filter(
  //   (shopifyProduct) =>
  //     !faireProducts.some(
  //       (faireProduct) => shopifyProduct.title === faireProduct.name,
  //     ),
  // );

  return json({
    faire: {
      names: faireNames,
      count: faireNames.length,
    },
    shopify: {
      names: shopifyNames,
      count: shopifyNames.length,
    },
  });
}
