import {
  PlatformProduct,
  PlatformProductVariant,
  Product,
  ProductVariant,
} from '@prisma/client';

export interface ProductVariantWithPlatformVariants extends ProductVariant {
  platformProductVariants: PlatformProductVariant[];
}

export interface ProductWithVariants extends Product {
  variants: ProductVariantWithPlatformVariants[];
}

export interface PlatformProductData extends PlatformProduct {
  product: ProductWithVariants;
}

export type MappedPlatformProductData = ReturnType<
  typeof mapPlatformProducts
>[number];

export const mapPlatformProducts = (
  platformProducts: PlatformProductData[],
) => {
  const products = platformProducts.map(({ product, ...restProductFields }) => {
    const { hasOnlyDefaultVariant, totalInventory, variantsCount, variants } =
      product;

    const mappedVariants = variants.map(
      ({ platformProductVariants, ...restVariantFields }) => {
        const [platformProductVariant] = platformProductVariants; // filtered product variant by platform should includes only 1 platform variant

        const { inventoryQuantity, productId, sku } = restVariantFields;

        return {
          ...platformProductVariant,
          inventoryQuantity,
          productId,
          sku,
        };
      },
    );

    return {
      ...restProductFields,
      hasOnlyDefaultVariant,
      totalInventory,
      variantsCount,
      variants: mappedVariants,
    };
  });

  return products;
};
