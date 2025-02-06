import { AdminApiContextWithoutRest } from 'node_modules/@shopify/shopify-app-remix/dist/ts/server/clients';

import { handleGraphqlThrottle } from '@/utils/graphql-throttle-handler';
import {
  ShopifyOrder,
  ShopifyOrdersResponse,
  ShopifyQueryCost,
} from '@/services/shopify/types';

export async function retrieveChunkOfOrders(
  graphqlClient: AdminApiContextWithoutRest['graphql'],
  {
    first,
    afterCursor,
    query,
  }: { first: number; afterCursor?: string; query?: string },
): Promise<{
  orders: ShopifyOrdersResponse;
  cost: ShopifyQueryCost;
}> {
  try {
    const res = await graphqlClient(
      `#graphql
        query Orders($first: Int!, $afterCursor: String, $query: String) {
          orders(first: $first, after: $afterCursor, query: $query) {
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
      `,
      {
        variables: {
          first,
          afterCursor,
          query,
        },
      },
    );

    const { data, extensions } = (await res.json()) as {
      data: { orders: ShopifyOrdersResponse };
      extensions: {
        cost: ShopifyQueryCost;
      };
    };

    return {
      orders: data.orders,
      cost: extensions.cost,
    };
  } catch (err) {
    throw err;
  }
}

export async function retrieveAllOrders(
  graphqlClient: AdminApiContextWithoutRest['graphql'],
  query?: string,
): Promise<ShopifyOrder[]> {
  try {
    const limit = 100;
    let afterCursor: string | undefined = undefined;
    let hasNextPage = true;
    let ordersData: ShopifyOrder[] = [];

    while (hasNextPage) {
      const { orders, cost } = await retrieveChunkOfOrders(graphqlClient, {
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
    throw err;
  }
}
