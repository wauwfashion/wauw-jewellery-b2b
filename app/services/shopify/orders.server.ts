import { AdminApiContextWithoutRest } from 'node_modules/@shopify/shopify-app-remix/dist/ts/server/clients';

import { handleGraphqlThrottle } from '@/utils/graphql-throttle-handler';
import {
  ShopifyOrder,
  ShopifyOrdersResponse,
  ShopifyQueryCost,
} from '@/services/shopify/types';
import { gql } from 'graphql-request';
import { shopifyGraphqlClient } from './graphql-client';

export async function retrieveChunkOfOrders({
  first,
  afterCursor,
  query,
}: {
  first: number;
  afterCursor?: string;
  query?: string;
}): Promise<{
  orders: ShopifyOrdersResponse;
  cost: ShopifyQueryCost;
}> {
  try {
    const doc = gql`
      query Orders(
        $first: Int!
        $afterCursor: String
        $query: String
        $sortKey: OrderSortKeys
        $reverse: Boolean
      ) {
        orders(
          first: $first
          after: $afterCursor
          query: $query
          sortKey: $sortKey
          reverse: $reverse
        ) {
          nodes {
            id
            name
            customer {
              email
            }
            confirmed
            fullyPaid
            currentTotalPriceSet {
              shopMoney {
                amount
                currencyCode
              }
            }
            displayFulfillmentStatus
            displayFinancialStatus
            tags
            subtotalLineItemsQuantity
            createdAt
            updatedAt
          }
          pageInfo {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
        }
      }
    `;

    const { data, extensions } = (await shopifyGraphqlClient.rawRequest(doc, {
      first,
      afterCursor,
      query,
      sortKey: 'UPDATED_AT',
      reverse: true,
    })) as {
      data: { orders: ShopifyOrdersResponse };
      extensions: {
        cost: ShopifyQueryCost;
      };
    };

    return {
      orders: data?.orders || [],
      cost: extensions?.cost,
    };
  } catch (err) {
    console.error('An error occurred while receiving orders: ', err?.message);
  }
}

export async function retrieveAllOrders(
  query?: string,
): Promise<ShopifyOrder[]> {
  try {
    const limit = 10;
    let afterCursor: string | undefined = undefined;
    let hasNextPage = true;
    let ordersData: ShopifyOrder[] = [];

    while (hasNextPage) {
      const { orders, cost } = await retrieveChunkOfOrders({
        first: limit,
        afterCursor,
        query,
      });

      const { nodes, pageInfo } = orders;

      ordersData = [...ordersData, ...nodes];

      hasNextPage = pageInfo.hasNextPage;
      afterCursor = hasNextPage ? pageInfo.endCursor : '';

      await handleGraphqlThrottle({
        requestedQueryCost: cost.requestedQueryCost,
        currentlyAvailable: cost.throttleStatus.currentlyAvailable,
        maximumAvailable: cost.throttleStatus.maximumAvailable,
        restoreRate: cost.throttleStatus.restoreRate,
      });
    }

    return ordersData;
  } catch (err) {
    console.error(
      'An error occurred while receiving shopify orders: ',
      err?.message,
    );
  }
}
