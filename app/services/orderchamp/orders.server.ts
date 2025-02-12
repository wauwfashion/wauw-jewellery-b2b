import { handleGraphqlThrottle } from '@/utils/graphql-throttle-handler';
import {
  OrderchampOrder,
  OrderchampOrdersResponse,
  OrderchampQueryCost,
} from './types';
import { orderchampGraphqlClient } from './graphql-client';
import { gql } from 'graphql-request';

export async function retrieveChunkOfOrders(
  first: number,
  afterCursor?: string,
): Promise<{
  orders: OrderchampOrdersResponse;
  cost: OrderchampQueryCost;
}> {
  try {
    const query = gql`
      query Orders($first: Int!, $afterCursor: String, $sort: OrderSort) {
        orders(first: $first, after: $afterCursor, sort: $sort) {
          nodes {
            id
            number
            customer {
              email
            }
            totalPrice
            currency
            status
            isFulfilled
            isPaid
            isConfirmed
            productsCount
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

    const { data, extensions } = (await orderchampGraphqlClient.rawRequest(
      query,
      { first, afterCursor, sort: 'CREATED_AT_DESC' },
    )) as {
      data: { orders: OrderchampOrdersResponse };
      extensions: { throttle: OrderchampQueryCost };
    };

    return { orders: data.orders, cost: extensions.throttle };
  } catch (err) {
    console.error(
      'An error occurred while receiving orderchamp products: ',
      err?.message,
    );
  }
}

export async function retrieveAllOrders(): Promise<OrderchampOrder[]> {
  try {
    const limit = 10;
    let afterCursor: string | undefined = undefined;
    let hasNextPage = true;
    let ordersData: OrderchampOrder[] = [];

    while (hasNextPage) {
      const { orders, cost } = await retrieveChunkOfOrders(limit, afterCursor);

      const { nodes, pageInfo } = orders;

      ordersData = [...ordersData, ...nodes];

      hasNextPage = pageInfo.hasNextPage;
      afterCursor = hasNextPage ? pageInfo.endCursor : '';

      await handleGraphqlThrottle({
        requestedQueryCost: cost.requestedCost,
        currentlyAvailable: Math.max(0, cost.limit - cost.requestedCost),
        maximumAvailable: cost.limit,
        restoreRate: cost.restoreRate,
      });
    }

    return ordersData;
  } catch (err) {
    console.error(
      'An error occurred while receiving orderchamp orders: ',
      err?.message,
    );
  }
}
