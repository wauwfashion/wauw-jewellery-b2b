import { WebhookHandler } from '@/types';
import prisma from '@/db.server';

const action: WebhookHandler = async ({ webhookContext }) => {
  const { payload, session, topic, shop } = webhookContext;

  console.log(`Received ${topic} webhook for ${shop}`);

  if (session) {
    await prisma.session.deleteMany({ where: { shop } });
  }

  if (shop) {
    await prisma.store.deleteMany({ where: { domain: shop } });
    await prisma.platformProductVariant.deleteMany({
      where: {
        productVariant: {
          product: {
            storeDomain: shop,
          },
        },
      },
    });
    await prisma.productVariant.deleteMany({
      where: {
        product: {
          storeDomain: shop,
        },
      },
    });
    await prisma.platformProduct.deleteMany({
      where: {
        product: {
          storeDomain: shop,
        },
      },
    });
    await prisma.product.deleteMany({
      where: {
        storeDomain: shop,
      },
    });
  }

  return new Response();
};

export default action;
