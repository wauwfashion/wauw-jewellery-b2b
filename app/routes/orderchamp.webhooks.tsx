import { ActionFunctionArgs, json } from '@remix-run/node';
import { webhookHandlers } from '@/api/webhooks/orderchamp';

export const action = async (args: ActionFunctionArgs) => {
  const webhookTopic = args.request.headers.get('x-orderchamp-event') || '';

  const webhookHandler = webhookHandlers?.[webhookTopic];

  if (webhookHandler) {
    await webhookHandler(args);
  }

  return new Response();
};
