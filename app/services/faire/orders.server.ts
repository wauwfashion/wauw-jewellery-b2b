import { faireApiClient } from './api-client';
import { FaireOrder, FaireOrdersResponse } from './types';

export async function retrieveChunkOfOrders(page = 1, limit = 50) {
  try {
    const { data: ordersResponse } =
      await faireApiClient.get<FaireOrdersResponse>(
        `/orders?page=${page}&limit=${limit}`,
      );

    return ordersResponse;
  } catch (err) {
    console.error(
      'An error occurred while retrieving chunk of Faire orders: ',
      err?.message,
    );
  }
}

export async function retrieveAllOrders() {
  try {
    const limit = 50;
    let page = 1;
    let hasNextPage = true;
    let ordersData: FaireOrder[] = [];

    while (hasNextPage) {
      const productsChunk = await retrieveChunkOfOrders(page, limit);

      if (!productsChunk) {
        return ordersData;
      }

      ordersData = [...ordersData, ...productsChunk.orders];

      if (productsChunk.orders.length < limit) {
        hasNextPage = false;
      }

      page++;
    }

    return ordersData;
  } catch (err) {
    console.error(
      'An error occurred while retrieving all of Faire orders: ',
      err?.message,
    );

    return [];
  }
}
