import prisma from '@/db.server';
import { QueryParams } from './types';
import { Direction, OrderOrderBy, OrderSortOptionValue } from '@/types';

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

  return { orders, totalCount };
}
