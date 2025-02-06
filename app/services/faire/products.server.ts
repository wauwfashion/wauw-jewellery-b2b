import { MappedPlatformProductData } from '@/utils/map-platform-products';
import { faireApiClient } from './api-client';
import {
  FaireProduct,
  FaireProductsResponse,
  CreateFaireProductInput,
} from './types';
import { Platform, ProductStatus } from '@/types';
import { Product, ProductVariant } from '@prisma/client';

export async function retrieveChunkOfProducts(page = 1, limit = 50) {
  const { data: productsResponse } =
    await faireApiClient.get<FaireProductsResponse>(
      `/products?page=${page}&limit=${limit}`,
    );

  return productsResponse;
}

export async function retrieveAllProducts() {
  const limit = 50;
  let page = 1;
  let hasNextPage = true;
  let productsData: FaireProduct[] = [];

  while (hasNextPage) {
    const productsChunk = await retrieveChunkOfProducts(page, limit);

    productsData = [...productsData, ...productsChunk.products];

    if (productsChunk.products.length < limit) {
      hasNextPage = false;
    }

    page++;
  }

  return productsData;
}

export async function removeProduct(id: string) {
  return faireApiClient.delete<void, void>(`/products/${id}`);
}

export async function importFaireProducts(
  faireProducts: FaireProduct[],
  skuMap: Map<string, MappedPlatformProductData>,
) {
  try {
    const filteredProducts = faireProducts.filter(({ variants }) => {
      return variants.some(({ sku }) => skuMap.has(sku));
    });

    for (const product of filteredProducts) {
      let isPlatformProductCreated = false;

      const productVariants = product.variants.filter((variant) =>
        skuMap.has(variant.sku),
      );

      for (const productVariant of productVariants) {
        const productBySku = skuMap.get(productVariant.sku);

        if (!productBySku) {
          continue;
        }

        if (!isPlatformProductCreated) {
          await prisma.platformProduct.create({
            data: {
              product: { connect: { id: productBySku.productId } },
              category: product.taxonomy_type.name,
              title: product.name,
              tags: [],
              platform: Platform.Faire,
              storefrontId: product.id,
              sourceUrl: `https://www.faire.com/brand-portal/my-shop/products/${product.id}`,
              description: product.description,
              status:
                product?.lifecycle_state === 'PUBLISHED'
                  ? ProductStatus.ACTIVE
                  : ProductStatus.DRAFT,
              createdAt: product.created_at,
              updatedAt: product.updated_at,
            },
          });

          isPlatformProductCreated = true;
        }

        const parentProductVariant = skuMap
          .get(productVariant.sku)
          ?.variants.find(
            (mainVariant) => mainVariant.sku === productVariant.sku,
          );

        if (!parentProductVariant) {
          continue;
        }

        await prisma.platformProductVariant.create({
          data: {
            platform: Platform.Faire,
            price: (
              Number(
                productVariant?.prices[0].wholesale_price.amount_minor || 1,
              ) / 100
            ).toFixed(2),
            title: productVariant.name,
            barcode: '',
            storefrontId: productVariant.id,
            productVariant: {
              connect: { id: parentProductVariant.productVariantId },
            },
            createdAt: productVariant.created_at,
            updatedAt: productVariant.updated_at,
          },
        });
      }
    }
  } catch (error) {
    console.error(
      'An error occurred while import products from Faire: ',
      error,
    );
    throw error;
  }
}

export async function createProduct(
  input: CreateFaireProductInput,
  parentProduct: Product & { variants: ProductVariant[] },
) {
  try {
    const { data: createdProduct } = await faireApiClient.post<FaireProduct>(
      '/products',
      input,
    );

    await prisma.platformProduct.create({
      data: {
        product: { connect: { id: parentProduct.id } },
        category: createdProduct?.taxonomy_type?.name || 'Uncategorized',
        title: createdProduct.name,
        tags: [],
        platform: Platform.Faire,
        storefrontId: createdProduct.id,
        sourceUrl: `https://www.faire.com/brand-portal/my-shop/products/${createdProduct.id}`,
        description: createdProduct.description,
        status:
          createdProduct?.lifecycle_state === 'PUBLISHED'
            ? ProductStatus.ACTIVE
            : ProductStatus.DRAFT,
        createdAt: createdProduct.created_at,
        updatedAt: createdProduct.updated_at,
      },
    });

    for (const variant of createdProduct.variants) {
      const parentProductVariant = parentProduct.variants.find(
        (parent) => parent.sku === variant.sku,
      );

      if (!parentProductVariant) {
        continue;
      }

      await prisma.platformProductVariant.create({
        data: {
          platform: Platform.Orderchamp,
          storefrontId: variant.id,
          title: variant.name,
          barcode: variant.product_id || '',
          price: (variant.prices[0].wholesale_price.amount_minor / 100).toFixed(
            2,
          ),
          productVariant: {
            connect: {
              id: parentProductVariant.id,
            },
          },
          createdAt: variant.created_at,
          updatedAt: variant.updated_at,
        },
      });
    }
  } catch (err) {
    console.error('An error occurred while create product on Faire: ', err);
  }
}
