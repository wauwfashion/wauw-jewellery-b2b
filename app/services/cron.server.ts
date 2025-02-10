import cron from 'node-cron';
import * as shopifyProductService from '@/services/shopify/products.server';
import * as faireProductService from '@/services/faire/products.server';
import * as orderchampProductService from '@/services/orderchamp/products.server';
import * as ankorstoreProductService from '@/services/ankorstore/products.server';
import * as shopifyOrdersService from './shopify/orders.server';
import * as orderchampOrdersService from './orderchamp/orders.server';
import * as faireOrdersService from './faire/orders.server';
import * as ankorstoreOrdersService from './ankorstore/orders.server';
import prisma from '@/db.server';
import { Platform, ProductWhereInput } from '@/types';
import { OrderFulfillmentStatus, OrderPaymentStatus } from '@prisma/client';
import { AnkorstoreOrder } from './ankorstore/types';

export async function updateProductsQuantity(type?: 'full' | 'part') {
  try {
    console.log('\n\n=========');
    console.log('Start update products quantity');
    console.log('=========\n\n');

    const stores = await prisma.store.findMany();

    if (!stores.length) {
      return;
    }

    for (const store of stores) {
      const where: ProductWhereInput = {
        storeDomain: store.domain,
      };

      if (type === 'part') {
        where.updatedAt = {
          lte: store.lastProductsSyncAt,
        };
      }

      const products = await prisma.product.findMany({
        where,
        include: {
          variants: {
            include: {
              platformProductVariants: true,
            },
          },
        },
      });

      for (const product of products) {
        let newProductInventory = 0;

        for (const variant of product.variants) {
          const prevVariantQuantity = variant.inventoryQuantity;

          const shopifyPlatformVariant = variant.platformProductVariants.find(
            ({ platform }) => platform === Platform.Shopify,
          );
          const orderchampPlatformVariant =
            variant.platformProductVariants.find(
              ({ platform }) => platform === Platform.Orderchamp,
            );
          const fairePlatformVariant = variant.platformProductVariants.find(
            ({ platform }) => platform === Platform.Faire,
          );

          const shopifyVariantData =
            await shopifyProductService.retrieveProductVariantByID(
              shopifyPlatformVariant?.storefrontId || '',
            );
          const orderchampVariantData =
            await orderchampProductService.retrieveProductVariantByID(
              orderchampPlatformVariant?.storefrontId || '',
            );
          const faireVariantData =
            await faireProductService.retrieveProductVariantInventoryByID(
              fairePlatformVariant?.storefrontId || '',
            );
          const ankorstoreVariantData =
            await ankorstoreProductService.retrieveProductVariantByProductName(
              variant.sku,
            );

          const newVariantQuantity =
            (shopifyVariantData?.inventoryQuantity || 0) +
            (orderchampVariantData?.inventoryQuantity || 0) +
            (faireVariantData[fairePlatformVariant?.storefrontId || '']
              .available_quantity?.quantity || 0) +
            (ankorstoreVariantData?.data?.[0]?.attributes?.stockQuantity || 0);

          const newQuantity = prevVariantQuantity * 4 - newVariantQuantity;

          newProductInventory += newQuantity;

          await prisma.productVariant.update({
            where: {
              id: variant.id,
            },
            data: {
              inventoryQuantity: newQuantity,
            },
          });

          await shopifyProductService.updateProductQuantity(
            shopifyVariantData.inventoryItem.id,
            newQuantity - shopifyVariantData.inventoryQuantity,
          );
          await orderchampProductService.updateProductVariantQuantity(
            orderchampPlatformVariant?.storefrontId || '',
            newQuantity,
          );
          await faireProductService.updateProductQuantity({
            inventories: [
              {
                product_variant_id: fairePlatformVariant?.storefrontId || '',
                on_hand_quantity: newQuantity,
              },
            ],
          });
          await ankorstoreProductService.updateProductQuantity(
            ankorstoreVariantData?.data?.[0]?.id || '',
            newQuantity,
          );
        }

        await prisma.product.update({
          where: {
            id: product.id,
          },
          data: {
            totalInventory: newProductInventory,
          },
        });
      }
    }
  } catch (err) {
    console.error('An error occurred while update products quantity: ', err);
  }
}

