import { FC, useMemo } from 'react';
import {
  Bleed,
  BlockStack,
  Box,
  Card,
  Divider,
  FormLayout,
  InlineGrid,
  Link,
  Select,
  TabProps,
  Tabs,
  Text,
  TextField,
  Tooltip,
} from '@shopify/polaris';
import { LinkIcon } from '@shopify/polaris-icons';

import { MultiCombobox, OptionItem, PriceInput } from '@/components/forms';
import { Platform, ProductStatus } from '@/types';
import { firstUpperCase, truncate } from '@/utils/string-utils';
import {
  FormFieldsMapping,
  UpdateVariantFields,
} from '@/hooks/use-product-form-fields';
import { MappedProductDetailsData } from '@/utils/map-product-details';

interface Props {
  onReset: () => void;
  onSubmit: () => Promise<void>;
  fields: FormFieldsMapping;
  sourceUrl: string;
  currencyCode: string;
  availableTags: OptionItem[];
  selectedTags: OptionItem[];
  onSelectTags: (value: string[]) => void;
  currentPlatform: Platform;
  product: MappedProductDetailsData;
  selectedVariantTab: number;
  onSelectVariantTab: (index: number) => void;
}

export const ProductDetailsForm: FC<Props> = ({
  onReset,
  fields,
  sourceUrl,
  currencyCode,
  availableTags,
  selectedTags,
  onSelectTags,
  currentPlatform,
  product,
  selectedVariantTab,
  onSelectVariantTab,
}) => {
  const { title, description, status, ...restFields } = fields;
  const variantFields = restFields as UpdateVariantFields;

  const filteredVariants = (product?.variants || []).filter(
    (variant) => !!variant?.platformVariant,
  );

  const isDefaultVariant = useMemo(
    () =>
      filteredVariants?.length === 1 &&
      filteredVariants[0].platformVariant?.title === 'Default Title',
    [filteredVariants],
  );

  const preparedVariants = isDefaultVariant
    ? filteredVariants || []
    : filteredVariants.filter(
        (variant) => variant.platformVariant?.title !== 'Default Title',
      ) || [];

  const tabs: TabProps[] = useMemo(
    () =>
      preparedVariants.map((variant, idx) => ({
        id: `${variant.id}-${idx}`,
        panelID: variant.platformVariant?.id || '',
        content: variant.platformVariant?.title!,
      })),
    [preparedVariants],
  );

  const isSingleVariant = preparedVariants.length === 1;

  return (
    <form noValidate onReset={onReset}>
      <InlineGrid columns={{ xs: 1, md: '2fr 1fr' }} gap="400">
        <BlockStack gap="400">
          <Card roundedAbove="sm">
            <BlockStack gap="400">
              <FormLayout>
                <TextField
                  disabled={currentPlatform === Platform.Ankorstore}
                  autoComplete=""
                  label="Title"
                  requiredIndicator
                  type="text"
                  name="title"
                  {...fields.title}
                />
                <TextField
                  disabled={currentPlatform === Platform.Ankorstore}
                  autoComplete=""
                  label="Description"
                  type="text"
                  name="description"
                  multiline={10}
                  {...fields.description}
                />

                {isSingleVariant && (
                  <InlineGrid gap="400" columns={2}>
                    <TextField
                      autoComplete=""
                      requiredIndicator
                      disabled={currentPlatform !== Platform.Shopify}
                      label="SKU (Stock Keeping Unit)"
                      type="text"
                      name="sku"
                      {...variantFields[
                        preparedVariants[selectedVariantTab].platformVariant
                          ?.id as string
                      ].sku}
                    />
                    <TextField
                      disabled={currentPlatform === Platform.Ankorstore}
                      autoComplete=""
                      requiredIndicator
                      label="Barcode (ISBN, UPC, GTIN, etc.)"
                      type="text"
                      name="barcode"
                      {...variantFields[
                        preparedVariants[selectedVariantTab].platformVariant
                          ?.id as string
                      ].barcode}
                    />
                  </InlineGrid>
                )}
              </FormLayout>
            </BlockStack>
          </Card>
          {!isSingleVariant && (
            <BlockStack gap="400">
              <Tabs
                tabs={tabs}
                selected={selectedVariantTab}
                fitted
                disclosureText="More variants"
                onSelect={onSelectVariantTab}
              >
                <Card roundedAbove="sm">
                  <BlockStack gap="400">
                    <TextField
                      autoComplete=""
                      requiredIndicator
                      disabled={currentPlatform !== Platform.Shopify}
                      label="SKU (Stock Keeping Unit)"
                      type="text"
                      name="sku"
                      {...variantFields[
                        preparedVariants[selectedVariantTab].platformVariant
                          ?.id as string
                      ].sku}
                    />
                    <InlineGrid gap="400" columns={2}>
                      <TextField
                        disabled={currentPlatform === Platform.Ankorstore}
                        autoComplete=""
                        requiredIndicator
                        label="Barcode (ISBN, UPC, GTIN, etc.)"
                        type="text"
                        name="barcode"
                        {...variantFields[
                          preparedVariants[selectedVariantTab].platformVariant
                            ?.id as string
                        ].barcode}
                      />
                      <PriceInput
                        disabled={currentPlatform === Platform.Ankorstore}
                        autoComplete=""
                        label="Price"
                        type="text"
                        name="price"
                        prefix={currencyCode}
                        requiredIndicator
                        {...variantFields[
                          preparedVariants[selectedVariantTab].platformVariant
                            ?.id as string
                        ].price}
                      />
                    </InlineGrid>
                  </BlockStack>
                </Card>
              </Tabs>
            </BlockStack>
          )}
        </BlockStack>
        <BlockStack gap={{ xs: '400', md: '200' }}>
          <Card roundedAbove="sm">
            <BlockStack gap="400">
              {/* @ts-ignore */}
              <Select
                label="Status"
                name="status"
                disabled={currentPlatform !== Platform.Shopify}
                options={Object.values(ProductStatus)
                  .filter((status) => status !== ProductStatus.ARCHIVED)
                  .map((status) => ({
                    label: firstUpperCase(status),
                    value: status,
                  }))}
                {...fields.status}
              />
              <Box>
                <Bleed marginInline={{ xs: '400', sm: '500' }}>
                  <Divider />
                </Bleed>
              </Box>
              <MultiCombobox
                items={availableTags || []}
                onChangeSelectedItems={onSelectTags}
                selectedItems={selectedTags || []}
                resourceLabel="tags"
              />
              {isSingleVariant && (
                <>
                  <Box>
                    <Bleed marginInline={{ xs: '400', sm: '500' }}>
                      <Divider />
                    </Bleed>
                  </Box>
                  <PriceInput
                    disabled={currentPlatform === Platform.Ankorstore}
                    autoComplete=""
                    label="Price"
                    type="text"
                    name="price"
                    prefix={currencyCode}
                    requiredIndicator
                    {...variantFields[
                      preparedVariants[selectedVariantTab].platformVariant
                        ?.id as string
                    ].price}
                  />
                </>
              )}
              <Box>
                <Bleed marginInline={{ xs: '400', sm: '500' }}>
                  <Divider />
                </Bleed>
              </Box>
              {product?.platformProduct.category && (
                <Box>
                  <Text as="span">
                    {product?.platformProduct.category.length >= 40 ? (
                      <>
                        Category:{' '}
                        <Tooltip
                          content={product?.platformProduct.category}
                          hasUnderline
                        >
                          {truncate(product?.platformProduct.category, 40)}
                        </Tooltip>
                      </>
                    ) : (
                      <>Category: {product?.platformProduct.category}</>
                    )}
                  </Text>
                </Box>
              )}
              <Box>
                <Text as="span">
                  Total Inventory: {product?.totalInventory}
                </Text>
              </Box>
            </BlockStack>
          </Card>
          <Card roundedAbove="sm">
            <BlockStack gap="400">
              <Link target="_blank" monochrome url={sourceUrl}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <LinkIcon width={18} height={18} />
                  <Text as="span">
                    Go to the product directly on the platform
                  </Text>
                </div>
              </Link>
            </BlockStack>
          </Card>
        </BlockStack>
      </InlineGrid>
    </form>
  );
};
