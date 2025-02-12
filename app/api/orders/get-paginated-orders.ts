import prisma from '@/db.server';
import { QueryParams } from './types';
import {
  Direction,
  OrderFulfillmentStatus,
  OrderOrderBy,
  OrderSortOptionValue,
  Platform,
} from '@/types';

export async function getPaginatedOrders(query?: QueryParams) {
  const { filter, pagination, sort } = query || {};
  const { limit = 10, skip = 0 } = pagination || {};

  const totalCount = await prisma.order.count({
    where: filter,
  });

  const sortKey = sort?.sortBy || OrderSortOptionValue.UpdatedAt;
  const sortDirection = sort?.direction ?? Direction.Descending;

  const orderBy: OrderOrderBy = { [sortKey]: sortDirection };

  const orders = await prisma.order.findMany({
    where: filter,
    orderBy,
    skip,
    take: limit,
  });

  const unfulfilledOrders = await prisma.order.findMany({
    where: {
      fulfillmentStatus: {
        not: OrderFulfillmentStatus.FULFILLED,
      },
    },
  });

  const unfulfilledOrdersByPlatforms: Record<Platform, number> = {
    [Platform.Shopify]: 0,
    [Platform.Orderchamp]: 0,
    [Platform.Faire]: 0,
    [Platform.Ankorstore]: 0,
  };

  for (const order of unfulfilledOrders) {
    unfulfilledOrdersByPlatforms[order.platform]++;
  }

  return {
    orders,
    totalCount,
    unfulfilledOrdersCount: unfulfilledOrders.length,
    unfulfilledOrdersByPlatforms,
  };
}
