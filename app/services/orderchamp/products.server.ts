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
import { InventoryPolicy, Platform, ProductStatus, UserError } from '@/types';
import { ProductUpdateFieldsWithId } from '@/hooks/use-product-form-fields';
import prisma from '@/db.server';
import { ShopifyProduct } from '../shopify/types';

export async function retrieveChunkOfProducts(
  first: number,
  afterCursor?: string,
): Promise<
  | {
      products: OrderchampProductsResponse;
      cost: OrderchampQueryCost;
    }
  | undefined
> {
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
    console.error(
      'An error occurred while receiving orderchamp products: ',
      err?.message,
    );
  }
}

export async function retrieveProductByID(id: string) {
  try {
    const query = gql`
      query Products($id: ID!) {
        product(id: $id) {
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
      }
    `;

    const { data } = (await orderchampGraphqlClient.rawRequest(query, {
      id: id || 'empty',
    })) as {
      data: { product: OrderchampProduct | null };
    };

    return data?.product;
  } catch (err) {
    console.error(
      'An error occurred while receiving orderchamp product: ',
      err?.message,
    );
  }
}

export async function retrieveProductVariantByID(id: string) {
  try {
    const query = gql`
      query ProductVariant($id: ID!) {
        productVariant(id: $id) {
          id
          sku
          inventoryQuantity
        }
      }
    `;

    const { data } = (await orderchampGraphqlClient.rawRequest(query, {
      id: id || 'empty',
    })) as {
      data: {
        productVariant: {
          id: string;
          sku: string;
          inventoryQuantity: number;
        } | null;
      };
    };

    return data?.productVariant;
  } catch (err) {
    console.error(
      'An error occurred while receiving orderchamp product variant: ',
      err?.message,
    );
  }
}

export async function updateProductVariantQuantity(
  id: string,
  quantity: number,
) {
  try {
    const query = gql`
      mutation ProductQuantityUpdate($id: ID!, $inventoryQuantity: Int!) {
        productVariantUpdate(
          input: { id: $id, inventoryQuantity: $inventoryQuantity }
        ) {
          productVariant {
            id
            sku
            inventoryQuantity
          }
          userErrors {
            field
            message
          }
        }
      }
    `;

    const { data } = (await orderchampGraphqlClient.rawRequest(query, {
      id: id || 'empty',
    })) as {
      data: {
        productVariant: {
          id: string;
          sku: string;
          inventoryQuantity: number;
        } | null;
      };
    };

    return data?.productVariant;
  } catch (err) {
    console.error(
      'An error occurred while updating orderchamp product variant quantity: ',
      err?.message,
    );
  }
}

export async function retrieveAllProducts() {
  try {
    const limit = 10;
    let afterCursor: string | undefined = undefined;
    let hasNextPage = true;
    let productsData: OrderchampProduct[] = [];

    while (hasNextPage) {
      const data = await retrieveChunkOfProducts(limit, afterCursor);

      if (!data) {
        break;
      }

      const { cost, products } = data;

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
    console.error(
      'An error occurred while receiving orderchamp products: ',
      err?.message,
    );
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
      error?.message,
    );
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
    console.error(
      'An error occurred while removing orderchamp product: ',
      err?.message,
    );
  }
}

