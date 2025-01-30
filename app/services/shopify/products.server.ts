import { AdminApiContextWithoutRest } from 'node_modules/@shopify/shopify-app-remix/dist/ts/server/clients';

import { handleGraphqlThrottle } from '@/utils/graphql-throttle-handler';
import {
  ShopifyProduct,
  ShopifyProductsResponse,
  ShopifyQueryCost,
} from '@/services/shopify/types';
import { Platform, UserError } from '@/types';
import prisma from '@/db.server';
import { ProductUpdateFieldsWithId } from '@/hooks/use-product-form-fields';

export async function retrieveChunkOfProducts(
  graphqlClient: AdminApiContextWithoutRest['graphql'],
  {
    first,
    afterCursor,
    query,
  }: { first: number; afterCursor?: string; query?: string },
): Promise<{
  products: ShopifyProductsResponse;
  cost: ShopifyQueryCost;
}> {
  try {
    const res = await graphqlClient(
      `#graphql
        query Products($first: Int!, $afterCursor: String, $query: String) {
          products(first: $first, after: $afterCursor, query: $query) {
            nodes {
              id
              title
              descriptionHtml
              tags
              status
              category {
                id
                name
              }
              vendor
              totalInventory
              hasOnlyDefaultVariant
              createdAt
              updatedAt
              variantsCount {
                count
              }
              options {
                name
                position
              }
              media(first: 100, query: "media_type=IMAGE") {
                nodes {
                  id
                  mediaContentType
                  preview {
                    image {
                      id
                      url
                    }
                  }
                }
              }
              variants(first: 100) {
                nodes {
                  id
                  title
                  price
                  sku
                  barcode
                  inventoryQuantity
                  inventoryPolicy
                  selectedOptions {
                    name
                    value
                  }
                  createdAt
                  updatedAt
                }
              }
            }
            pageInfo {
              startCursor
              endCursor
              hasNextPage
              hasPreviousPage
            }
          }
        }
      `,
      {
        variables: {
          first,
          afterCursor,
          query,
        },
      },
    );

    const { data, extensions } = (await res.json()) as {
      data: { products: ShopifyProductsResponse };
      extensions: {
        cost: ShopifyQueryCost;
      };
    };

    return {
      products: data.products,
      cost: extensions.cost,
    };
  } catch (err) {
    throw err;
  }
}

export async function retrieveAllProducts(
  graphqlClient: AdminApiContextWithoutRest['graphql'],
  query?: string,
): Promise<ShopifyProduct[]> {
  try {
    const limit = 100;
    let afterCursor: string | undefined = undefined;
    let hasNextPage = true;
    let productsData: ShopifyProduct[] = [];

    while (hasNextPage) {
      const { products, cost } = await retrieveChunkOfProducts(graphqlClient, {
        first: limit,
        afterCursor,
        query,
      });

      const { nodes, pageInfo } = products;

      productsData = [...productsData, ...nodes];

      hasNextPage = pageInfo.hasNextPage;
      afterCursor = hasNextPage ? pageInfo.endCursor : '';

      await handleGraphqlThrottle({
        requestedQueryCost: cost.requestedQueryCost,
        currentlyAvailable: cost.throttleStatus.currentlyAvailable,
        maximumAvailable: cost.throttleStatus.maximumAvailable,
        restoreRate: cost.throttleStatus.restoreRate,
      });
    }

    return productsData;
  } catch (err) {
    throw err;
  }
}

