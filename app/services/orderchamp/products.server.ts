import { gql } from 'graphql-request';
import { Product, ProductVariant } from '@prisma/client';

import { orderchampGraphqlClient } from '@/services/orderchamp/graphql-client';
import {
  CreateProductInput,
  OrderchampProduct,
  OrderchampProductsResponse,
  OrderchampProductVariant,
  OrderchampQueryCost,
} from '@/services/orderchamp/types';
import { handleGraphqlThrottle } from '@/utils/graphql-throttle-handler';
import { MappedPlatformProductData } from '@/utils/map-platform-products';
import {
  InventoryPolicy,
  Platform,
  ProductStatus,
  ProductWithPlatformData,
  UserError,
} from '@/types';
import {
  ProductUpdateFields,
  ProductUpdateFieldsWithId,
} from '@/hooks/use-product-form-fields';
import prisma from '@/db.server';
import { generateUpdateProductFields } from '@/utils/generate-update-product-fields';
import { FullShopifyProduct, ShopifyProduct } from '../shopify/types';

export async function retrieveChunkOfProducts(
  first: number,
  afterCursor?: string,
): Promise<{
  products: OrderchampProductsResponse;
  cost: OrderchampQueryCost;
}> {
  try {
    const query = gql`
      query Products($first: Int!, $afterCursor: String) {
        products(first: $first, after: $afterCursor) {
          nodes {
            id
            title
            description
            databaseId
            salesChannels
            category {
              id
              name
            }
            tags
            createdAt
            updatedAt
            variants(first: 100) {
              nodes {
                id
                inventoryQuantity
                barcode
                sku
                title
                price
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
    `;

    const { data, extensions } = (await orderchampGraphqlClient.rawRequest(
      query,
      { first, afterCursor },
    )) as {
      data: { products: OrderchampProductsResponse };
      extensions: { throttle: OrderchampQueryCost };
    };

    return { products: data.products, cost: extensions.throttle };
  } catch (err) {
    throw err;
  }
}

export async function retrieveProductByID(id: string) {
  try {
    const query = gql`
      query Products($id: ID!) {
        product(id: $id) {
          id
        }
      }
    `;

    const { data } = (await orderchampGraphqlClient.rawRequest(query, {
      id,
    })) as {
      data: { product: { id: string } | null };
    };

    return data?.product;
  } catch (err) {
    throw err;
  }
}

export async function retrieveAllProducts(): Promise<OrderchampProduct[]> {
  try {
    const limit = 10;
    let afterCursor: string | undefined = undefined;
    let hasNextPage = true;
    let productsData: OrderchampProduct[] = [];

    while (hasNextPage) {
      const { products, cost } = await retrieveChunkOfProducts(
        limit,
        afterCursor,
      );

      const { nodes, pageInfo } = products;

      productsData = [...productsData, ...nodes];

      hasNextPage = pageInfo.hasNextPage;
      afterCursor = hasNextPage ? pageInfo.endCursor : '';

      await handleGraphqlThrottle({
        requestedQueryCost: cost.requestedCost,
        currentlyAvailable: Math.max(0, cost.limit - cost.requestedCost),
        maximumAvailable: cost.limit,
        restoreRate: cost.restoreRate,
      });
    }

    return productsData;
  } catch (err) {
    throw err;
  }
}

export async function importOrderchampProducts(
  orderchampProducts: OrderchampProduct[],
  skuMap: Map<string, MappedPlatformProductData>,
) {
  try {
    const filteredProducts = orderchampProducts.filter(({ variants }) => {
      const variantNodes = variants.nodes;

      return variantNodes.some(({ sku }) => skuMap.has(sku));
    });

    for (const product of filteredProducts) {
      let isPlatformProductCreated = false;

      const productVariants = product.variants.nodes.filter((variant) =>
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
              category: product.category?.name || null,
              title: product.title,
              tags: product.tags || [],
              platform: Platform.Orderchamp,
              storefrontId: product.id,
              sourceUrl: `https://www.orderchamp.com/backoffice/products/${product.databaseId}`,
              description: product.description,
              status: !product?.salesChannels?.length
                ? ProductStatus.DRAFT
                : ProductStatus.ACTIVE,
              createdAt: product.createdAt,
              updatedAt: product.updatedAt,
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
            platform: Platform.Orderchamp,
            price: productVariant?.price || '0.01',
            title: productVariant.title,
            barcode: productVariant.barcode,
            storefrontId: productVariant.id,
            productVariant: {
              connect: { id: parentProductVariant.productVariantId },
            },
            createdAt: productVariant.createdAt,
            updatedAt: productVariant.updatedAt,
          },
        });
      }
    }
  } catch (error) {
    console.error(
      'An error occurred while import products from Orderchamp: ',
      error,
    );
    throw error;
  }
}

