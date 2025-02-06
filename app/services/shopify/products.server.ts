import { AdminApiContextWithoutRest } from 'node_modules/@shopify/shopify-app-remix/dist/ts/server/clients';

import { handleGraphqlThrottle } from '@/utils/graphql-throttle-handler';
import {
  Metafield,
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
          id: variantField.id || '',
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

export async function updateProductQuantity(
  graphqlClient: AdminApiContextWithoutRest['graphql'],
  {
    productId = 'empty',
    variants,
  }: {
    productId: string;
    variants: {
      id: string;
      quantity: number;
    }[];
  },
) {
  const locationsRes = await graphqlClient(
    `#graphql
      query Locations($first: Int!) {
        locations(first: $first) {
          nodes {
            id
            name
            isActive
          }
        }
      }
    `,
    {
      variables: {
        first: 10,
      },
    },
  );

  const {
    data: { locations },
  } = (await locationsRes.json()) as {
    data: {
      locations: {
        nodes: {
          id: string;
          name: string;
          isActive: boolean;
        }[];
      };
    };
  };

  const activeLocations = locations.nodes.filter(
    (location) => location.isActive,
  );

  if (!activeLocations.length) {
    return;
  }

  const currentLocation =
    activeLocations.find((location) => location.name === 'Lireweg 8') ||
    activeLocations[0];

  const mappedVariantsInput = variants.map((variant) => ({
    id: variant.id,
    inventoryQuantities: [
      {
        locationId: currentLocation.id,
        availableQuantity: variant.quantity,
      },
    ],
  }));

  const updateProductQuantityRes = await graphqlClient(
    `#graphql
      mutation ProductQuantityUpdate($variants: [ProductVariantBulkInput!]!, $productId: ID!) {
        productVariantsBulkUpdate(variants: $variants, productId: $productId) {
          userErrors {
            field
            message
          }
        }
      }
    `,
    {
      variables: {
        productId,
        variants: mappedVariantsInput,
      },
    },
  );

  const {
    data: { productVariantsBulkUpdate },
  } = (await updateProductQuantityRes.json()) as {
    data: {
      productVariantsBulkUpdate: {
        userErrors: UserError[];
      };
    };
  };

  const userErrors = productVariantsBulkUpdate.userErrors;

  if (userErrors.length > 0) {
    throw userErrors[0].message;
  }
}

export async function retrieveMetafields(
  graphqlClient: AdminApiContextWithoutRest['graphql'],
  productId: string,
  productKeys: string[],
) {
  const productRes = await graphqlClient(
    `#graphql
    query ProductMetafields($id: ID!, $first: Int!, $productKeys: [String!], $platformPriceNamespace: String!, $platformPriceKey: String!) {
      product(id: $id) {
        metafields(first: $first, keys: $productKeys) {
          nodes {
            id
            jsonValue
            namespace
            type
            key
          }
        }
        platformPrice: metafield(namespace: $platformPriceNamespace, key: $platformPriceKey) {
            id
            jsonValue
            namespace
            type
            key
        }
      }
    }
    `,
    {
      variables: {
        id: productId || 'empty',
        first: 10,
        productKeys,
        platformPriceNamespace: 'custom',
        platformPriceKey: 'platform_price',
      },
    },
  );

  const {
    data: { product },
  } = (await productRes.json()) as {
    data: {
      product: {
        metafields: {
          nodes: {
            id: string;
            jsonValue: string | string[];
            namespace: string;
            type: string;
            key: string;
          }[];
        };
        platformPrice: {
          id: string;
          jsonValue: string;
          namespace: string;
          type: string;
          key: string;
        };
      };
    };
  };

  const metafields = product?.metafields?.nodes || [];

  const metafieldRecords: Partial<Record<Metafield, string[]>> = {};

  for (const metafield of metafields) {
    const ids =
      typeof metafield.jsonValue === 'string'
        ? [metafield.jsonValue]
        : metafield.jsonValue;

    for (const metafieldId of ids) {
      if (!metafieldId) {
        continue;
      }

      const metafieldRes = await graphqlClient(
        `#graphql
        query ProductMetafield($id: ID!, $fieldKey: String!) {
          metaobject(id: $id) {
            displayName
            id
            type
            handle
            slug: field(key: $fieldKey) {
              jsonValue
            }
          }
        }
        `,
        {
          variables: {
            id: metafieldId,
            fieldKey: 'slug',
          },
        },
      );

      const {
        data: { metaobject },
      } = (await metafieldRes.json()) as {
        data: {
          metaobject: {
            displayName: string;
            id: string;
            type: string;
            handle: string;
            slug: {
              jsonValue: string;
            } | null;
          };
        };
      };

      const metaKey = metafield.key.includes('custom')
        ? metafield.key
        : `${metafield.namespace}.${metafield.key}`;

      metafieldRecords[metaKey as Metafield] ??= [];

      metafieldRecords[metaKey as Metafield]?.push(
        metaobject.slug?.jsonValue || metaobject.displayName,
      );
    }
  }

  const platformPrice = product?.platformPrice?.jsonValue;

  return { metafields: metafieldRecords, platformPrice };
}

// export async function retrieveMetafields(
//   graphqlClient: AdminApiContextWithoutRest['graphql'],
//   productId: string,
//   productKeys: string[],
// ) {
//   const [msrpNamespace, msrpKey] = Metafield.OrderchampMSRP.split('.');

//   const productRes = await graphqlClient(
//     `#graphql
//     query ProductMetafields($id: ID!, $first: Int!, $productKeys: [String!], $msrpNamespace: String!, $msrpKey: String!) {
//       product(id: $id) {
//         metafields(first: $first, keys: $productKeys) {
//           nodes {
//             id
//             jsonValue
//             namespace
//             type
//             key
//           }
//         }
//         variants(first: 100) {
//           nodes {
//             id
//             metafield(namespace: $msrpNamespace, key: $msrpKey) {
//               jsonValue
//               id
//               namespace
//               type
//               key
//             }
//           }
//         }
//       }
//     }
//     `,
//     {
//       variables: {
//         id: productId,
//         first: 10,
//         productKeys,
//         msrpNamespace,
//         msrpKey,
//       },
//     },
//   );

//   const {
//     data: { product },
//   } = (await productRes.json()) as {
//     data: {
//       product: {
//         variants: {
//           nodes: {
//             id: string;
//             metafield: {
//               id: string;
//               jsonValue: string;
//               namespace: string;
//               type: string;
//               key: string;
//             } | null;
//           }[];
//         };
//         metafields: {
//           nodes: {
//             id: string;
//             jsonValue: string | string[];
//             namespace: string;
//             type: string;
//             key: string;
//           }[];
//         };
//       };
//     };
//   };

//   const msrpByVariants = product?.variants?.nodes.reduce(
//     (acc, variant) => {
//       if (!variant.id) {
//         return acc;
//       }

//       // @ts-ignore
//       acc[variant.id as string] = variant?.metafield?.jsonValue;

//       return acc;
//     },
//     {} as Record<string, string>,
//   );

//   const metafields = product?.metafields?.nodes || [];

//   const metafieldRecords: Partial<Record<Metafield, string[]>> = {};

//   for (const metafield of metafields) {
//     const ids =
//       typeof metafield.jsonValue === 'string'
//         ? [metafield.jsonValue]
//         : metafield.jsonValue;

//     for (const metafieldId of ids) {
//       if (!metafieldId) {
//         continue;
//       }

//       const metafieldRes = await graphqlClient(
//         `#graphql
//         query ProductMetafield($id: ID!, $fieldKey: String!) {
//           metaobject(id: $id) {
//             displayName
//             id
//             type
//             handle
//             slug: field(key: $fieldKey) {
//               jsonValue
//             }
//           }
//         }
//         `,
//         {
//           variables: {
//             id: metafieldId,
//             fieldKey: 'slug',
//           },
//         },
//       );

//       const {
//         data: { metaobject },
//       } = (await metafieldRes.json()) as {
//         data: {
//           metaobject: {
//             displayName: string;
//             id: string;
//             type: string;
//             handle: string;
//             slug: {
//               jsonValue: string;
//             } | null;
//           };
//         };
//       };

//       const metaKey = metafield.key.includes('custom')
//         ? metafield.key
//         : `${metafield.namespace}.${metafield.key}`;

//       metafieldRecords[metaKey as Metafield] ??= [];

//       metafieldRecords[metaKey as Metafield]?.push(
//         metaobject.slug?.jsonValue || metaobject.displayName,
//       );
//     }
//   }

//   return { metafields: metafieldRecords, msrpByVariants };
// }
