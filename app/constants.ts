import { Tone } from '@shopify/polaris/build/ts/src/components/Badge';
import { Platform, ProductStatus } from './types';

export const statusBadgeProgress: Record<string, Tone> = {
  [ProductStatus.ACTIVE]: 'success',
  [ProductStatus.DRAFT]: 'info',
  [ProductStatus.ARCHIVED]: 'attention',
};

export const platforms = Object.values(Platform);
