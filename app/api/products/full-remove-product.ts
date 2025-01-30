import { AdminApiContextWithoutRest } from 'node_modules/@shopify/shopify-app-remix/dist/ts/server/clients';

import * as shopifyProductService from '@/services/shopify/products.server';
import * as orderchampProductService from '@/services/orderchamp/products.server';

import prisma from '@/db.server';
import { Platform } from '@/types';

export async function fullRemoveProduct(
  graphqlClient: AdminApiContextWithoutRest['graphql'],
  dbProductId: string,
) {
  try {
    const product = await prisma.product.findFirst({
      where: {
        id: dbProductId,
      },
      select: {
        platformProducts: {
          select: {
            storefrontId: true,
            platform: true,
          },
        },
        variants: {
          select: {
            id: true,
          },
        },
      },
    });

    if (!product) {
      throw new Error('No product found with the given ID.');
    }

    const storefrontIdsByPlatform = product?.platformProducts.reduce(
      (acc, product) => {
        acc[product.platform] = product.storefrontId;

        return acc;
      },
      {} as Record<Platform, string>,
    );

    const shopifyStorefrontId =
      storefrontIdsByPlatform?.[Platform.Shopify] || '';
    const orderchampStorefrontId =
      storefrontIdsByPlatform?.[Platform.Orderchamp] || '';

    await prisma.$transaction(async (tx) => {
      const variantIds = product.variants.map(({ id }) => id);

      await tx.platformProductVariant.deleteMany({
        where: {
          productVariantId: { in: variantIds },
        },
      });

      await tx.productVariant.deleteMany({
        where: {
          productId: dbProductId,
        },
      });

      await tx.platformProduct.deleteMany({
        where: {
          productId: dbProductId,
        },
      });

      await tx.product.delete({
        where: {
          id: dbProductId,
        },
      });
    });

    await shopifyProductService.removeProduct(
      graphqlClient,
      shopifyStorefrontId,
    );
    await orderchampProductService.removeProduct(orderchampStorefrontId);
  } catch (err) {
    console.log('An error occurred while delete product: ', err);
  }
}
