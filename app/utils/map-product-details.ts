import { Jsonify } from '@remix-run/server-runtime/dist/jsonify';

import { Platform } from '@/types';
import {
  PlatformProduct,
  PlatformProductVariant,
  Product,
  ProductVariant,
} from '@prisma/client';

export interface ProductVariantWithPlatformVariants extends ProductVariant {
  platformProductVariants: PlatformProductVariant[];
}

export interface ProductData extends Product {
  variants: ProductVariantWithPlatformVariants[];
  platformProducts: PlatformProduct[];
}

export type MappedProductDetailsData = ReturnType<typeof mapProductDetails>;

export const mapProductDetails = (
  product: Jsonify<ProductData | null>,
  currentPlatform: Platform,
) => {
  if (!product) {
    return null;
  }

  const { platformProducts, variants, ...restProduct } = product;

  const platformProduct = platformProducts.find(
    ({ platform }) => platform === currentPlatform,
  );

  const mappedVariants = variants.map(
    ({ platformProductVariants, ...restVariant }) => {
      const platformVariant = platformProductVariants.find(
        ({ platform }) => platform === currentPlatform,
      );

      return {
        ...restVariant,
        platformVariant,
      };
    },
  );

  if (!platformProduct) {
    return null;
  }

  return {
    ...restProduct,
    variants: mappedVariants,
    platformProduct,
  };
};
