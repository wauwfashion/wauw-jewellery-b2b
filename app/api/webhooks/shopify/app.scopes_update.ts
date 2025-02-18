import { WebhookHandler } from '@/types';
import db from '@/db.server';

const action: WebhookHandler = async ({ request, shop }) => {
  console.log(`Received APP_SCOPES_UPDATE webhook for ${shop}`);

  return new Response();
};

export default action;
