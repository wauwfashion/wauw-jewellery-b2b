import { AdminApiContextWithoutRest } from 'node_modules/@shopify/shopify-app-remix/dist/ts/server/clients';
import { OrderFulfillmentStatus, OrderPaymentStatus, Platform } from '@/types';
import * as shopifyOrdersService from './shopify/orders.server';
import * as orderchampOrdersService from './orderchamp/orders.server';
import prisma from '@/db.server';

export async function seedOrders(
  graphqlClient: AdminApiContextWithoutRest['graphql'],
  store: string,
) {
  const shopifyOrders =
    await shopifyOrdersService.retrieveAllOrders(graphqlClient);

  const orderchampOrders = await orderchampOrdersService.retrieveAllOrders();

  console.log({
    shopifyOrders: shopifyOrders.length,
    orderchampOrders: orderchampOrders.length,
  });

  for (const order of shopifyOrders) {
    const orderId = order.id.replace('gid://shopify/Order/', '');
    const storeDomain = store.replace('.myshopify.com', '');

    await prisma.order.create({
      data: {
        customer: order.customer?.email || '-',
        fulfillmentStatus: order.displayFulfillmentStatus,
        lineItemsCount: order.subtotalLineItemsQuantity,
        name: order.name,
        paymentStatus: order.displayFinancialStatus,
        platform: Platform.Shopify,
        storefrontId: order.id,
        totalPrice: order.currentTotalPriceSet.shopMoney.amount,
        currencyCode: order.currentTotalPriceSet.shopMoney.currencyCode,
        tags: order.tags,
        sourceUrl: `https://admin.shopify.com/store/${storeDomain}/orders/${orderId}`,
        createdAt: order.createdAt,
        updatedAt: order.updatedAt,
      },
    });
  }

  for (const order of orderchampOrders) {
    const sourceUrl = `https://www.orderchamp.com/backoffice/orders?query=${order.number}`;

    await prisma.order.create({
      data: {
        customer: order.customer?.email || '-',
        name: order.number,
        platform: Platform.Orderchamp,
        tags: [],
        totalPrice: +(+order.totalPrice || 0).toFixed(2),
        currencyCode: order.currency,
        sourceUrl,
        storefrontId: order.id,
        lineItemsCount: order.productsCount,
        createdAt: order.createdAt,
        updatedAt: order.updatedAt,
        paymentStatus: order.isPaid
          ? OrderPaymentStatus.PAID
          : OrderPaymentStatus.PENDING,
        fulfillmentStatus: order.isFulfilled
          ? OrderFulfillmentStatus.FULFILLED
          : OrderFulfillmentStatus.UNFULFILLED,
      },
    });
  }
}
