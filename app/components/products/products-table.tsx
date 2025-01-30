import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Jsonify } from '@remix-run/server-runtime/dist/jsonify';
import {
  ChoiceList,
  FilterInterface,
  IndexFilters,
  IndexFiltersProps,
  IndexTable,
  RangeSlider,
  TabProps,
  Text,
  TextField,
  useSetIndexFiltersMode,
} from '@shopify/polaris';
import { IndexTableBaseProps } from '@shopify/polaris/build/ts/src/components/IndexTable';
import { IndexProviderProps } from '@shopify/polaris/build/ts/src/utilities/index-provider';

import { generatePaginationLabel } from '@/utils/pagination';
import { generateSortOption } from '@/utils/generate-sort-option';
import { isEmpty } from '@/utils/is-empty';
import { PaginatedProducts, SortOptions } from '@/api/products/types';
import { useDebounce } from '@/hooks/use-debounce';
import { ProductRow } from '@/components/products/products-row';
import {
  Direction,
  Platform,
  PlatformProductWhereInput,
  ProductFilterOption,
  ProductSortOptionLabel,
  ProductSortOptionValue,
  ProductStatusFilter,
  SelectedSort,
  ProductStatus,
} from '@/types';

type Props = {
  items?: Jsonify<PaginatedProducts['products']>;
  totalCount?: number;
  pagination?:
    | (Omit<Required<IndexTableBaseProps>['pagination'], 'label'> & {
        visibleCount: number;
        page: number;
      })
    | null;
  isLoading?: boolean;
  handleFilterProducts: (
    filterOptions: PlatformProductWhereInput,
    sortOptions: SortOptions,
  ) => Promise<void>;
  onResetPagination: () => void;
};

const RESOURCE_NAME: IndexProviderProps['resourceName'] = {
  singular: 'product',
  plural: 'products',
};

const HEADINGS: IndexTableBaseProps['headings'] = [
  {
    id: 'index', // index of product + 1
    title: '№',
    tooltipContent: <Text as="span">Serial number of product.</Text>,
  },
  {
    id: 'title',
    title: 'Title',
  },
  {
    id: 'totalInventory',
    title: 'Inventory',
    tooltipContent: <Text as="span">Number of product units in stock.</Text>,
  },
  {
    id: 'status',
    title: 'Status',
  },
  {
    id: 'category',
    title: 'Category',
  },
  {
    id: 'tags',
    title: 'Tags',
    tooltipContent: (
      <Text as="span">
        Hover over the product tag field to see the full list of tags.
      </Text>
    ),
  },
  {
    id: 'createdAt',
    title: 'Created Date',
  },
  {
    id: 'updatedAt',
    title: 'Updated Date',
  },
];

const DEFAULT_TAB_LABELS = Object.values(Platform) as string[];
const DEFAULT_SORT_SELECTED: SelectedSort = [
  `${ProductSortOptionValue.UpdatedAt} ${Direction.Descending}`,
];

