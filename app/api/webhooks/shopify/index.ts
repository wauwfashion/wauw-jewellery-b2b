import { WebhookRecords, WebhookTopic } from '../../../types';

import { default as appUninstalled } from './app.uninstalled';
import { default as appScopesUpdate } from './app.scopes_update';

import { default as productsCreate } from './products.create';
import { default as productsUpdate } from './products.update';
import { default as productsDelete } from './products.delete';

import { default as ordersCreate } from './orders.create';
import { default as ordersEdited } from './orders.edited';
import { default as ordersDelete } from './orders.delete';

export const webhookHandlers: WebhookRecords = {
  [WebhookTopic.APP_UNINSTALLED]: appUninstalled,
  [WebhookTopic.APP_SCOPES_UPDATE]: appScopesUpdate,
  [WebhookTopic.PRODUCTS_CREATE]: productsCreate,
  [WebhookTopic.PRODUCTS_UPDATE]: productsUpdate,
  [WebhookTopic.PRODUCTS_DELETE]: productsDelete,
  [WebhookTopic.ORDERS_CREATE]: ordersCreate,
  [WebhookTopic.ORDERS_EDITED]: ordersEdited,
  [WebhookTopic.ORDERS_DELETE]: ordersDelete,
};
