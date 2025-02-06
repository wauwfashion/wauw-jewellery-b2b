import { ActionFunction } from '@remix-run/node';
import { default as productsUpdate } from './products.update';
import { NullableType } from '@/types';

export const webhookHandlers: Record<string, NullableType<ActionFunction>> = {
  PRODUCT_UPDATED: productsUpdate,
};
