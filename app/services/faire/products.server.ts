import { MappedPlatformProductData } from '@/utils/map-platform-products';
import { faireApiClient } from './api-client';
import {
  FaireProduct,
  FaireProductsResponse,
  CreateFaireProductInput,
  TaxonomyType,
  UpdateFaireProductInput,
  FaireProductVariantOption,
  FaireProductVariant,
} from './types';
import { InventoryPolicy, Platform, ProductStatus } from '@/types';
import { Product, ProductVariant } from '@prisma/client';
import { MediaType, ShopifyProduct } from '../shopify/types';
import { escapeHTML } from '@/utils/escape-html';
import { isWithinMultiplierRange } from '@/utils/is-within-multiplier-range';
import prisma from '@/db.server';
import { v4 as uuidV4 } from 'uuid';

export async function retrieveChunkOfProducts(page = 1, limit = 50) {
  try {
    const { data: productsResponse } =
      await faireApiClient.get<FaireProductsResponse>(
        `/products?page=${page}&limit=${limit}`,
      );

    return productsResponse;
  } catch (err) {
    console.error(
      'An error occurred while retrieveChunkOfProducts Faire: ',
      err?.message,
    );
  }
}

export async function retrieveAllProducts() {
  try {
    const limit = 50;
    let page = 1;
    let hasNextPage = true;
    let productsData: FaireProduct[] = [];

    while (hasNextPage) {
      const productsChunk = await retrieveChunkOfProducts(page, limit);

      if (!productsChunk) {
        continue;
      }

      productsData = [...productsData, ...productsChunk.products];

      if (productsChunk.products.length < limit) {
        hasNextPage = false;
      }

      page++;
    }

    return productsData;
  } catch (err) {
    console.error(
      'An error occurred while retrieveAllProducts Faire: ',
      err?.message,
    );
  }
}

export async function retrieveAllProductCategories() {
  const { data } = await faireApiClient.get<{ taxonomy_types: TaxonomyType[] }>(
    '/products/types',
  );

  return data.taxonomy_types;
}

export async function removeProduct(id: string) {
  try {
    await faireApiClient.delete<void, void>(`/products/${id}`);
  } catch (err) {
    console.error(
      'An error occurred while removing Faire product: ',
      err?.message,
    );
  }
}

export async function retrieveProductByID(id: string) {
  try {
    const { data } = await faireApiClient.get<FaireProduct | null>(
      `/products/${id}`,
    );

    return data;
  } catch (err) {
    console.error(
      'An error occurred while retrieving Faire product: ',
      err?.message,
    );
  }
}

export async function removeProductVariant(
  productId: string,
  variantId: string,
) {
  return faireApiClient.delete<void, void>(
    `/products/${productId}/variants/${variantId}`,
  );
}

export async function retrieveProductVariantInventoryByID(id: string) {
  const { data } = await faireApiClient.get<{
    inventories: {
      [key: string]: {
        on_hand_quantity: {
          type: string;
          quantity?: number;
        };
        committed_quantity: {
          type: string;
          quantity?: number;
        };
        available_quantity: {
          type: string;
          quantity?: number;
        };
      };
    };
  }>(`/product-inventory/by-product-variant-ids?ids=${id}`);

  return data.inventories;
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
                productVariant?.prices?.[0].wholesale_price.amount_minor || 1,
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
      error?.message,
    );
  }
}

export async function updateProductQuantity(input: {
  inventories: {
    product_variant_id: string;
    on_hand_quantity: number | null;
  }[];
}) {
  try {
    const { data: inventories } = await faireApiClient.patch<
      Record<
        string,
        {
          on_hand_quantity: { type: string; quantity: number };
          committed_quantity: { type: string; quantity: number };
          available_quantity: { type: string; quantity: number };
        }
      >
    >('/product-inventory/by-product-variant-ids', input);

    return inventories;
  } catch (err) {
    console.error(
      'An error occurred while update Faire product variant quantity: ',
      err?.message,
    );
  }
}

