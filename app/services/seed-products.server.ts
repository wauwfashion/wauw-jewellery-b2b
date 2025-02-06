import { Platform } from '@/types';
import { mapPlatformProducts } from '@/utils/map-platform-products';
import { generateProductsSkuMap } from '@/utils/generate-products-sku-map';
import * as orderchampProductsService from '@/services/orderchamp/products.server';
import * as faireProductsService from '@/services/faire/products.server';
import prisma from '@/db.server';

export const seedProducts = async (storeDomain: string) => {
  try {
    const shopifyProducts = await prisma.platformProduct.findMany({
      where: { platform: Platform.Shopify, product: { storeDomain } },
      include: {
        product: {
          include: {
            variants: {
              include: {
                platformProductVariants: {
                  where: {
                    platform: Platform.Shopify,
                  },
                },
              },
            },
          },
        },
      },
    });

    const mappedShopifyProducts = mapPlatformProducts(shopifyProducts);

    const productsSkuMap = generateProductsSkuMap(mappedShopifyProducts);

    const allOrderchampProducts =
      await orderchampProductsService.retrieveAllProducts();

    await orderchampProductsService.importOrderchampProducts(
      allOrderchampProducts,
      productsSkuMap,
    );

    const allFaireProducts = await faireProductsService.retrieveAllProducts();

    await faireProductsService.importFaireProducts(
      allFaireProducts,
      productsSkuMap,
    );
  } catch (err) {
    throw err;
  }
};
