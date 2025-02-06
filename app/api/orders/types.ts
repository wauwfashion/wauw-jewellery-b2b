import { Direction, OrderWhereInput } from '@/types';
import { getPaginatedOrders } from './get-paginated-orders';

export interface SortOptions {
  sortBy?: string;
  direction?: Direction;
}

export interface PaginationOptions {
  limit?: number;
  skip?: number;
}

export interface QueryParams {
  sort?: SortOptions;
  pagination?: PaginationOptions;
  filter?: OrderWhereInput;
}

export type PaginatedOrders = Awaited<ReturnType<typeof getPaginatedOrders>>;
