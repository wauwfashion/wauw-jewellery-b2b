import { ActionFunctionArgs } from '@remix-run/node';
import * as orderchampProductService from '@/services/orderchamp/products.server';
import * as shopifyProductService from '@/services/shopify/products.server';
import { Platform, ProductStatus } from '@/types';
import { authenticate } from '@/shopify.server';
import prisma from '@/db.server';

const action = async ({ request }: ActionFunctionArgs) => {
  const { admin } = await authenticate.admin(request);

  const { data } = (await request.json()) as {
    data: { product: { id: string } };
  };

  if (!data?.product) {
    return new Response();
  }

  const productId = data.product.id;

  const product = await orderchampProductService.retrieveProductByID(productId);

  if (!product) {
    return new Response();
  }

  const updatedProduct = await prisma.platformProduct.update({
    where: {
      storefrontId: product?.id,
      platform: Platform.Orderchamp,
    },
    data: {
      category: product?.category.name || 'Uncategorized',
      title: product.title || '',
      description: product.description || '',
      status:
        product.salesChannels.length > 0
          ? ProductStatus.ACTIVE
          : ProductStatus.DRAFT,
      tags: product.tags || [],
      product: {
        update: {
          totalInventory: product.variants.nodes.reduce(
            (acc, variant) => acc + variant.inventoryQuantity,
            0,
          ),
        },
      },
      updatedAt: product.updatedAt,
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

  const shopifyVariants: { id: string; quantity: number }[] = [];

  for (const variant of product.variants.nodes) {
    const updatedPlatformVariant = await prisma.platformProductVariant.update({
      where: {
        storefrontId: variant?.id,
        platform: Platform.Orderchamp,
      },
      data: {
        barcode: variant.barcode,
        price: variant.price,
        title: variant.title,
        updatedAt: variant.updatedAt,
        productVariant: {
          update: {
            sku: variant.sku,
            inventoryQuantity: variant.inventoryQuantity,
          },
        },
      },
      include: {
        productVariant: true,
      },
    });

    shopifyVariants.push({
      id: updatedPlatformVariant.productVariant.shopifyVariantStorefrontId,
      quantity: variant.inventoryQuantity,
    });
  }

  // await shopifyProductService.updateProductQuantity(admin.graphql, {
  //   productId: updatedProduct.product.shopifyStorefrontId,
  //   variants: shopifyVariants,
  // });

  return new Response();
};

export default action;