export async function removeProduct(productId: string) {
  try {
    const doc = gql`
      mutation ProductDelete($input: ProductDeleteInput!) {
        productDelete(input: $input) {
          deletedProductId
          userErrors {
            field
            message
          }
        }
      }
    `;

    const { data } = (await orderchampGraphqlClient.rawRequest(doc, {
      input: {
        id: productId,
      },
    })) as {
      data: {
        productDelete: {
          deletedProductId: string;
          userErrors: UserError[];
        };
      };
    };

    const userErrors = data?.productDelete?.userErrors || [];

    if (userErrors.length > 0) {
      throw new Error(userErrors[0].message);
    }
  } catch (err) {
    throw err;
  }
}

export async function updateProduct(
  { productFields, variantFields }: ProductUpdateFieldsWithId,
  images: { sourceUrl: string }[] = [],
) {
  try {
    const doc = gql`
      mutation ProductUpdate($input: ProductUpdateInput!) {
        productUpdate(input: $input) {
          product {
            id
          }
          userErrors {
            message
            field
          }
        }
      }
    `;

    const {
      status,
      storefrontId: productStorefrontId,
      id: productId,
      ...restProductFields
    } = productFields;

    const variants = variantFields.map(
      ({ storefrontId, id, ...restFields }) => ({
        id: storefrontId,
        ...restFields,
      }),
    );

    const input: Record<string, any> = {
      ...restProductFields,
      id: productStorefrontId,
      variants,
    };

    if (images.length) {
      input.images = images;
    }

    const { data } = (await orderchampGraphqlClient.rawRequest(doc, {
      input,
    })) as {
      data: {
        productUpdate: { product: { id: string }; userErrors: UserError[] };
      };
    };

    const userErrors = data?.productUpdate?.userErrors || [];

    if (userErrors.length > 0) {
      throw new Error(userErrors[0].message);
    }

    await prisma.platformProduct.update({
      where: {
        id: productId,
        platform: Platform.Orderchamp,
      },
      data: {
        description: productFields.description,
        status: productFields.status,
        tags: productFields.tags,
        title: productFields.title,
      },
    });

    for (const variantField of variantFields) {
      await prisma.platformProductVariant.update({
        where: {
          platform: Platform.Orderchamp,
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
  } catch (err) {
    console.log('An error occurred while update Orderchamp product: ', err);
    throw err;
  }
}

export async function createProduct(
  input: CreateProductInput,
  parentProduct: Product & { variants: ProductVariant[] },
) {
  try {
    const doc = gql`
      mutation ProductCreate($input: ProductCreateInput!) {
        productCreate(input: $input) {
          product {
            id
            title
            description
            databaseId
            salesChannels
            category {
              id
              name
            }
            tags
            createdAt
            updatedAt
            variants(first: 100) {
              nodes {
                id
                inventoryQuantity
                barcode
                sku
                title
                price
                createdAt
                updatedAt
              }
            }
          }
          userErrors {
            message
            field
          }
        }
      }
    `;

    const { data } = (await orderchampGraphqlClient.rawRequest(doc, {
      input,
    })) as {
      data: {
        productCreate: {
          product: OrderchampProduct;
          userErrors: UserError[];
        };
      };
    };

    const userErrors = data?.productCreate?.userErrors || [];

    if (userErrors.length > 0) {
      throw new Error(userErrors[0].message);
    }

    const createdProduct = data?.productCreate?.product || null;

    if (!createdProduct) {
      throw new Error('Error occurred while create Orderchamp product.');
    }

    await prisma.platformProduct.create({
      data: {
        product: { connect: { id: parentProduct.id } },
        category: createdProduct?.category?.name || null,
        title: createdProduct.title,
        tags: createdProduct.tags || [],
        platform: Platform.Orderchamp,
        storefrontId: createdProduct.id,
        sourceUrl: `https://www.orderchamp.com/backoffice/products/${createdProduct.databaseId}`,
        description: createdProduct.description,
        status: !createdProduct?.salesChannels?.length
          ? ProductStatus.DRAFT
          : ProductStatus.ACTIVE,
        createdAt: createdProduct.createdAt,
        updatedAt: createdProduct.updatedAt,
      },
    });

    const productVariants = createdProduct.variants.nodes;

    for (const variant of productVariants) {
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
          title: variant.title,
          barcode: variant.barcode || null,
          price: variant.price || '0.01',
          productVariant: {
            connect: {
              id: parentProductVariant.id,
            },
          },
          createdAt: variant.createdAt,
          updatedAt: variant.updatedAt,
        },
      });
    }
  } catch (err) {
    console.error(
      'An error occurred while create product on Orderchamp: ',
      err,
    );

    throw err;
  }
}

export async function createProductVariant(
  {
    option1,
    option2,
    option3,
    ...input
  }: Omit<CreateProductInput['variants'][number], 'option'> & {
    productId: string;
  },
  parentProductVariantId: string,
) {
  const option = [option1, option2, option3].filter(Boolean).join(', ');

  try {
    const doc = gql`
      mutation ProductVariantCreate($input: ProductVariantCreateInput!) {
        productVariantCreate(input: $input) {
          productVariant {
            id
            inventoryQuantity
            barcode
            sku
            title
            price
            createdAt
            updatedAt
          }
          userErrors {
            message
            field
          }
        }
      }
    `;

    console.log({
      input: JSON.stringify(
        {
          ...input,
          option,
        },
        null,
        2,
      ),
    });

    const { data } = (await orderchampGraphqlClient.rawRequest(doc, {
      input: {
        ...input,
        option,
      },
    })) as {
      data: {
        productVariantCreate: {
          productVariant: OrderchampProductVariant;
          userErrors: UserError[];
        };
      };
    };

    const userErrors = data?.productVariantCreate?.userErrors || [];

    if (userErrors.length > 0) {
      throw new Error(userErrors[0].message);
    }

    const createdProductVariant =
      data?.productVariantCreate?.productVariant || null;

    if (!createdProductVariant) {
      throw new Error(
        'Error occurred while create Orderchamp product variant.',
      );
    }

    await prisma.platformProductVariant.create({
      data: {
        platform: Platform.Orderchamp,
        storefrontId: createdProductVariant.id,
        title: createdProductVariant.title,
        barcode: createdProductVariant.barcode || null,
        price: createdProductVariant.price || '0.01',
        productVariant: {
          connect: {
            id: parentProductVariantId,
          },
        },
        createdAt: createdProductVariant.createdAt,
        updatedAt: createdProductVariant.updatedAt,
      },
    });
  } catch (err) {
    console.error(
      'An error occurred while create product variant on Orderchamp: ',
      err,
    );

    throw err;
  }
}

export async function removeProductVariant(id: string) {
  try {
    const doc = gql`
      mutation ProductVariantDelete($input: ProductVariantDeleteInput!) {
        productVariantDelete(input: $input) {
          deletedProductVariantId
          userErrors {
            message
            field
          }
        }
      }
    `;

    const { data } = (await orderchampGraphqlClient.rawRequest(doc, {
      input: {
        id,
      },
    })) as {
      data: {
        productVariantDelete: {
          deletedProductVariantId: string;
          userErrors: UserError[];
        };
      };
    };

    const userErrors = data?.productVariantDelete?.userErrors || [];

    if (userErrors.length > 0) {
      throw new Error(userErrors[0].message);
    }

    await prisma.platformProductVariant.delete({
      where: {
        storefrontId: id,
      },
    });
  } catch (err) {
    console.error(
      'An error occurred while create product on Orderchamp: ',
      err,
    );

    throw err;
  }
}

export async function syncProduct(
  productWithVariants: ProductWithPlatformData | null,
  shopifyProduct: ShopifyProduct,
) {
  if (!productWithVariants) {
    return;
  }

  const productVariantsToRemove = productWithVariants.variants
    .filter(
      (variant) =>
        !shopifyProduct.variants.nodes.some(
          (shopifyVariant) =>
            shopifyVariant.id === variant.shopifyVariantStorefrontId,
        ),
    )
    .flatMap(({ platformProductVariants }) =>
      platformProductVariants.filter(
        ({ platform }) => platform === Platform.Orderchamp,
      ),
    );

  const orderchampPlatformProduct = productWithVariants.platformProducts.find(
    ({ platform }) => platform === Platform.Orderchamp,
  );

  const isProductExist = await retrieveProductByID(
    orderchampPlatformProduct?.storefrontId || '',
  );

  if (!isProductExist) {
    const options = shopifyProduct.options.reduce(
      (acc, option) => {
        const optionLabel = `option${option.position}` as
          | 'option1'
          | 'option2'
          | 'option3';
        acc[optionLabel] = option.name;

        return acc;
      },
      {} as {
        option1: string;
        option2: string;
        option3: string;
      },
    );

    createProduct(
      {
        title: shopifyProduct.title,
        description: shopifyProduct.descriptionHtml,
        brand: shopifyProduct.vendor,
        images: shopifyProduct.media.nodes.map((media) => ({
          sourceUrl: media.preview.image.url,
        })),
        ...options,
        variants: shopifyProduct.variants.nodes.map((variant) => {
          const variantId = variant.id.replace(
            'gid://shopify/ProductVariant/',
            '',
          );

          return {
            barcode: String(Number(variant.barcode) || variantId),
            inventoryPolicy: variant.inventoryPolicy,
            inventoryQuantity: variant.inventoryQuantity,
            price: String(Math.max(Number(variant.price) || 0.01, 0.01)),
            sku: variant.sku || `${variantId}-temp-sku`,
            option1: variant.selectedOptions?.[0]?.name || null,
            option2: variant.selectedOptions?.[1]?.name || null,
            option3: variant.selectedOptions?.[2]?.name || null,
          };
        }),
      },
      productWithVariants,
    );

    return;
  }

  const orderchampUpdateProductFields = generateUpdateProductFields({
    currentPlatform: Platform.Orderchamp,
    productFields: {
      title: shopifyProduct.title,
      description: shopifyProduct.descriptionHtml || '',
      status: (orderchampPlatformProduct?.status ||
        ProductStatus.DRAFT) as ProductStatus,
      tags: orderchampPlatformProduct?.tags || [],
    },
    variantFields: productWithVariants.variants.reduce(
      (acc, variant) => {
        const orderchampPlatformVariant = variant.platformProductVariants.find(
          ({ platform }) => platform === Platform.Orderchamp,
        );

        const shopifyProductVariant = shopifyProduct.variants.nodes.find(
          ({ id }) => id === variant.shopifyVariantStorefrontId,
        );

        if (orderchampPlatformVariant) {
          const variantId = variant.shopifyVariantStorefrontId.replace(
            'gid://shopify/ProductVariant/',
            '',
          );

          acc[orderchampPlatformVariant.id] = {
            barcode: shopifyProductVariant?.barcode || variantId,
            price: shopifyProductVariant?.price || '0.01',
            sku: variant?.sku || `${variantId}-temp-sku`,
          };
        }

        return acc;
      },
      {} as ProductUpdateFields['variantFields'],
    ),
    product: productWithVariants,
  });

  const orderchampProductVariants = productWithVariants.variants.flatMap(
    (variant) =>
      variant.platformProductVariants
        .map((platformVariant) => ({
          ...platformVariant,
          shopifyVariantStorefrontId: variant.shopifyVariantStorefrontId,
        }))
        .filter(
          (platformVariant) => platformVariant.platform === Platform.Orderchamp,
        ),
  );

  const newOrderchampVariants = shopifyProduct.variants.nodes.filter(
    (shopifyVariant) =>
      orderchampProductVariants.every(
        (variant) => variant.shopifyVariantStorefrontId !== shopifyVariant.id,
      ),
  );

  for (const newVariant of newOrderchampVariants) {
    const parentVariantId =
      productWithVariants.variants.find(
        (variant) => variant.shopifyVariantStorefrontId === newVariant.id,
      )?.id || '';

    const variantId = newVariant.id.replace(
      'gid://shopify/ProductVariant/',
      '',
    );

    await createProductVariant(
      {
        inventoryPolicy:
          newVariant.inventoryPolicy.toUpperCase() as InventoryPolicy,
        barcode: newVariant.barcode || variantId,
        sku: newVariant.sku || `${variantId}-temp-sku`,
        price: newVariant.price || '0.01',
        inventoryQuantity: newVariant.inventoryQuantity,
        option1: newVariant.selectedOptions?.[0]?.value || null,
        option2: newVariant.selectedOptions?.[1]?.value || null,
        option3: newVariant.selectedOptions?.[2]?.value || null,
        productId: orderchampUpdateProductFields.productFields.storefrontId,
      },
      parentVariantId,
    );
  }

  await updateProduct(
    orderchampUpdateProductFields,
    shopifyProduct.media.nodes.map(({ preview }) => ({
      sourceUrl: preview.image.url,
    })),
  );
}