export async function createProduct(
  input: CreateFaireProductInput,
  parentProduct: Product & { variants: ProductVariant[] },
) {
  try {
    const product = await prisma.platformProduct.findFirst({
      where: {
        platform: Platform.Faire,
        title: input.name,
      },
    });
    console.log('\n\n=====================');

    console.log({ productExist: !!product, title: product?.title });

    if (product) {
      return;
    }

    const { data: createdProduct } = await faireApiClient.post<FaireProduct>(
      '/products',
      input,
    );

    console.log({
      inputVariants: JSON.stringify(input.variants, null, 2),
      inputVariantsSets: JSON.stringify(input.variant_option_sets, null, 2),
      createdProduct: JSON.stringify(createdProduct, null, 2),
    });
    console.log('=====================\n\n');

    if (!createdProduct) {
      return;
    }

    await prisma.platformProduct.upsert({
      where: {
        storefrontId: createdProduct.id,
      },
      update: {
        title: createdProduct.name,
        description: createdProduct.description,
        status:
          createdProduct?.lifecycle_state === 'PUBLISHED'
            ? ProductStatus.ACTIVE
            : ProductStatus.DRAFT,
        createdAt: createdProduct.created_at,
        updatedAt: createdProduct.updated_at,
      },
      create: {
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
        updatedAt: createdProduct.updated_at,
      },
    });
    // await prisma.platformProduct.create({
    //   data: {
    //     product: { connect: { id: parentProduct.id } },
    //     category: createdProduct?.taxonomy_type?.name || 'Uncategorized',
    //     title: createdProduct.name,
    //     tags: [],
    //     platform: Platform.Faire,
    //     storefrontId: createdProduct.id,
    //     sourceUrl: `https://www.faire.com/brand-portal/my-shop/products/${createdProduct.id}`,
    //     description: createdProduct.description,
    //     status:
    //       createdProduct?.lifecycle_state === 'PUBLISHED'
    //         ? ProductStatus.ACTIVE
    //         : ProductStatus.DRAFT,
    //     createdAt: createdProduct.created_at,
    //     updatedAt: createdProduct.updated_at,
    //   },
    // });

    for (const variant of createdProduct.variants) {
      const parentProductVariant = parentProduct.variants.find(
        (parent) => parent.sku === variant.sku,
      );

      if (!parentProductVariant) {
        continue;
      }

      await prisma.platformProductVariant.upsert({
        where: {
          platform: Platform.Faire,
          storefrontId: variant.id,
        },
        update: {
          title: variant.name,
          barcode: variant.product_id || '',
          price: (
            (variant?.prices?.[0].wholesale_price.amount_minor || 100) / 100
          ).toFixed(2),
          updatedAt: variant.updated_at,
        },
        create: {
          platform: Platform.Faire,
          storefrontId: variant.id,
          title: variant.name,
          barcode: variant.product_id || '',
          price: (
            (variant?.prices?.[0].wholesale_price.amount_minor || 100) / 100
          ).toFixed(2),
          productVariant: {
            connect: {
              id: parentProductVariant.id,
            },
          },
          createdAt: variant.created_at,
          updatedAt: variant.updated_at,
        },
      });
      // await prisma.platformProductVariant.create({
      //   data: {
      //     platform: Platform.Faire,
      //     storefrontId: variant.id,
      //     title: variant.name,
      //     barcode: variant.product_id || '',
      //     price: (
      //       (variant?.prices?.[0].wholesale_price.amount_minor || 100) / 100
      //     ).toFixed(2),
      //     productVariant: {
      //       connect: {
      //         id: parentProductVariant.id,
      //       },
      //     },
      //     createdAt: variant.created_at,
      //     updatedAt: variant.updated_at,
      //   },
      // });
    }
  } catch (err) {
    console.log('===============\n\n\n');
    console.log('Faire create product ERROR > ', JSON.stringify(err));
    console.error(
      'An error occurred while create product on Faire: ',
      err?.response?.message || err?.message,
    );
    console.log('===============\n\n\n');
  }
}

export async function createProductVariant(
  productId: string,
  input: Omit<
    FaireProductVariant,
    | 'created_at'
    | 'updated_at'
    | 'id'
    | 'product_id'
    | 'name'
    | 'orderability_type'
  >,
) {
  try {
    const { data } = await faireApiClient.post<FaireProductVariant>(
      `/products/${productId}/variants`,
      input,
    );

    return data;
  } catch (err) {
    console.error(
      'An error occurred while create Faire product variant: ',
      err?.message,
    );
  }
}