async function syncOrders() {
  try {
    console.log('\n\n=========');
    console.log('Start sync orders');
    console.log('=========\n\n');

    const store = await prisma.store.findFirst();
    const storeDomain = store?.domain as string;

    if (!store) {
      return;
    }

    const shopifyOrders = await shopifyOrdersService.retrieveAllOrders();
    const orderchampOrders = await orderchampOrdersService.retrieveAllOrders();
    const faireOrders = await faireOrdersService.retrieveAllOrders();
    const ankorstoreOrders = await ankorstoreOrdersService.retrieveAllOrders();

    for (const order of shopifyOrders) {
      const orderId = order.id?.replace('gid://shopify/Order/', '') || '';
      const shopifyStoreDomain =
        storeDomain?.replace('.myshopify.com', '') || '';

      await prisma.order.upsert({
        where: {
          storefrontId: order.id,
        },
        create: {
          storeDomain: storeDomain,
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
          sourceUrl: `https://admin.shopify.com/store/${shopifyStoreDomain}/orders/${orderId}`,
          createdAt: order.createdAt,
          updatedAt: order.updatedAt,
        },
        update: {
          paymentStatus: order.displayFinancialStatus,
          totalPrice: order.currentTotalPriceSet.shopMoney.amount,
          fulfillmentStatus: order.displayFulfillmentStatus,
          tags: order.tags,
          updatedAt: order.updatedAt,
        },
      });
    }

    for (const order of orderchampOrders) {
      const sourceUrl = `https://www.orderchamp.com/backoffice/orders?query=${order.number}`;

      await prisma.order.upsert({
        where: {
          storefrontId: order.id,
        },
        create: {
          storeDomain,
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
        update: {
          paymentStatus: order.isPaid
            ? OrderPaymentStatus.PAID
            : OrderPaymentStatus.PENDING,
          fulfillmentStatus: order.isFulfilled
            ? OrderFulfillmentStatus.FULFILLED
            : OrderFulfillmentStatus.UNFULFILLED,
          totalPrice: +(+order.totalPrice || 0).toFixed(2),
          updatedAt: order.updatedAt,
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

      await prisma.order.upsert({
        where: {
          storefrontId: order.id,
        },
        create: {
          storeDomain,
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
        update: {
          // @ts-ignore
          fulfillmentStatus: faireState[order.state] as OrderFulfillmentStatus,
          paymentStatus: order?.payment_initiated_at
            ? OrderPaymentStatus.PAID
            : OrderPaymentStatus.PENDING,
          totalPrice: Math.max(
            0,
            (order.payout_costs.total_payout.amount_minor || 0) / 100,
          ).toFixed(2),
          updatedAt: order.updated_at,
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
        AnkorstoreOrder['attributes']['shippingOverview']['transaction']['currentStatus']['status'],
        OrderFulfillmentStatus
      > = {
        DELIVERED: OrderFulfillmentStatus.FULFILLED,
        FAILURE: OrderFulfillmentStatus.UNFULFILLED,
        PRE_TRANSIT: OrderFulfillmentStatus.IN_PROGRESS,
        RETURNED: OrderFulfillmentStatus.RESTOCKED,
        TRANSIT: OrderFulfillmentStatus.ON_HOLD,
        UNKNOWN: OrderFulfillmentStatus.OPEN,
      };

      await prisma.order.upsert({
        where: {
          storefrontId: order.id,
        },
        create: {
          storeDomain,
          platform: Platform.Ankorstore,
          customer:
            order?.attributes.shippingOverview.shipToAddress.name || '-',
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
              order.attributes.shippingOverview.transaction.currentStatus.status
            ],
          paymentStatus: orderPaymentStatus[order.attributes.status],
        },
        update: {
          fulfillmentStatus:
            orderFulfillmentStatus[
              order.attributes.shippingOverview.transaction.currentStatus.status
            ],
          paymentStatus: orderPaymentStatus[order.attributes.status],
          totalPrice: Math.max(
            0,
            (order.attributes.brandNetAmount || 0) / 100,
          ).toFixed(2),
          updatedAt: order.attributes.updatedAt,
        },
      });
    }
  } catch (err) {
    console.error('An error occurred while sync orders: ', err);
  }
}

export function startCronSync() {
  cron.schedule('*/30 * * * *', () => updateProductsQuantity());
  cron.schedule('* */1 * * *', () => syncOrders());
}