export async function importShopifyProducts(
  products: ShopifyProduct[],
  storeDomain: string,
) {
  try {
    for (const product of products) {
      const createdProduct = await prisma.product.create({
        data: {
          storeDomain,
          hasOnlyDefaultVariant: product.hasOnlyDefaultVariant,
          variantsCount: product.variantsCount.count,
          totalInventory: product.totalInventory,
          createdAt: product.createdAt,
          updatedAt: product.updatedAt,
          shopifyStorefrontId: product.id,
        },
      });

      const storeName = storeDomain.replace('.myshopify.com', '');
      const productId = product.id.split('/').at(-1);

      await prisma.platformProduct.create({
        data: {
          product: { connect: { id: createdProduct.id } },
          storefrontId: product.id,
          title: product.title,
          category: product.category.name || 'Uncategorized',
          platform: Platform.Shopify,
          tags: product.tags,
          description: product.descriptionHtml,
          sourceUrl: `https://admin.shopify.com/store/${storeName}/products/${productId}`,
          status: product.status,
          createdAt: product.createdAt,
          updatedAt: product.updatedAt,
        },
      });

      for (const variant of product.variants.nodes) {
        const createdVariant = await prisma.productVariant.create({
          data: {
            product: { connect: { id: createdProduct.id } },
            sku: variant.sku || `${variant.id.split('/').at(-1)}-temp-sku`,
            inventoryQuantity: variant.inventoryQuantity,
            shopifyVariantStorefrontId: variant.id,
            shopifyProductStorefrontId: product.id,
            createdAt: variant.createdAt,
            updatedAt: variant.updatedAt,
          },
        });

        await prisma.platformProductVariant.create({
          data: {
            productVariant: { connect: { id: createdVariant.id } },
            storefrontId: variant.id,
            title: variant.title,
            price: variant.price,
            barcode: variant.barcode,
            platform: Platform.Shopify,
            createdAt: variant.createdAt,
            updatedAt: variant.updatedAt,
          },
        });
      }
    }
  } catch (err) {
    console.error(
      'An error occurred while import products from Shopify: ',
      err,
    );
    throw err;
  }
}

export async function removeProduct(
  graphqlClient: AdminApiContextWithoutRest['graphql'],
  productId: string,
) {
  try {
    const res = await graphqlClient(
      `#graphql
        mutation ProductDelete($input: ProductDeleteInput!) {
          productDelete(input: $input) {
            deletedProductId
            userErrors {
              field
              message
            }
          }
        }
      `,
      {
        variables: {
          input: {
            id: productId,
          },
        },
      },
    );

    const { data } = (await res.json()) as {
      data: {
        productDelete: { deletedProductId: string; userErrors: UserError[] };
      };
    };

    const userErrors = data?.productDelete?.userErrors || [];

    if (userErrors.length > 0) {
      throw userErrors[0].message;
    }
  } catch (err) {
    throw err;
  }
}

export async function updateProduct(
  graphqlClient: AdminApiContextWithoutRest['graphql'],
  { productFields, variantFields }: ProductUpdateFieldsWithId,
) {
  try {
    if (variantFields.length > 0) {
      await graphqlClient(
        `#graphql
        mutation ProductVariantsUpdate($productId: ID!, $variants: [ProductVariantsBulkInput!]!) {
          productVariantsBulkUpdate(productId: $productId, variants: $variants) {
            product {
              id
            }
            userErrors {
              field
              message
            }
          }
        }
      `,
        {
          variables: {
            productId: productFields.storefrontId,
            variants: variantFields.map(
              ({ storefrontId, price, barcode, sku }) => ({
                id: storefrontId,
                price,
                barcode,
                inventoryItem: {
                  sku,
                },
              }),
            ),
          },
        },
      );
    }

    const {
      storefrontId: productStorefrontId,
      id: productId,
      description = '',
      ...restProductFields
    } = productFields;

    const productRes = await graphqlClient(
      `#graphql
      mutation ProductUpdate($input: ProductInput!) {
        productUpdate(input: $input) {
          product {
            id
          }
          userErrors {
            field
            message
          }
        }
      }
    `,
      {
        variables: {
          input: {
            ...restProductFields,
            descriptionHtml: description,
            id: productStorefrontId,
          },
        },
      },
    );

    const { data } = (await productRes.json()) as {
      data: {
        productUpdate: { product: ShopifyProduct; userErrors: UserError[] };
      };
    };

    await prisma.platformProduct.update({
      where: {
        id: productId,
        platform: Platform.Shopify,
      },
      data: {
        description,
        status: restProductFields.status,
        tags: restProductFields.tags,
        title: restProductFields.title,
      },
    });

    for (const variantField of variantFields) {
      await prisma.platformProductVariant.update({
        where: {
          platform: Platform.Shopify,
          id: variantField.id,
        },
        data: {
          barcode: variantField.barcode,
          price: variantField.price,
          productVariant: {
            update: {
              sku: variantField.sku,
            },
          },
        },
      });
    }

    return {
      product: data?.productUpdate?.product || null,
    };
  } catch (err) {
    console.log('An error occurred while update Shopify product: ', err);
    throw err;
  }
}
