import type { ActionFunctionArgs } from '@remix-run/node';

import { authenticate } from '@/shopify.server';
import { webhookHandlers } from '@/api/webhooks';
import { WebhookTopic } from '@/types';

export const action = async ({ request }: ActionFunctionArgs) => {
  const webhookContext = await authenticate.webhook(request);

  const { topic, admin } = webhookContext;

  if (!admin) {
    throw new Response();
  }

  if (
    [
      WebhookTopic.CUSTOMERS_REDACT,
      WebhookTopic.SHOP_REDACT,
      WebhookTopic.CUSTOMERS_DATA_REQUEST,
    ].includes(topic as WebhookTopic)
  ) {
    return Response.json({ message: 'OK' }, { status: 200 });
  }

  const webhookHandler = webhookHandlers[topic as WebhookTopic];

  if (!webhookHandler) {
    throw new Response('Unhandled webhook topic', { status: 404 });
  }

  const response = await webhookHandler({ webhookContext, request });

  return response || null;
};
