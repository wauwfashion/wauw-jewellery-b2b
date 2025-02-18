import { InventoryPolicy, PageInfo, ProductCategory } from '@/types';

export interface OrderchampQueryCost {
  requestedCost: number;
  actualCost: number;
  limit: number;
  remaining: number;
  restoreRate: number;
}

export interface OrderchampProductVariant {
  id: string;
  title: string;
  sku: string;
  barcode?: string;
  price: string;
  inventoryQuantity: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderchampProduct {
  id: string;
  title: string;
  description: string;
  category: ProductCategory;
  salesChannels: string[];
  databaseId: string;
  variants: {
    nodes: OrderchampProductVariant[];
  };
  tags: string[] | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderchampOrder {
  id: string;
  number: string;
  customer?: {
    email?: string | null;
  };
  totalPrice: string;
  currency: string;
  status: string;
  isFulfilled: boolean;
  isPaid: boolean;
  isConfirmed: boolean;
  productsCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderchampProductsResponse {
  nodes: OrderchampProduct[];
  pageInfo: PageInfo;
}

export interface OrderchampOrdersResponse {
  nodes: OrderchampOrder[];
  pageInfo: PageInfo;
}

export enum OrderchampTag {
  CRUELTY_FREE = 'Cruelty Free',
  DUTCH_DESIGN = 'Dutch Design',
  HANDMADE = 'Handmade',
  NATURAL_RESOURCES = 'Natural Resources',
  NON_TOXIC = 'Non Toxic',
  ORGANIC = 'Organic',
  RECYCLED_MATERIALS = 'Recycled Materials',
  SOCIAL = 'Social Good',
  VEGAN = 'Vegan',
  ZERO_WASTE = 'Zero Waste',
}

export interface CreateProductInput {
  title: string;
  description?: string;
  brand: string;
  category?: string;
  images?: { sourceUrl: string }[];
  option1: string | null;
  option2: string | null;
  option3: string | null;
  variants: {
    images?: { sourceUrl: string }[];
    barcode: string;
    msrp?: string;
    inventoryQuantity: number;
    price: string;
    sku: string;
    inventoryPolicy: InventoryPolicy;
    option?: string | null;
    option1: string | null;
    option2: string | null;
    option3: string | null;
  }[];
}
