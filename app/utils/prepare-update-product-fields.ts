import {
  ProductUpdateFields,
  ProductUpdateFieldsWithId,
} from '@/hooks/use-product-form-fields';
import { ProductWithPlatformData } from '@/types';
import { Platform } from '@prisma/client';

interface Params extends ProductUpdateFields {
  currentPlatform: Platform;
  product: ProductWithPlatformData | null;
}

export const prepareUpdateProductFields = ({
  product,
  productFields,
  variantFields,
  currentPlatform,
}: Params) => {
  const productIdsByPlatform = product?.platformProducts.reduce(
    (acc, product) => {
      acc[product.platform] = {
        id: product.id,
        storefrontId: product.storefrontId,
      };

      return acc;
    },
    {} as Record<Platform, { id: string; storefrontId: string }>,
  );

  const productVariantsIdsByPlatform = product?.variants.reduce(
    (acc, item) => {
      item.platformProductVariants.forEach(
        ({ id, platform, storefrontId, title }) => {
          acc[platform] ??= [];

          if (title === 'Default Title' && product?.variants.length > 1) {
            return acc;
          }

          acc[platform].push({ id, storefrontId });
        },
      );
      return acc;
    },
    {} as Record<Platform, { id: string; storefrontId: string }[]>,
  );

  const mappedVariantFields =
    productVariantsIdsByPlatform?.[currentPlatform as Platform]?.map(
      ({ id, storefrontId }) => ({
        id,
        storefrontId,
        ...variantFields[id],
      }),
    ) || [];

  return {
    productFields: {
      ...productFields,
      ...productIdsByPlatform?.[currentPlatform as Platform],
    },
    variantFields: mappedVariantFields || [],
  } as ProductUpdateFieldsWithId;
};

// export const prepareUpdateProductFields = ({
//   product,
//   productFields,
//   variantFields,
//   currentPlatform,
// }: Params) => {
//   const productIdsByPlatform = product?.platformProducts.reduce(
//     (acc, product) => {
//       acc[product.platform] = {
//         id: product.id,
//         storefrontId: product.storefrontId,
//       };

//       return acc;
//     },
//     {} as Record<Platform, { id: string; storefrontId: string }>,
//   );

//   const productVariantsIdsByPlatform = product?.variants.reduce(
//     (acc, item) => {
//       item.platformProductVariants.forEach(
//         ({ id, platform, storefrontId, title }) => {
//           acc[platform] ??= [];

//           if (title === 'Default Title' && product?.variants.length > 1) {
//             return acc;
//           }

//           acc[platform].push({
//             id,
//             storefrontId,
//             shopifyStorefrontId: item.shopifyVariantStorefrontId,
//           });
//         },
//       );
//       return acc;
//     },
//     {} as Record<
//       Platform,
//       { id: string; storefrontId: string; shopifyStorefrontId: string }[]
//     >,
//   );

//   const mappedVariantFields = productVariantsIdsByPlatform?.[
//     currentPlatform as Platform
//   ].map(({ shopifyStorefrontId, id, storefrontId }) => ({
//     id,
//     storefrontId,
//     ...variantFields[shopifyStorefrontId],
//   }));

//   const data = prisma.productVariant.findFirst({
//     where: {
//       shopifyVariantStorefrontId: mappedVariantFields[0].storefrontId,
//     },
//   });

//   console.log({ variantFields: JSON.stringify(variantFields, null, 2) });
//   console.log({
//     mappedVariantFields: JSON.stringify(mappedVariantFields, null, 2),
//   });
//   console.log({
//     productVariantsIdsByPlatform: JSON.stringify(
//       productVariantsIdsByPlatform,
//       null,
//       2,
//     ),
//   });
//
//   return {
//     productFields: {
//       ...productFields,
//       ...productIdsByPlatform?.[currentPlatform as Platform],
//     },
//     variantFields: mappedVariantFields || [],
//   } as ProductUpdateFieldsWithId;
// };
