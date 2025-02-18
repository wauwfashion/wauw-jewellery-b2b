import { WebhookHandler } from '@/types';
import prisma from '@/db.server';

const action: WebhookHandler = async ({ request, shop }) => {
  console.log(`Received APP_UNINSTALLED webhook for ${shop}`);

  return new Response();
};

export default action;