export async function updateProduct(
  productId: string,
  input: UpdateFaireProductInput,
) {
  try {
    const { variant_option_sets, variants, ...restInput } = input;

    const mappedVariants = variants?.map(({ options, ...restVariant }) => ({
      ...restVariant,
    }));

    const preparedInput = {
      ...restInput,
      variants: mappedVariants,
    };

    console.log('=====================');
    console.log({ updateFaireInput: JSON.stringify(preparedInput, null, 2) });
    console.log('=====================');

    const { data: updatedProduct } = await faireApiClient.patch<FaireProduct>(
      `/products/${productId}`,
      preparedInput,
    );

    const updatedPlatformProduct = await prisma.platformProduct.update({
      where: {
        storefrontId: productId,
      },
      data: {
        category: updatedProduct?.taxonomy_type?.name || 'Uncategorized',
        description: updatedProduct.description,
        status:
          updatedProduct.lifecycle_state === 'PUBLISHED'
            ? ProductStatus.ACTIVE
            : ProductStatus.DRAFT,
        title: updatedProduct.name,
        tags: [],
        updatedAt: updatedProduct.updated_at,
      },
      include: {
        product: {
          include: {
            variants: true,
          },
        },
      },
    });

    for (const variant of updatedProduct.variants) {
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
          title: variant.name,
          barcode: '',
          price: Math.max(
            0,
            (variant.prices?.[0].wholesale_price.amount_minor || 100) / 100,
          ).toFixed(2),
          updatedAt: variant.updated_at,
        },
        create: {
          platform: Platform.Orderchamp,
          storefrontId: variant.id,
          title: variant.name,
          barcode: '',
          price: Math.max(
            0,
            (variant?.prices?.[0].wholesale_price.amount_minor || 100) / 100,
          ).toFixed(2),
          createdAt: variant.created_at,
          updatedAt: variant.updated_at,
          productVariant: { connect: { id: matchingProductVariant.id } },
        },
      });
    }
  } catch (err) {
    // @ts-ignore
    console.error(
      'An error occurred while update product on Faire: ',
      err?.message,
    );
  }
}

