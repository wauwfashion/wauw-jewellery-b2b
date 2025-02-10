export interface FaireProductVariantOption {
  name: string;
  value: string;
}

export interface GeoConstraint {
  country_group: 'EUROPEAN_UNION';
}

export interface PriceDetail {
  amount_minor: number;
  currency: string;
}

export interface FairePrice {
  geo_constraint: GeoConstraint;
  wholesale_price: PriceDetail;
  retail_price: PriceDetail;
}

export interface FaireImage {
  id: string;
  width: number;
  height: number;
  sequence: number;
  url: string;
  tags: string[];
}

export interface FaireProductVariant {
  id: string;
  created_at: Date;
  updated_at: Date;
  product_id: string;
  name: string;
  sale_state: 'FOR_SALE' | 'SALES_PAUSED';
  lifecycle_state: 'DRAFT' | 'PUBLISHED' | 'UNPUBLISHED' | 'DELETED';
  sku: string;
  available_quantity: number;
  measurements?: Record<string, any>;
  orderability_type: string;
  images?: FaireImage[];
  options?: FaireProductVariantOption[];
  prices?: FairePrice[];
}

export interface TaxonomyType {
  id: string;
  name: string;
}

export interface VariantOptionSet {
  name: string;
  values: string[];
}

export interface FaireProduct {
  id: string;
  created_at: Date;
  updated_at: Date;
  brand_id: string;
  name: string;
  description: string;
  short_description: string;
  lifecycle_state: 'DRAFT' | 'PUBLISHED' | 'UNPUBLISHED' | 'DELETED';
  unit_multiplier: number;
  minimum_order_quantity: number;
  per_style_minimum_order_quantity: number;
  allow_sales_when_out_of_stock: boolean;
  taxonomy_type: TaxonomyType;
  preorderable: boolean;
  variants: FaireProductVariant[];
  images: FaireImage[];
  variant_option_sets: VariantOptionSet[];
}

export interface FaireProductsResponse {
  page: number;
  limit: number;
  products: FaireProduct[];
}

export interface CreateFaireProductInput {
  idempotence_token: string;
  name: string;
  description: string;
  lifecycle_state: 'DRAFT' | 'PUBLISHED' | 'UNPUBLISHED' | 'DELETED';
  unit_multiplier: number;
  minimum_order_quantity: number;
  variant_option_sets: VariantOptionSet[];
  taxonomy_type?: Pick<TaxonomyType, 'id'>;
  images?: { url: string }[];
  allow_sales_when_out_of_stock?: boolean;
  variants: {
    idempotence_token: string;
    lifecycle_state?: 'DRAFT' | 'PUBLISHED' | 'UNPUBLISHED' | 'DELETED';
    sku: string;
    options?: {
      name: string;
      value: string;
    }[];
    available_quantity?: number;
    images?: { url: string }[];
    prices: FairePrice[];
  }[];
}

export type UpdateFaireProductInput = Partial<
  Omit<CreateFaireProductInput, 'idempotence_token' | 'variants'>
> & {
  variants?: Omit<
    CreateFaireProductInput['variants'][number],
    'idempotence_token'
  >[];
};

export interface FaireOrder {
  id: string;
  display_id: string;
  payment_initiated_at?: Date;
  created_at: Date;
  updated_at: Date;
  state: string;
  items: FaireOrderItem[];
  address: Address;
  retailer_id: string;
  payout_costs: PayoutCosts;
  source: string;
  customer: {
    first_name: string;
    last_name: string;
  };
}

export interface FaireOrderItem {
  id: string;
  created_at: string;
  updated_at: string;
  order_id: string;
  product_id: string;
  variant_id: string;
  quantity: number;
  sku: string;
  price_cents: number;
  product_name: string;
  variant_name: string;
  includes_tester: boolean;
}

export interface Address {
  name: string;
  address1: string;
  address2: string;
  postal_code: string;
  city: string;
  state: string;
  state_code: string;
  phone_number: string;
  country: string;
  country_code: string;
  company_name: string;
}

export interface PayoutCosts {
  payout_fee_cents: number;
  payout_fee_bps: number;
  commission_cents: number;
  commission_bps: number;
  total_payout: {
    amount_minor: number;
    currency: string;
  };
}

export interface FaireOrdersResponse {
  page: number;
  limit: number;
  orders: FaireOrder[];
}
