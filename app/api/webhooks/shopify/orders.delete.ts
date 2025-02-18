import { WebhookHandler } from '@/types';
import db from '@/db.server';

const action: WebhookHandler = async ({ shop }) => {
  console.log(`Received ORDERS_DELETE webhook for ${shop}`);

  return new Response();
};

export default action;
