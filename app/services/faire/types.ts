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
  lifecycle_state: string;
  sku: string;
  measurements: Record<string, any>;
  orderability_type: string;
  images: FaireImage[];
  options: FaireProductVariantOption[];
  prices: FairePrice[];
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
    sku: string;
    options: {
      name: string;
      value: string;
    }[];
    prices: FairePrice[];
  }[];
}
