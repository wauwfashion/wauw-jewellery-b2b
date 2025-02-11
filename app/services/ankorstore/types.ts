export interface AnkorstoreMetaPagination {
  page: {
    from: string;
    hasMore: boolean;
    perPage: number;
    to: string;
  };
}

export interface AnkorstoreProduct {
  id: string;
  attributes: {
    active: boolean;
    archived: boolean;
    capacity: number;
    description: string;
    name: string;
    dimensions: string;
    images: {
      order: number;
      url: string;
    }[];
    originalWholesalePrice: number;
    wholesalePrice: number;
    retailPrice: number;
    outOfStock: boolean;
    createdAt: Date;
    updatedAt: Date;
  };
}

export interface AnkorstoreProductVariant {
  id: string;
  attributes: {
    name: string;
    sku: string;
    ian: number;
    createdAt: Date;
    updatedAt: Date;
    archivedAt: Date | null;
    retailPrice: number;
    wholesalePrice: number;
    originalWholesalePrice: number;
    availableQuantity: number;
    reservedQuantity: number;
    stockQuantity: number;
    isAlwaysInStock: boolean;
  };
  relationship: {
    product: {
      data: {
        id: string;
      };
    };
  };
}

export interface AnkorstoreMasterOrder {
  id: string;
  relationships: {
    internalOrder: {
      data: {
        id: string;
      };
    };
  };
}

export interface AnkorstoreOrder {
  id: string;
  attributes: {
    brandCurrency: string;
    retailerCancellationRequestReason: any;
    retailerRejectReason: any;
    status:
      | 'ankor_confirmed'
      | 'rejected'
      | 'brand_confirmed'
      | 'shipping_labels_generated'
      | 'fulfillment_requested'
      | 'shipped'
      | 'reception_refused'
      | 'received'
      | 'invoiced'
      | 'brand_paid'
      | 'cancelled';
    brandTotalAmount: number;
    brandNetAmount: number;
    shippingOverview: {
      transaction: {
        currentStatus: {
          status:
            | 'UNKNOWN'
            | 'PRE_TRANSIT'
            | 'TRANSIT'
            | 'DELIVERED'
            | 'RETURNED'
            | 'FAILURE';
        };
      } | null;
      shipToAddress: {
        name: string;
      };
    };
    reference: number;
    createdAt: Date;
    submittedAt: Date;
    updatedAt: Date;
  };
}

export interface AnkorstoreOrdersResponse {
  data: AnkorstoreMasterOrder[];
  meta: AnkorstoreMetaPagination;
  included: AnkorstoreOrder[];
}

export interface AnkorstoreProductsResponse {
  data: AnkorstoreProduct[];
  meta: AnkorstoreMetaPagination;
}

export interface AnkorstoreProductVariantsResponse {
  data: AnkorstoreProductVariant[];
  meta: AnkorstoreMetaPagination;
}
