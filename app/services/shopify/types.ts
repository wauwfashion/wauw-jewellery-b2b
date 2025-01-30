import {
  InventoryPolicy,
  PageInfo,
  ProductCategory,
  ProductStatus,
} from '@/types';

export enum MediaType {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  MODEL_3D = 'MODEL_3D',
  EXTERNAL_VIDEO = 'EXTERNAL_VIDEO',
}

export interface ShopifyProductVariant {
  id: string;
  title: string;
  sku: string;
  barcode?: string;
  price: string;
  inventoryQuantity: number;
  inventoryPolicy: InventoryPolicy;
  selectedOptions: {
    name: string;
    value: string;
  }[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ShopifyProductMedia {
  id: string;
  mediaContentType: MediaType;
  preview: {
    image: {
      id: string;
      url: string;
    };
  };
}

export interface ShopifyProduct {
  id: string;
  title: string;
  descriptionHtml: string;
  hasOnlyDefaultVariant: boolean;
  vendor: string;
  variantsCount: {
    count: number;
  };
  options: { name: string; position: number }[];
  variants: {
    nodes: ShopifyProductVariant[];
  };
  media: {
    nodes: ShopifyProductMedia[];
  };
  status: ProductStatus;
  tags: string[];
  totalInventory: number;
  category: ProductCategory;
  createdAt: Date;
  updatedAt: Date;
}

export interface ShopifyProductsResponse {
  nodes: ShopifyProduct[];
  pageInfo: PageInfo;
}

export interface ShopifyQueryCost {
  actualQueryCost: number;
  requestedQueryCost: number;
  throttleStatus: {
    currentlyAvailable: number;
    maximumAvailable: number;
    restoreRate: number;
  };
}

export interface FullShopifyProductVariant {
  admin_graphql_api_id: string;
  barcode: string | null;
  compare_at_price: string;
  created_at: Date;
  fulfillment_service: string;
  id: number;
  inventory_management: string;
  inventory_policy: string;
  position: number;
  price: string;
  product_id: number;
  sku: string;
  taxable: boolean;
  title: string;
  updated_at: Date;
  option1: string;
  option2: string | null;
  option3: string | null;
  grams: number;
  image_id: number | null;
  weight: number;
  weight_unit: string;
  inventory_item_id: number | null;
  inventory_quantity: number;
  old_inventory_quantity: number;
  requires_shipping: boolean;
}

export interface ShopifyImage {
  admin_graphql_api_id: string;
  id: string;
  productId: string;
  position: number;
  alt: string | null;
  width: number;
  height: number;
  src: string;
  variant_ids: string[];
}

export interface FullShopifyProductOption {
  id: string;
  name: string;
  product_id: string;
  position: number;
  values: string[];
}

export interface FullShopifyProduct {
  admin_graphql_api_id: string;
  body_html: string;
  created_at: Date;
  handle: string;
  id: number;
  product_type: string;
  published_at: string;
  template_suffix: string | null;
  title: string;
  updated_at: Date;
  vendor: string;
  status: string;
  published_scope: string;
  tags: string;
  variants: FullShopifyProductVariant[];
  options: FullShopifyProductOption[];
  images: ShopifyImage[];
  image: ShopifyImage;
  category: {
    admin_graphql_api_id: string;
    name: string;
    full_name: string;
  };
}
