import { ankorstoreApiClient } from './api-client';
import { AnkorstoreOrder, AnkorstoreOrdersResponse } from './types';

export async function retrieveChunkOfOrders(limit = 50, afterCursor?: string) {
  try {
    const { data: ordersResponse } =
      await ankorstoreApiClient.get<AnkorstoreOrdersResponse>(
        `/master-orders?include=internalOrder&page[after]=${afterCursor}&page[limit]=${limit}`,
      );

    return ordersResponse;
  } catch (err) {
    console.error(
      'An error occurred while retrieving chunk of Ankorstore orders: ',
      err?.message,
    );
  }
}

export async function retrieveAllOrders() {
  try {
    const limit = 50;
    let cursor = '';
    let hasNextPage = true;
    let ordersData: AnkorstoreOrder[] = [];

    while (hasNextPage) {
      const ordersChunk = await retrieveChunkOfOrders(limit, cursor);

      if (!ordersChunk) {
        return ordersData;
      }

      ordersData = [...ordersData, ...ordersChunk.included];

      if (
        ordersChunk.included.length < limit ||
        !ordersChunk.meta.page.hasMore
      ) {
        hasNextPage = false;
      }

      cursor = ordersChunk.meta.page.to;
    }

    return ordersData;
  } catch (err) {
    console.error(
      'An error occurred while retrieving all of Ankorstore orders: ',
      err?.message,
    );

    return [];
  }
}
