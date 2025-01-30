import { WebhookHandler } from '@/types';
import db from '@/db.server';

const action: WebhookHandler = async ({ webhookContext }) => {
  const { payload, session, topic, shop } = webhookContext;

  console.log(`Received ${topic} webhook for ${shop}`);

  return new Response();
};

export default action;
