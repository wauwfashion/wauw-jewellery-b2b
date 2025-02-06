import { Tone } from '@shopify/polaris/build/ts/src/components/Badge';
import {
  OrderFulfillmentStatus,
  OrderPaymentStatus,
  Platform,
  ProductStatus,
} from './types';

export const statusBadgeProgress: Record<string, Tone> = {
  [ProductStatus.ACTIVE]: 'success',
  [ProductStatus.DRAFT]: 'info',
  [ProductStatus.ARCHIVED]: 'attention',
};

export const paymentStatusBadgeProgress: Record<
  string,
  { tone: Tone; progress?: 'incomplete' | 'partiallyComplete' | 'complete' }
> = {
  [OrderPaymentStatus.PAID]: {
    tone: 'success',
    progress: 'complete',
  },
  [OrderPaymentStatus.AUTHORIZED]: {
    tone: 'info',
  },
  [OrderPaymentStatus.PARTIALLY_REFUNDED]: {
    tone: 'warning',
    progress: 'partiallyComplete',
  },
  [OrderPaymentStatus.PENDING]: {
    tone: 'info',
  },
  [OrderPaymentStatus.VOIDED]: {
    tone: 'info',
  },
  [OrderPaymentStatus.EXPIRED]: {
    tone: 'info',
    progress: 'incomplete',
  },
  [OrderPaymentStatus.PARTIALLY_PAID]: {
    tone: 'warning',
    progress: 'partiallyComplete',
  },
  [OrderPaymentStatus.REFUNDED]: {
    tone: 'attention',
    progress: 'incomplete',
  },
};

export const fulfillmentStatusBadgeProgress: Record<
  string,
  { tone: Tone; progress?: 'incomplete' | 'partiallyComplete' | 'complete' }
> = {
  [OrderFulfillmentStatus.OPEN]: {
    tone: 'new',
  },
  [OrderFulfillmentStatus.ON_HOLD]: {
    tone: 'info',
  },
  [OrderFulfillmentStatus.IN_PROGRESS]: {
    tone: 'info',
  },
  [OrderFulfillmentStatus.FULFILLED]: {
    tone: 'success',
    progress: 'complete',
  },
  [OrderFulfillmentStatus.PARTIALLY_FULFILLED]: {
    tone: 'warning',
    progress: 'partiallyComplete',
  },
  [OrderFulfillmentStatus.PENDING_FULFILLMENT]: {
    tone: 'info',
    progress: 'incomplete',
  },
  [OrderFulfillmentStatus.RESTOCKED]: {
    tone: 'info',
  },
  [OrderFulfillmentStatus.SCHEDULED]: {
    tone: 'info',
  },
  [OrderFulfillmentStatus.UNFULFILLED]: {
    tone: 'attention',
    progress: 'incomplete',
  },
};

export const platforms = Object.values(Platform);
