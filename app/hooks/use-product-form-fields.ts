import {
  Field,
  lengthLessThan,
  lengthMoreThan,
  notEmptyString,
  positiveIntegerString,
  positiveNumericString,
  useField,
} from '@shopify/react-form';
import { ProductStatus } from '@prisma/client';

import { MappedProductDetailsData } from '@/utils/map-product-details';
import { InventoryPolicy } from '@/types';

export interface ProductUpdateFields {
  productFields: {
    title: string;
    description: string;
    status: ProductStatus;
    tags: string[];
  };
  variantFields: Record<
    string,
    Record<'sku' | 'price' | 'barcode' | 'title', string | undefined> &
      Record<'createdAt' | 'updatedAt', Date | undefined>
  >;
}

export interface ProductUpdateFieldsWithId {
  productFields: ProductUpdateFields['productFields'] & {
    id: string;
    storefrontId: string;
    category?: string;
  };
  variantFields: {
    id: string | null;
    storefrontId?: string;
    sku: string;
    price: string;
    barcode: string;
    parentVariantId: string | null;
    title?: string;
    inventoryQuantity: number;
    inventoryPolicy: InventoryPolicy;
    createdAt?: Date;
    updatedAt?: Date;
  }[];
}

export type UpdateVariantFields = Record<
  string,
  Record<'sku' | 'price' | 'barcode', Field<string>>
>;

export type FormFieldsMapping = ReturnType<typeof useProductFormFields>;

export const useProductFormFields = (product: MappedProductDetailsData) => {
  const variantFields = (product?.variants ?? []).reduce(
    (acc, variant) => {
      if (!variant || !variant?.platformVariant) {
        return acc;
      }

      if (
        variant.platformVariant?.title === 'Default Title' &&
        (product?.variants?.length ?? 1) > 1
      ) {
        return acc;
      }

      acc[variant.platformVariant?.id as string] = {
        sku: useField({
          value:
            variant?.sku ||
            `${variant.shopifyVariantStorefrontId.replace('gid://shopify/ProductVariant/', '')}-temp-sku` ||
            '',
          validates: [notEmptyString('SKU is required.')],
        }),
        price: useField({
          value: variant.platformVariant?.price || '0.01',
          validates: [
            notEmptyString('Price is required.'),
            positiveNumericString('Price must be a number.'),
          ],
        }),
        barcode: useField({
          value: variant.platformVariant?.barcode || '',
          validates: [
            notEmptyString('Barcode is required.'),
            positiveIntegerString('Barcode must be a number.'),
            lengthMoreThan(1, 'Barcode must be at least 2 character length.'),
            lengthLessThan(19, 'Barcode must be at most 18 character length.'),
          ],
        }),
      };

      return acc;
    },
    {} as Record<string, Record<'sku' | 'barcode' | 'price', Field<string>>>,
  );

  return {
    title: useField({
      value: product?.platformProduct.title!,
      validates: [notEmptyString('Title is required.')],
    }),
    description: useField(product?.platformProduct.description!),
    status: useField(product?.platformProduct.status!),
    ...variantFields,
  };
};
