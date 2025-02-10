import { faireApiClient } from './api-client';
import { FaireOrder, FaireOrdersResponse } from './types';

export async function retrieveChunkOfOrders(page = 1, limit = 50) {
  const { data: ordersResponse } =
    await faireApiClient.get<FaireOrdersResponse>(
      `/orders?page=${page}&limit=${limit}`,
    );

  return ordersResponse;
}

export async function retrieveAllOrders() {
  const limit = 50;
  let page = 1;
  let hasNextPage = true;
  let ordersData: FaireOrder[] = [];

  while (hasNextPage) {
    const productsChunk = await retrieveChunkOfOrders(page, limit);

    ordersData = [...ordersData, ...productsChunk.orders];

    if (productsChunk.orders.length < limit) {
      hasNextPage = false;
    }

    page++;
  }

  return ordersData;
}
