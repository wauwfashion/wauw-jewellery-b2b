import {
  ProductUpdateFields,
  ProductUpdateFieldsWithId,
} from '@/hooks/use-product-form-fields';
import { Platform } from '@prisma/client';

interface ProductVariant {
  platform: Platform;
  id: string;
  storefrontId: string;
}

interface Params extends ProductUpdateFields {
  currentPlatform: string;
  product: {
    variants: {
      platformProductVariants: (ProductVariant & { title: string })[];
    }[];
    platformProducts: ProductVariant[];
  } | null;
}

export const generateUpdateProductFields = ({
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
