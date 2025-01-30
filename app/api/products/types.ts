import { Direction, PlatformProductWhereInput } from '@/types';
import { getPaginatedProducts } from './get-paginated-products';

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
  filter?: PlatformProductWhereInput;
}

export type PaginatedProducts = Awaited<
  ReturnType<typeof getPaginatedProducts>
>;
