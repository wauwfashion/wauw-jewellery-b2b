import { ankorstoreApiClient } from './api-client';
import { AnkorstoreOrder, AnkorstoreOrdersResponse } from './types';

export async function retrieveChunkOfOrders(limit = 50, afterCursor?: string) {
  const { data: ordersResponse } =
    await ankorstoreApiClient.get<AnkorstoreOrdersResponse>(
      `/master-orders?include=internalOrder&page[after]=${afterCursor}&page[limit]=${limit}`,
    );

  return ordersResponse;
}

export async function retrieveAllOrders() {
  const limit = 50;
  let cursor = '';
  let hasNextPage = true;
  let ordersData: AnkorstoreOrder[] = [];

  while (hasNextPage) {
    const ordersChunk = await retrieveChunkOfOrders(limit, cursor);

    ordersData = [...ordersData, ...ordersChunk.included];

    if (ordersChunk.included.length < limit || !ordersChunk.meta.page.hasMore) {
      hasNextPage = false;
    }

    cursor = ordersChunk.meta.page.to;
  }

  return ordersData;
}
