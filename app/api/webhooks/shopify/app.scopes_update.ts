import { WebhookHandler } from '@/types';
import db from '@/db.server';

const action: WebhookHandler = async ({ webhookContext }) => {
  const { payload, session, topic, shop } = webhookContext;

  console.log(`Received ${topic} webhook for ${shop}`);

  const current = payload.current as string[];
  if (session) {
    await db.session.update({
      where: {
        id: session.id,
      },
      data: {
        scope: current.toString(),
      },
    });
  }
  return new Response();
};

export default action;
