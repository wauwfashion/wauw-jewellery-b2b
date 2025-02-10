import { ankorstoreApiClient } from './api-client';
import {
  AnkorstoreProductsResponse,
  AnkorstoreProductVariantsResponse,
} from './types';
import prisma from '@/db.server';
import { Platform } from '@/types';

export async function retrieveChunkOfProducts(limit = 50, afterId?: string) {
  let url = `/products?page[limit]=50`;

  if (afterId) {
    url += `&page[after]=${afterId}`;
  }

  const { data } =
    await ankorstoreApiClient.get<AnkorstoreProductsResponse>(url);

  return data;
}

export async function retrieveProductVariantByProductName(name: string) {
  const { data } =
    await ankorstoreApiClient.get<AnkorstoreProductVariantsResponse>(
      `/product-variants?filter[skuOrName]=${name}`,
    );

  return data;
}

export async function updateProductQuantity(id: string, stockQuantity: number) {
  await ankorstoreApiClient.patch(
    `https://www.public.ankorstore-sandbox.com/api/v1/product-variants/${id}/stock`,
    {
      id,
      attributes: {
        stockQuantity,
      },
    },
  );
}

export async function importProducts() {
  try {
    const productVariants = await prisma.productVariant.findMany({
      include: { product: true },
    });

    for (const productVariant of productVariants) {
      const { data } = await retrieveProductVariantByProductName(
        productVariant.sku,
      );

      if (!data) {
        continue;
      }

      const [ankorstoreVariant] = data;

      await prisma.platformProduct.create({
        data: {
          platform: Platform.Ankorstore,
          storefrontId: ankorstoreVariant.id,
          title: ankorstoreVariant.attributes.name,
          category: 'Uncategorized',
          description: ankorstoreVariant.attributes.name,
          createdAt: ankorstoreVariant.attributes.createdAt,
          updatedAt: ankorstoreVariant.attributes.updatedAt,
          status: 'DRAFT',
          tags: [],
          sourceUrl: '#',
          product: { connect: { id: productVariant.product.id } },
        },
      });

      await prisma.platformProductVariant.create({
        data: {
          platform: Platform.Ankorstore,
          storefrontId: ankorstoreVariant.id,
          title: ankorstoreVariant.attributes.name,
          price: String(ankorstoreVariant.attributes.wholesalePrice),
          createdAt: ankorstoreVariant.attributes.createdAt,
          updatedAt: ankorstoreVariant.attributes.updatedAt,
          barcode: String(ankorstoreVariant.attributes.ian) || '',
          productVariant: { connect: { id: productVariant.id } },
        },
      });
    }
  } catch (err) {
    console.error(
      'An error occurred while receiving Ankorstore products: ',
      // @ts-ignore
      err.response?.data,
    );
  }
}
