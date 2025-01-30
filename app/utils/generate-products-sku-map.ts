import { MappedPlatformProductData } from '@/utils/map-platform-products';

export const generateProductsSkuMap = (
  platformProducts: MappedPlatformProductData[],
) => {
  const productsSkuMap = new Map<string, MappedPlatformProductData>();

  for (const platformProduct of platformProducts) {
    const productVariants = platformProduct.variants;

    for (const productVariant of productVariants) {
      if (productVariant.sku) {
        productsSkuMap.set(productVariant.sku, platformProduct);
      }
    }
  }

  return productsSkuMap;
};
