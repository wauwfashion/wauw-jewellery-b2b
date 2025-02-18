import { WebhookHandler } from '@/types';
import { handleApiResponse } from '@/utils/api-response-handler';
import { fullRemoveProduct } from '@/api/products/full-remove-product';
import prisma from '@/db.server';

const action: WebhookHandler = async ({ request, shop, graphql }) => {
  const { id: shopifyStorefrontProductId } = (await request.json()) as {
    id: string;
  };

  const response = await handleApiResponse(
    async () => {
      const product = await prisma.product.findFirst({
        where: {
          platformProducts: {
            some: {
              storefrontId: shopifyStorefrontProductId,
            },
          },
        },
      });

      console.log({
        product: JSON.stringify(product, null, 2),
        shopifyStorefrontProductId,
      });

      if (!product) {
        return null;
      }

      await fullRemoveProduct(graphql, product.id);
    },
    {
      onSuccess: {
        message: 'Product successfully deleted.',
        responseInitParams: {
          status: 200,
        },
      },
      onError: {
        message: 'Error occurred while deleting product.',
        responseInitParams: {
          status: 500,
        },
      },
    },
  );

  return response;
};

export default action;