export async function syncProduct(
  shopifyProduct: ShopifyProduct,
  category?: string,
) {
  try {
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

    const fairePlatformProduct = productWithVariants?.platformProducts.find(
      ({ platform }) => platform === Platform.Faire,
    );

    let existedProduct = null;

    if (fairePlatformProduct && fairePlatformProduct?.storefrontId) {
      existedProduct = await retrieveProductByID(
        fairePlatformProduct.storefrontId,
      );
    }

    console.log('\n\n\n====================');
    console.log('FAIRE SYNC PRODUCT');
    console.log({
      existedProduct,
      fairePlatformProduct,
      productWithVariants,
      shopifyProduct,
    });
    console.log('====================\n\n\n');

    if (existedProduct) {
      const generalProductVariants = productWithVariants?.variants || [];

      await removeProduct(existedProduct.id);

      // for (const variant of generalProductVariants) {
      //   const faireVariant = variant.platformProductVariants.find(
      //     ({ platform }) => platform === Platform.Faire,
      //   );

      //   if (!faireVariant) {
      //     continue;
      //   }

      //   const existingVariant = await prisma.platformProductVariant.findUnique({
      //     where: { id: faireVariant.id },
      //   });

      //   if (!existingVariant) {
      //     continue;
      //   }

      //   await prisma.platformProductVariant.delete({
      //     where: {
      //       id: existingVariant.id,
      //     },
      //   });
      // }

      // await prisma.platformProduct.delete({
      //   where: {
      //     platform: Platform.Faire,
      //     id: fairePlatformProduct?.id || '',
      //   },
      // });
      for (const variant of generalProductVariants) {
        const faireVariant = variant.platformProductVariants.find(
          ({ platform }) => platform === Platform.Faire,
        );

        if (!faireVariant) {
          continue;
        }

        await prisma.platformProductVariant.deleteMany({
          where: { id: faireVariant.id },
        });
      }

      if (fairePlatformProduct?.id) {
        await prisma.platformProduct.delete({
          where: {
            platform: Platform.Faire,
            id: fairePlatformProduct?.id || '',
          },
        });
      }
    }

    // const faireProductVariants = productWithVariants.variants
    //   .flatMap(({ platformProductVariants, shopifyVariantStorefrontId }) =>
    //     platformProductVariants.map((variant) => ({
    //       ...variant,
    //       shopifyVariantStorefrontId,
    //     })),
    //   )
    //   .filter(({ platform }) => platform === Platform.Faire);

    const shopifyImages = shopifyProduct.media.nodes.filter(
      (media) => media.mediaContentType === MediaType.IMAGE,
    );

    const images = !shopifyImages.length
      ? [{ url: '' }]
      : shopifyImages.map((media) => ({
          url: media.preview.image.url,
        }));

    const input: CreateFaireProductInput = {
      name: shopifyProduct.title,
      description: escapeHTML(shopifyProduct.descriptionHtml),
      // idempotence_token: shopifyProduct.id,
      idempotence_token: `${uuidV4()}-${shopifyProduct.id}`,
      lifecycle_state:
        shopifyProduct.status.toUpperCase() === ProductStatus.ACTIVE &&
        images.length > 0
          ? 'PUBLISHED'
          : 'DRAFT',
      minimum_order_quantity: 1,
      unit_multiplier: 1,
      images,
      allow_sales_when_out_of_stock: shopifyProduct.variants.nodes.some(
        (variant) => variant.inventoryPolicy === InventoryPolicy.CONTINUE,
      ),
      variant_option_sets:
        shopifyProduct.options.length === 1 &&
        shopifyProduct.options[0].name.toLowerCase() === 'title'
          ? []
          : shopifyProduct.options.map(({ name, values }) => ({
              name,
              values,
            })),
      variants: shopifyProduct.variants.nodes.map((variant) => {
        // const storefrontId = faireProductVariants.find(
        //   (faireVariant) =>
        //     faireVariant.shopifyVariantStorefrontId === variant.id,
        // )?.storefrontId;

        const options = shopifyProduct.options
          .map(({ name }) => {
            const value = variant.selectedOptions.find(
              (option) => option.name === name,
            )?.value;

            if (!value || value === 'Default Title') {
              return null;
            }

            return {
              name,
              value,
            };
          })
          .filter(Boolean) as FaireProductVariantOption[];

        const wholesalePrice =
          Math.max(Number(variant.price) || 0.01, 0.01) * 100;

        const retailPrice =
          Math.max(
            Number(variant.msrp) || Number(variant.price) || 0.01,
            0.01,
          ) * 100;

        const preparedRetailPrice = isWithinMultiplierRange(
          wholesalePrice,
          retailPrice,
        )
          ? retailPrice
          : wholesalePrice * 2;

        return {
          // id: storefrontId,
          // idempotence_token: variant.id,
          idempotence_token: `${uuidV4()}-${variant.id}`,
          images: variant.image ? [{ url: variant.image.url }] : undefined,
          lifecycle_state:
            shopifyProduct.status.toUpperCase() === ProductStatus.ACTIVE &&
            shopifyImages.length > 0
              ? 'PUBLISHED'
              : 'DRAFT',
          available_quantity: variant.inventoryQuantity,
          sku:
            variant.sku ||
            `${variant.id.replace('gid://shopify/ProductVariant/', '')}-temp-sku`,
          prices: [
            {
              geo_constraint: {
                country_group: 'EUROPEAN_UNION',
              },
              wholesale_price: {
                amount_minor: Math.round(wholesalePrice),
                currency: 'EUR',
                // currency: store?.currencyCode || 'EUR',
              },
              retail_price: {
                amount_minor: Math.round(preparedRetailPrice),
                currency: 'EUR',
                // currency: store?.currencyCode || 'EUR',
              },
            },
          ],
          options,
        };
      }),
    };

    if (category) {
      // @ts-ignore
      input.category = category;
    }

    console.log({
      inputVariants: JSON.stringify(input.variants),
      shopifyProductOptions: JSON.stringify(shopifyProduct.options),
      shopifyProductVariantsSelectedOptions: JSON.stringify(
        shopifyProduct.variants.nodes.map((variant) => ({
          id: variant.id,
          title: variant.title,
          selectedOptions: variant.selectedOptions,
          sku: variant.sku,
        })),
      ),
    });

    console.log({
      input: JSON.stringify(input, null, 2),
    });

    const updatedProductWithVariants = await prisma.product.findFirst({
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

    if (!updatedProductWithVariants) {
      return;
    }

    await createProduct(input, updatedProductWithVariants);

    // await prisma.platformProductVariant.deleteMany({
    //   where: {
    //     platform: Platform.Faire,

    //   }
    // })

    // const preparedImages = !shopifyProduct.media.nodes.length
    //   ? [{ url: '' }]
    //   : shopifyProduct.media.nodes.map(({ preview }) => ({
    //       url: preview.image.url,
    //     }));

    // const input: UpdateFaireProductInput = {
    //   name: shopifyProduct.title,
    //   description: escapeHTML(shopifyProduct.descriptionHtml),
    //   images: preparedImages,
    //   allow_sales_when_out_of_stock: shopifyProduct.variants.nodes.some(
    //     (variant) => variant.inventoryPolicy === InventoryPolicy.CONTINUE,
    //   ),
    //   lifecycle_state:
    //     shopifyProduct.status.toUpperCase() === ProductStatus.ACTIVE &&
    //     preparedImages.filter((image) => !!image.url).length > 0
    //       ? 'PUBLISHED'
    //       : 'DRAFT',
    //   variant_option_sets:
    //     shopifyProduct.options.length === 1 &&
    //     shopifyProduct.options[0].name.toLowerCase() === 'title'
    //       ? []
    //       : shopifyProduct.options.map(({ name, values }) => ({
    //           name,
    //           values,
    //         })),
    //   variants: shopifyProduct.variants.nodes.map((variant) => {
    //     const storefrontId = faireProductVariants.find(
    //       (faireVariant) =>
    //         faireVariant.shopifyVariantStorefrontId === variant.id,
    //     )?.storefrontId;

    //     const options = shopifyProduct.options
    //       .map(({ name }) => {
    //         const value = variant.selectedOptions.find(
    //           (option) => option.name === name,
    //         )?.value;

    //         if (!value || value.toLowerCase() === 'default title') {
    //           return null;
    //         }

    //         return {
    //           name,
    //           value,
    //         };
    //       })
    //       .filter(Boolean) as FaireProductVariantOption[];

    //     const wholesalePrice =
    //       Math.max(Number(variant.price) || 0.01, 0.01) * 100;

    //     const retailPrice =
    //       Math.max(
    //         Number(variant.msrp) || Number(variant.price) || 0.01,
    //         0.01,
    //       ) * 100;

    //     const preparedRetailPrice = isWithinMultiplierRange(
    //       wholesalePrice,
    //       retailPrice,
    //     )
    //       ? retailPrice
    //       : wholesalePrice * 2;

    //     return {
    //       id: storefrontId,
    //       idempotence_token: variant.id,
    //       available_quantity: variant.inventoryQuantity,
    //       sku:
    //         variant.sku ||
    //         `${variant.id.replace('gid://shopify/ProductVariant/', '')}-temp-sku`,
    //       prices: [
    //         {
    //           geo_constraint: {
    //             country_group: 'EUROPEAN_UNION',
    //           },
    //           wholesale_price: {
    //             amount_minor: wholesalePrice,
    //             currency: 'EUR',
    //             // currency: store?.currencyCode || 'EUR',
    //           },
    //           retail_price: {
    //             amount_minor: preparedRetailPrice,
    //             currency: 'EUR',
    //             // currency: store?.currencyCode || 'EUR',
    //           },
    //         },
    //       ],
    //       options,
    //     };
    //   }),
    // };

    // if (category) {
    //   input.taxonomy_type = {
    //     id: category,
    //   };
    // }
    // await updateProduct(fairePlatformProduct?.storefrontId || '', input);
  } catch (err) {
    console.error(
      'An error occurred while sync product on Faire: ',
      err?.message,
    );
  }
}