export async function updateProduct(
  { productFields, variantFields }: ProductUpdateFieldsWithId,
  images: { id?: string; sourceUrl?: string }[] = [],
  marketplaceStorefrontLabel?: string,
) {
  try {
    const doc = gql`
      mutation ProductUpdate($input: ProductUpdateInput!) {
        productUpdate(input: $input) {
          product {
            id
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

    const {
      status,
      category,
      storefrontId: productStorefrontId,
      id: productId,
      ...restProductFields
    } = productFields;

    const variants = variantFields.map(
      ({
        parentVariantId,
        createdAt,
        updatedAt,
        storefrontId,
        title,
        id,
        ...restFields
      }) => ({
        ...restFields,
        id: storefrontId,
      }),
    );

    const input: Record<string, any> = {
      ...restProductFields,
      id: productStorefrontId,
      variants,
      images,
    };

    if (category) {
      input.category = category;
    }

    const { data } = (await orderchampGraphqlClient.rawRequest(doc, {
      input,
    })) as {
      data: {
        productUpdate: {
          product: {
            id: string;
            variants: { nodes: OrderchampProductVariant[] };
          };
          userErrors: UserError[];
        };
      };
    };

    const updatedProductId = data?.productUpdate?.product?.id || 'empty';

    const productUpdateUserErrors = data?.productUpdate?.userErrors || [];

    if (productUpdateUserErrors.length > 0) {
      throw new Error(productUpdateUserErrors[0].message);
    }

    let isActiveStatus = status === ProductStatus.ACTIVE;

    if (marketplaceStorefrontLabel) {
      const storefronts = await retrieveStorefronts(10);

      const currentStorefront = storefronts.find(
        (storefront) => storefront.name === marketplaceStorefrontLabel,
      );

      const publishProductDoc = gql`
        mutation ProductPublish($input: ProductPublishInput!) {
          productPublish(input: $input) {
            userErrors {
              field
              message
            }
          }
        }
      `;

      if (currentStorefront) {
        const unpublishProductDoc = gql`
          mutation ProductUnpublish($input: ProductUnpublishInput!) {
            productUnpublish(input: $input) {
              userErrors {
                field
                message
              }
            }
          }
        `;

        const {
          data: { productUnpublish },
        } = (await orderchampGraphqlClient.rawRequest(unpublishProductDoc, {
          input: {
            id: updatedProductId,
          },
        })) as { data: { productUnpublish: { userErrors: UserError[] } } };

        const unpublishUserErrors = productUnpublish.userErrors;

        if (unpublishUserErrors.length > 0) {
          throw unpublishUserErrors[0].message;
        }

        const {
          data: { productPublish },
        } = (await orderchampGraphqlClient.rawRequest(publishProductDoc, {
          input: {
            id: updatedProductId,
            storefrontId: currentStorefront?.id || '',
          },
        })) as { data: { productPublish: { userErrors: UserError[] } } };

        const userErrors = productPublish.userErrors;

        if (userErrors.length > 0) {
          throw userErrors[0].message;
        }

        isActiveStatus = true;
      }
    } else {
      const unpublishProductDoc = gql`
        mutation ProductUnpublish($input: ProductUnpublishInput!) {
          productUnpublish(input: $input) {
            userErrors {
              field
              message
            }
          }
        }
      `;

      const {
        data: { productUnpublish },
      } = (await orderchampGraphqlClient.rawRequest(unpublishProductDoc, {
        input: {
          id: updatedProductId,
        },
      })) as { data: { productUnpublish: { userErrors: UserError[] } } };

      const unpublishUserErrors = productUnpublish.userErrors;

      if (unpublishUserErrors.length > 0) {
        throw unpublishUserErrors[0].message;
      }

      isActiveStatus = false;
    }

    const updatedPlatformProduct = await prisma.platformProduct.update({
      where: {
        id: productId,
        platform: Platform.Orderchamp,
      },
      data: {
        category: category || 'Uncategorized',
        description: productFields.description,
        status: isActiveStatus ? ProductStatus.ACTIVE : ProductStatus.DRAFT,
        tags: productFields.tags,
        title: productFields.title,
      },
      include: {
        product: {
          include: {
            variants: {
              include: {
                platformProductVariants: true,
              },
            },
          },
        },
      },
    });

    const updatedProductVariants =
      data?.productUpdate?.product?.variants?.nodes;

    if (!updatedProductVariants?.length) {
      return;
    }

    for (const variant of updatedProductVariants) {
      const matchingProductVariant =
        updatedPlatformProduct.product.variants.find(
          (v) => v.sku === variant.sku,
        );

      if (!matchingProductVariant) {
        continue;
      }

      await prisma.platformProductVariant.upsert({
        where: {
          platform: Platform.Orderchamp,
          storefrontId: variant.id,
        },
        update: {
          title: variant.title,
          barcode: variant.barcode,
          price: variant.price,
          productVariant: {
            update: {
              sku: variant.sku,
              inventoryQuantity: variant.inventoryQuantity,
            },
          },
        },
        create: {
          platform: Platform.Orderchamp,
          storefrontId: variant.id,
          title: variant.title,
          barcode:
            variant.barcode ||
            updatedPlatformProduct.product.variants
              .find(({ sku }) => variant.sku === sku)
              ?.shopifyVariantStorefrontId?.replace(
                'gid://shopify/ProductVariant/',
                '',
              ),
          price: variant.price,
          createdAt: variant.createdAt,
          updatedAt: variant.updatedAt,
          productVariant: { connect: { id: matchingProductVariant.id } },
        },
      });
    }
  } catch (err) {
    console.error(
      'An error occurred while update Orderchamp product: ',
      err?.message,
    );
  }
}

export async function retrieveStorefronts(first = 10) {
  const doc = gql`
    query MarketplaceStorefronts($first: Int!) {
      storefronts(first: $first) {
        nodes {
          id
          name
          slug
        }
      }
    }
  `;

  const { data } = (await orderchampGraphqlClient.rawRequest(doc, {
    first,
  })) as {
    data: {
      storefronts: {
        nodes: {
          id: string;
          name: string;
          slug: string;
        }[];
      };
    };
  };

  return data.storefronts.nodes;
}

export async function createProduct(
  input: CreateProductInput,
  parentProduct: Product & { variants: ProductVariant[] },
  marketplaceStorefrontLabel?: string,
) {
  try {
    const product = await prisma.platformProduct.findFirst({
      where: {
        platform: Platform.Orderchamp,
        title: input.title,
      },
    });

    console.log({ product: Boolean(product) });

    if (product) {
      return;
    }

    const createProductDoc = gql`
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

    const { variants, ...restInput } = input;

    const mappedInput = {
      ...restInput,
      variants: variants.map(({ images, ...variant }) => ({
        ...variant,
      })),
    };

    const { data } = (await orderchampGraphqlClient.rawRequest(
      createProductDoc,
      {
        input: mappedInput,
      },
    )) as {
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

    const publishProductDoc = gql`
      mutation ProductPublish($input: ProductPublishInput!) {
        productPublish(input: $input) {
          userErrors {
            field
            message
          }
        }
      }
    `;

    const createdProduct = data?.productCreate?.product || null;

    if (!createdProduct) {
      throw new Error('Error occurred while create Orderchamp product.');
    }

    let isActiveStatus = createdProduct.salesChannels.length > 0;

    if (marketplaceStorefrontLabel) {
      const storefronts = await retrieveStorefronts(10);

      const currentStorefront = storefronts.find(
        (storefront) => storefront.name === marketplaceStorefrontLabel,
      );

      if (currentStorefront) {
        const {
          data: { productPublish },
        } = (await orderchampGraphqlClient.rawRequest(publishProductDoc, {
          input: {
            id: createdProduct.id,
            storefrontId: currentStorefront?.id || '',
          },
        })) as { data: { productPublish: { userErrors: UserError[] } } };

        const userErrors = productPublish.userErrors;

        if (userErrors.length > 0) {
          throw userErrors[0].message;
        }

        isActiveStatus = true;
      }
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
        status: !isActiveStatus ? ProductStatus.DRAFT : ProductStatus.ACTIVE,
        createdAt: createdProduct.createdAt,
        updatedAt: createdProduct.updatedAt,
      },
    });

    const productVariants = createdProduct.variants.nodes;

    // const updateProductImagesDoc = gql`
    //   mutation ProductVariantUpdate($id: ID!, $images: [ImageInput]) {
    //     productVariantUpdate(input: { id: $id, images: $images }) {
    //       userErrors {
    //         field
    //         message
    //       }
    //     }
    //   }
    // `;

    // for (const variant of variants) {
    //   const createdVariantId = productVariants?.find(
    //     ({ sku }) => sku === variant.sku,
    //   )?.id;

    //   if (!createdVariantId || !variant.images.length) {
    //     continue;
    //   }

    //   const { data: variantData } = (await orderchampGraphqlClient.rawRequest(
    //     updateProductImagesDoc,
    //     { id: createdVariantId, images: variant.images },
    //   )) as {
    //     data: {
    //       productVariantUpdate: {
    //         userErrors: UserError[];
    //       };
    //     };
    //   };

    //   const createImageErrors = variantData?.productVariantUpdate?.userErrors;

    //   if (createImageErrors.length > 0) {
    //     throw new Error(createImageErrors[0].message);
    //   }
    // }

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
      err?.message,
    );
  }
}

