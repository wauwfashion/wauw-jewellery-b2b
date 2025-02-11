import { OrderFulfillmentStatus, OrderPaymentStatus, Platform } from '@/types';
import * as shopifyOrdersService from './shopify/orders.server';
import * as orderchampOrdersService from './orderchamp/orders.server';
import * as faireOrdersService from './faire/orders.server';
import * as ankorstoreOrdersService from './ankorstore/orders.server';
import prisma from '@/db.server';
import { AnkorstoreOrder } from './ankorstore/types';

export async function seedOrders(store: string) {
  const shopifyOrders = await shopifyOrdersService.retrieveAllOrders();
  const orderchampOrders = await orderchampOrdersService.retrieveAllOrders();
  const faireOrders = await faireOrdersService.retrieveAllOrders();
  const ankorstoreOrders = await ankorstoreOrdersService.retrieveAllOrders();

  for (const order of shopifyOrders) {
    const orderId = order.id.replace('gid://shopify/Order/', '');
    const storeDomain = store.replace('.myshopify.com', '');

    await prisma.order.create({
      data: {
        storeDomain: store,
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
        storeDomain: store,
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

  for (const order of faireOrders) {
    const faireState = {
      NEW: OrderFulfillmentStatus.OPEN,
      PROCESSING: OrderFulfillmentStatus.IN_PROGRESS,
      PRE_TRANSIT: OrderFulfillmentStatus.PARTIALLY_FULFILLED,
      IN_TRANSIT: OrderFulfillmentStatus.PENDING_FULFILLMENT,
      DELIVERED: OrderFulfillmentStatus.FULFILLED,
      PENDING_RETAILER_CONFIRMATION: OrderFulfillmentStatus.IN_PROGRESS,
      BACKORDERED: OrderFulfillmentStatus.RESTOCKED,
      CANCELED: OrderFulfillmentStatus.UNFULFILLED,
    };

    await prisma.order.create({
      data: {
        storeDomain: store,
        platform: Platform.Faire,
        customer: order?.address?.name || '-',
        currencyCode: order.payout_costs.total_payout.currency,
        totalPrice: Math.max(
          0,
          (order.payout_costs.total_payout.amount_minor || 0) / 100,
        ).toFixed(2),
        name: order.display_id,
        lineItemsCount: order.items.length,
        createdAt: order.created_at,
        updatedAt: order.updated_at,
        storefrontId: order.id,
        tags: [],
        sourceUrl: `https://www.faire.com/brand-portal/orders/${order.id}`,
        // @ts-ignore
        fulfillmentStatus: faireState[order.state] as OrderFulfillmentStatus,
        paymentStatus: order?.payment_initiated_at
          ? OrderPaymentStatus.PAID
          : OrderPaymentStatus.PENDING,
      },
    });
  }

  for (const order of ankorstoreOrders) {
    const orderPaymentStatus: Record<
      AnkorstoreOrder['attributes']['status'],
      OrderPaymentStatus
    > = {
      ankor_confirmed: OrderPaymentStatus.PENDING,
      brand_confirmed: OrderPaymentStatus.PENDING,
      brand_paid: OrderPaymentStatus.PAID,
      cancelled: OrderPaymentStatus.REFUNDED,
      fulfillment_requested: OrderPaymentStatus.PENDING,
      invoiced: OrderPaymentStatus.PENDING,
      received: OrderPaymentStatus.PAID,
      reception_refused: OrderPaymentStatus.REFUNDED,
      rejected: OrderPaymentStatus.REFUNDED,
      shipped: OrderPaymentStatus.PAID,
      shipping_labels_generated: OrderPaymentStatus.PENDING,
    };

    const orderFulfillmentStatus: Record<
      NonNullable<
        AnkorstoreOrder['attributes']['shippingOverview']['transaction']
      >['currentStatus']['status'],
      OrderFulfillmentStatus
    > = {
      DELIVERED: OrderFulfillmentStatus.FULFILLED,
      FAILURE: OrderFulfillmentStatus.UNFULFILLED,
      PRE_TRANSIT: OrderFulfillmentStatus.IN_PROGRESS,
      RETURNED: OrderFulfillmentStatus.RESTOCKED,
      TRANSIT: OrderFulfillmentStatus.ON_HOLD,
      UNKNOWN: OrderFulfillmentStatus.OPEN,
    };

    await prisma.order.create({
      data: {
        storeDomain: store,
        platform: Platform.Ankorstore,
        customer: order?.attributes.shippingOverview.shipToAddress.name || '-',
        currencyCode: order.attributes.brandCurrency,
        totalPrice: Math.max(
          0,
          (order.attributes.brandNetAmount || 0) / 100,
        ).toFixed(2),
        name: `Order ${order.attributes.reference}`,
        lineItemsCount: 0,
        createdAt: order.attributes.createdAt,
        updatedAt: order.attributes.updatedAt,
        storefrontId: order.id,
        tags: [],
        sourceUrl: `https://www.ankorstore.com/account/orders/${order.attributes.reference}`,
        // @ts-ignore
        fulfillmentStatus:
          orderFulfillmentStatus[
            order?.attributes?.shippingOverview?.transaction?.currentStatus
              ?.status || 'UNKNOWN'
          ],
        paymentStatus: orderPaymentStatus[order.attributes.status],
      },
    });
  }
}