export const ProductsTable: FC<Props> = ({
  items = [],
  totalCount = 0,
  pagination,
  isLoading,
  handleFilterProducts,
  onResetPagination,
}) => {
  const [selectedTab, setSelectedTab] = useState(
    DEFAULT_TAB_LABELS.findIndex((tab) => tab === Platform.Shopify) || 0,
  );
  const [sortSelected, setSortSelected] = useState<SelectedSort>(
    DEFAULT_SORT_SELECTED,
  );
  const [tabLabels, setTabLabels] = useState<string[]>(DEFAULT_TAB_LABELS);
  const { mode, setMode } = useSetIndexFiltersMode();

  const {
    value: query,
    setValue: setQuery,
    debouncedValue: debouncedQuery,
  } = useDebounce<string>('', 500);
  const {
    value: productCategory,
    setValue: setProductCategory,
    debouncedValue: debouncedProductCategory,
  } = useDebounce<string>('', 500);
  const {
    value: taggedWith,
    setValue: setTaggedWith,
    debouncedValue: debouncedTaggedWith,
  } = useDebounce<string>('', 500);
  const {
    value: inventoryCount,
    setValue: setInventoryCount,
    debouncedValue: debouncedInventoryCount,
  } = useDebounce<[number, number] | undefined>(undefined, 500);
  const [productStatus, setProductStatus] = useState<ProductStatusFilter>(
    ProductStatusFilter.All,
  );

  const handleUpdateProductCategory = useCallback((value: string) => {
    setProductCategory(value);
  }, []);

  const handleUpdateProductStatus = useCallback((value: string[]) => {
    setProductStatus(value[0] as ProductStatusFilter);
  }, []);

  const handleUpdateTaggedWith = useCallback((value: string) => {
    setTaggedWith(value);
  }, []);

  const handleUpdateInventoryCount = useCallback((value: [number, number]) => {
    setInventoryCount(value);
  }, []);

  const handleRemoveProductCategory = useCallback(() => {
    setProductCategory('');
  }, []);

  const handleResetProductStatus = useCallback(() => {
    setProductStatus(ProductStatusFilter.All);
  }, []);

  const handleRemoveTaggedWith = useCallback(() => {
    setTaggedWith('');
  }, []);

  const handleRemoveInventoryCount = useCallback(() => {
    setInventoryCount(undefined);
  }, []);

  const handleFiltersClearAll = useCallback(() => {
    handleRemoveProductCategory();
    handleResetProductStatus();
    handleRemoveTaggedWith();
    handleRemoveInventoryCount();
  }, []);

  const handleRenameTab = useCallback(
    async (index: number, newLabel: string) => {
      setTabLabels((prevLabels) =>
        prevLabels.map((label, idx) => (index === idx ? newLabel : label)),
      );

      return true;
    },
    [],
  );

  const handleDuplicateTab = useCallback(async (label: string) => {
    setTabLabels((prevLabels) => [...prevLabels, label]);

    return true;
  }, []);

  const handleDeleteTab = useCallback(async (index: number) => {
    setTabLabels((prevLabels) => prevLabels.filter((_, idx) => idx !== index));

    return true;
  }, []);

  const onCreateNewView = useCallback(async (newLabel: string) => {
    setTabLabels((prevLabels) => [...prevLabels, newLabel]);
    setSelectedTab((prev) => prev + 1);

    return true;
  }, []);

  const onChangeSort = useCallback((newSort: SelectedSort) => {
    setSortSelected(newSort);
  }, []);

  const onClearQuery = useCallback(() => setQuery(''), []);

  const tabs: TabProps[] = useMemo(
    () =>
      tabLabels.map((label, index) => ({
        content: label,
        index,
        onAction: () => {},
        id: `${label}-${index}`,
        isLocked: DEFAULT_TAB_LABELS.includes(label),
        actions: DEFAULT_TAB_LABELS.includes(label)
          ? []
          : [
              {
                type: 'rename',
                onAction: () => {},
                onPrimaryAction: (value: string) =>
                  handleRenameTab(index, value),
              },
              {
                type: 'duplicate',
                onPrimaryAction: handleDuplicateTab,
              },
              {
                type: 'edit',
              },
              {
                type: 'delete',
                onPrimaryAction: () => handleDeleteTab(index),
              },
            ],
      })),
    [tabLabels, DEFAULT_TAB_LABELS],
  );

  const currentTab = useMemo(() => {
    return tabs[selectedTab]?.content || DEFAULT_TAB_LABELS[0];
  }, [selectedTab, tabs, DEFAULT_TAB_LABELS]);

  const primaryAction: IndexFiltersProps['primaryAction'] = {
    type: 'save-as',
    onAction: async (title) => {
      onClearQuery();

      return true;
    },
    disabled: false,
    loading: false,
  };

  const cancelAction: IndexFiltersProps['cancelAction'] = {
    onAction: () => {
      onClearQuery();

      return true;
    },
    disabled: false,
    loading: false,
  };

  const rowMarkup = items.map((product, index) => {
    const serialNumber =
      index +
      1 +
      Math.max((pagination?.page || 1) - 1, 0) *
        (pagination?.visibleCount || 0);

    return (
      <ProductRow
        key={product.id}
        product={product}
        serialNumber={serialNumber}
        index={index}
      />
    );
  });

  const sortOptions: IndexFiltersProps['sortOptions'] = useMemo(
    () => [
      ...generateSortOption({
        label: ProductSortOptionLabel.Title,
        value: ProductSortOptionValue.Title,
        fieldType: 'string',
      }),
      ...generateSortOption({
        label: ProductSortOptionLabel.Category,
        value: ProductSortOptionValue.Category,
        fieldType: 'string',
      }),
      ...generateSortOption({
        label: ProductSortOptionLabel.TotalInventory,
        value: ProductSortOptionValue.TotalInventory,
        fieldType: 'number',
      }),
      ...generateSortOption({
        label: ProductSortOptionLabel.CreatedAt,
        value: ProductSortOptionValue.CreatedAt,
        fieldType: 'date',
      }),
      ...generateSortOption({
        label: ProductSortOptionLabel.UpdatedAt,
        value: ProductSortOptionValue.UpdatedAt,
        fieldType: 'date',
      }),
    ],
    [],
  );

  const currentDate = useMemo(() => new Date(), []);

  const filters: FilterInterface[] = [
    {
      key: ProductFilterOption.Status,
      label: 'Status',
      filter: (
        <ChoiceList
          title="Product Status"
          titleHidden
          choices={Object.values(ProductStatusFilter).map((status) => ({
            label: status,
            value: status,
          }))}
          selected={[productStatus]}
          onChange={handleUpdateProductStatus}
        />
      ),
      pinned: true,
    },
    {
      key: ProductFilterOption.Category,
      label: 'Category',
      filter: (
        <TextField
          label="Category"
          value={productCategory}
          onChange={handleUpdateProductCategory}
          autoComplete="off"
          labelHidden
        />
      ),
    },
    {
      key: ProductFilterOption.Tags,
      label: 'Tagged with',
      filter: (
        <TextField
          label="Tags"
          value={taggedWith}
          onChange={handleUpdateTaggedWith}
          autoComplete="off"
          labelHidden
        />
      ),
    },
    {
      key: ProductFilterOption.TotalInventory,
      label: 'Inventory Count',
      filter: (
        <RangeSlider
          label="Inventory count"
          labelHidden
          value={inventoryCount || [0, 100]}
          output
          min={0}
          max={1000}
          step={1}
          onChange={handleUpdateInventoryCount}
        />
      ),
    },
  ];

  const appliedFilters = useMemo(() => {
    const filters: IndexFiltersProps['appliedFilters'] = [];

    if (productStatus && !isEmpty(productStatus)) {
      filters.push({
        key: ProductFilterOption.Status,
        label: `Status: ${productStatus}`,
        onRemove: handleResetProductStatus,
      });
    }

    if (productCategory) {
      filters.push({
        key: ProductFilterOption.Category,
        label: `Category: ${productCategory}`,
        onRemove: handleRemoveProductCategory,
      });
    }

    if (taggedWith) {
      filters.push({
        key: ProductFilterOption.Tags,
        label: `Tagged with ${taggedWith}`,
        onRemove: handleRemoveTaggedWith,
      });
    }

    if (inventoryCount && !isEmpty(inventoryCount)) {
      filters.push({
        key: ProductFilterOption.TotalInventory,
        label: `Inventory count is between ${inventoryCount[0]} and ${inventoryCount[1]}`,
        onRemove: handleRemoveInventoryCount,
      });
    }

    return filters;
  }, [productStatus, productCategory, taggedWith, inventoryCount]);

  useEffect(() => {
    const filterOptions: PlatformProductWhereInput = {
      platform: (tabs[selectedTab]?.content || Platform.Shopify) as Platform,
    };

    if (productStatus !== ProductStatusFilter.All) {
      filterOptions.status = productStatus.toUpperCase() as ProductStatus;
    }

    if (debouncedQuery) {
      filterOptions.OR = [
        {
          title: {
            contains: debouncedQuery,
            mode: 'insensitive',
          },
        },
        {
          description: {
            contains: debouncedQuery,
            mode: 'insensitive',
          },
        },
        {
          category: {
            contains: debouncedQuery,
            mode: 'insensitive',
          },
        },
        {
          tags: {
            has: debouncedQuery,
          },
        },
        {
          product: {
            variants: {
              some: {
                OR: [
                  {
                    sku: {
                      contains: debouncedQuery,
                      mode: 'insensitive',
                    },
                  },
                  {
                    platformProductVariants: {
                      some: {
                        OR: [
                          {
                            barcode: {
                              contains: debouncedQuery,
                              mode: 'insensitive',
                            },
                          },
                          {
                            title: {
                              contains: debouncedQuery,
                              mode: 'insensitive',
                            },
                          },
                        ],
                      },
                    },
                  },
                ],
              },
            },
          },
        },
      ];
    }

    if (debouncedProductCategory) {
      filterOptions.category = {
        equals: debouncedProductCategory,
        mode: 'insensitive',
      };
    }

    if (debouncedTaggedWith) {
      filterOptions.tags = { has: debouncedTaggedWith };
    }

    if (debouncedInventoryCount && !isEmpty(debouncedInventoryCount)) {
      filterOptions.product = {
        totalInventory: {
          gte: debouncedInventoryCount?.[0] ?? 0,
          lte: debouncedInventoryCount?.[1] ?? 0,
        },
      };
    }

    const [sortBy, direction] = sortSelected?.[0]?.split(' ');

    handleFilterProducts(filterOptions, {
      sortBy,
      direction: direction as Direction,
    });
  }, [
    debouncedQuery,
    currentTab,
    debouncedProductCategory,
    productStatus,
    debouncedTaggedWith,
    debouncedInventoryCount,
    sortSelected,
    pagination?.page,
    pagination?.visibleCount,
  ]);

  useEffect(() => {
    onResetPagination();
  }, [
    debouncedQuery,
    debouncedProductCategory,
    currentTab,
    productStatus,
    debouncedTaggedWith,
    debouncedInventoryCount,
    sortSelected,
  ]);

  return (
    <>
      <IndexFilters
        sortOptions={sortOptions}
        sortSelected={sortSelected}
        onSort={(newSort) => {
          onChangeSort(newSort as SelectedSort);
        }}
        queryValue={query}
        queryPlaceholder="Searching in products..."
        onQueryChange={setQuery}
        onQueryClear={onClearQuery}
        primaryAction={primaryAction}
        cancelAction={cancelAction}
        tabs={tabs}
        selected={selectedTab}
        onSelect={setSelectedTab}
        canCreateNewView
        onCreateNewView={onCreateNewView}
        filters={filters}
        appliedFilters={appliedFilters}
        onClearAll={handleFiltersClearAll}
        mode={mode}
        setMode={setMode}
        loading={isLoading}
        disabled={isLoading}
      />
      <IndexTable
        hasZebraStriping
        resourceName={RESOURCE_NAME}
        itemCount={totalCount}
        selectable={false}
        pagination={
          pagination
            ? {
                label: generatePaginationLabel({
                  page: pagination.page,
                  resourceName: RESOURCE_NAME.plural,
                  totalCount: totalCount,
                  visibleCount: pagination.visibleCount,
                }),
                nextTooltip: 'Next page',
                previousTooltip: 'Previous page',
                ...pagination,
              }
            : undefined
        }
        headings={HEADINGS}
      >
        {rowMarkup}
      </IndexTable>
    </>
  );
};