export async function syncProduct(
  shopifyProduct: ShopifyProduct,
  category?: string,
  marketplaceStorefrontLabel?: string,
) {
  const productWithVariants = await prisma.product.findFirst({
    where: {
      shopifyStorefrontId: shopifyProduct.id,
    },
    include: {
      platformProducts: true,
      variants: {
        include: {
          platformProductVariants: true,
        },
      },
    },
  });

  if (!productWithVariants) {
    return;
  }

  const orderchampPlatformProduct = productWithVariants.platformProducts.find(
    ({ platform }) => platform === Platform.Orderchamp,
  );

  const productFromDB = await prisma.platformProduct.findFirst({
    where: {
      platform: Platform.Orderchamp,
      title: shopifyProduct.title,
    },
  });

  const isProductExist = await retrieveProductByID(
    orderchampPlatformProduct?.storefrontId || 'empty',
  );

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

  if (!isProductExist && !productFromDB) {
    const input: CreateProductInput = {
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
          msrp: variant.msrp || variant.price || '0.01',
          inventoryQuantity: variant.inventoryQuantity,
          price: String(Math.max(Number(variant.price) || 0.01, 0.01)),
          sku: variant.sku || `${variantId}-temp-sku`,
          option1: variant.selectedOptions?.[0]?.value || null,
          option2: variant.selectedOptions?.[1]?.value || null,
          option3: variant.selectedOptions?.[2]?.value || null,
        };
      }),
    };

    if (category) {
      // @ts-ignore
      input.category = category;
    }

    await createProduct(input, productWithVariants, marketplaceStorefrontLabel);

    return;
  }

  const shopifyProductVariants = productWithVariants.variants
    .flatMap(({ platformProductVariants }) => platformProductVariants)
    .filter(({ platform }) => platform === Platform.Shopify);

  const orderchampProductVariants = productWithVariants.variants
    .flatMap(({ platformProductVariants, shopifyVariantStorefrontId }) =>
      platformProductVariants.map((variant) => ({
        ...variant,
        shopifyVariantStorefrontId,
      })),
    )
    .filter(({ platform }) => platform === Platform.Orderchamp);

  const productFields = {
    id: orderchampPlatformProduct?.id || 'empty',
    category,
    storefrontId: orderchampPlatformProduct?.storefrontId || 'empty',
    title: shopifyProduct.title,
    description: shopifyProduct.descriptionHtml || '',
    status: (orderchampPlatformProduct?.status ||
      ProductStatus.DRAFT) as ProductStatus,
    tags: orderchampPlatformProduct?.tags || [],
    ...options,
  };

  const variantFields = shopifyProduct.variants.nodes.map((variant, idx) => ({
    msrp: String(Math.max(Number(variant.msrp || variant.price), 0.01)),
    parentVariantId:
      shopifyProductVariants.find(
        (shopifyVariant) => shopifyVariant.storefrontId === variant.id,
      )?.productVariantId || '',
    id: variant.id,
    storefrontId:
      orderchampProductVariants.find(
        ({ shopifyVariantStorefrontId }) =>
          shopifyVariantStorefrontId === variant.id,
      )?.storefrontId || '',
    inventoryQuantity: variant.inventoryQuantity,
    inventoryPolicy: variant.inventoryPolicy.toUpperCase() as InventoryPolicy,
    title: variant.title,
    option1:
      variant.selectedOptions.find((selectedOption) => {
        const shopifyOption = shopifyProduct.options.find(
          (option) => option.position === 1,
        );

        return selectedOption.name === shopifyOption?.name;
      })?.value || null,
    option2:
      variant.selectedOptions.find((selectedOption) => {
        const shopifyOption = shopifyProduct.options.find(
          (option) => option.position === 2,
        );

        return selectedOption.name === shopifyOption?.name;
      })?.value || null,
    option3:
      variant.selectedOptions.find((selectedOption) => {
        const shopifyOption = shopifyProduct.options.find(
          (option) => option.position === 3,
        );

        return selectedOption.name === shopifyOption?.name;
      })?.value || null,
    barcode:
      variant.barcode ||
      variant.id.replace('gid://shopify/ProductVariant/', ''),
    price: String(Math.max(+variant.price || 0, 0.01)),
    sku:
      variant.sku ||
      `${variant.id.replace('gid://shopify/ProductVariant/', '')}-temp-sku`,
    createdAt: variant.createdAt,
    updatedAt: variant.updatedAt,
  }));

  const preparedImages = !shopifyProduct.media.nodes.length
    ? [{ id: '' }]
    : shopifyProduct.media.nodes.map(({ preview }) => ({
        sourceUrl: preview.image.url,
      }));

  await updateProduct(
    { productFields, variantFields },
    preparedImages,
    marketplaceStorefrontLabel,
  );
}
