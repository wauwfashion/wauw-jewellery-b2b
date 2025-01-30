import { mapPlatformProducts } from '@/utils/map-platform-products';
import { QueryParams } from '@/api/products/types';
import prisma from '@/db.server';
import {
  Direction,
  ProductOrderBy,
  ProductSortOptionValue,
  Platform,
} from '@/types';

export async function getPaginatedProducts(
  storeDomain: string,
  query?: QueryParams,
) {
  const { filter, pagination, sort } = query || {};
  const { limit = 10, skip = 0 } = pagination || {};

  const filterParams = {
    ...(filter || {}),
    product: {
      ...(filter?.product || {}),
      storeDomain,
    },
  } as QueryParams['filter'];

  const totalCount = await prisma.platformProduct.count({
    where: filterParams,
  });

  const sortKey = sort?.sortBy || ProductSortOptionValue.UpdatedAt;
  const sortDirection = sort?.direction ?? Direction.Descending;

  const orderBy: ProductOrderBy =
    sort?.sortBy === ProductSortOptionValue.TotalInventory
      ? {
          product: {
            totalInventory: sortDirection,
          },
        }
      : { [sortKey]: sortDirection };

  const platformProducts = await prisma.platformProduct.findMany({
    where: filterParams,
    include: {
      product: {
        include: {
          variants: {
            include: {
              platformProductVariants: {
                where: {
                  platform: filter?.platform as Platform,
                },
              },
            },
          },
        },
      },
    },
    orderBy,
    skip,
    take: limit,
  });

  const products = mapPlatformProducts(platformProducts);

  return { products, totalCount };
}
