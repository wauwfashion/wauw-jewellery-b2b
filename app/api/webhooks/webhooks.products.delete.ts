import { WebhookHandler } from '@/types';
import { handleApiResponse } from '@/utils/api-response-handler';
import { fullRemoveProduct } from '@/api/products/full-remove-product';
import prisma from '@/db.server';
import { authenticate } from '@/shopify.server';

const action: WebhookHandler = async ({ webhookContext, request }) => {
  const { payload } = webhookContext;

  const { id: shopifyStorefrontProductId } = payload as { id: string };
  const { admin } = await authenticate.admin(request);

  const response = await handleApiResponse(
    async () => {
      const product = await prisma.product.findFirst({
        where: {
          platformProducts: {
            some: {
              storefrontId: {
                equals: shopifyStorefrontProductId,
              },
            },
          },
        },
      });

      if (!product) {
        return null;
      }

      await fullRemoveProduct(admin.graphql, product.id);
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
