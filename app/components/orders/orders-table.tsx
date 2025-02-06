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
  useSetIndexFiltersMode,
} from '@shopify/polaris';
import { IndexTableBaseProps } from '@shopify/polaris/build/ts/src/components/IndexTable';
import { IndexProviderProps } from '@shopify/polaris/build/ts/src/utilities/index-provider';

import { generatePaginationLabel } from '@/utils/pagination';
import { generateSortOption } from '@/utils/generate-sort-option';
import { isEmpty } from '@/utils/is-empty';
import { useDebounce } from '@/hooks/use-debounce';
import {
  Direction,
  Platform,
  OrderFilterOption,
  OrderSortOptionLabel,
  OrderSortOptionValue,
  SelectedSort,
  OrderWhereInput,
  OrderPaymentStatus,
  OrderFulfillmentStatus,
} from '@/types';
import { PaginatedOrders, SortOptions } from '@/api/orders/types';
import { OrdersRow } from './orders-row';

type Props = {
  storeDomain: string;
  items?: Jsonify<PaginatedOrders['orders']>;
  totalCount?: number;
  pagination?:
    | (Omit<Required<IndexTableBaseProps>['pagination'], 'label'> & {
        visibleCount: number;
        page: number;
      })
    | null;
  isLoading?: boolean;
  handleFilterOrders: (
    filterOptions: OrderWhereInput,
    sortOptions: SortOptions,
  ) => Promise<void>;
  onResetPagination: () => void;
};

const RESOURCE_NAME: IndexProviderProps['resourceName'] = {
  singular: 'order',
  plural: 'orders',
};

const HEADINGS: IndexTableBaseProps['headings'] = [
  {
    id: 'name',
    title: '№',
    tooltipContent: <Text as="span">Order number</Text>,
  },
  {
    id: 'customer',
    title: 'Customer',
  },
  {
    id: 'lineItemsCount',
    title: 'Items count',
  },
  {
    id: 'totalPrice',
    title: 'Total price',
  },
  {
    id: 'paymentStatus',
    title: 'Payment Status',
  },
  {
    id: 'fulfillmentStatus',
    title: 'Fulfillment Status',
  },
  {
    id: 'tags',
    title: 'Tags',
    tooltipContent: (
      <Text as="span">
        Hover over the order tag field to see the full list of tags.
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
  `${OrderSortOptionValue.UpdatedAt} ${Direction.Descending}`,
];

export const OrdersTable: FC<Props> = ({
  items = [],
  totalCount = 0,
  pagination,
  isLoading,
  storeDomain,
  handleFilterOrders,
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
    value: lineItemsCount,
    setValue: setLineItemsCount,
    debouncedValue: debouncedLineItemsCount,
  } = useDebounce<[number, number] | undefined>(undefined, 500);

  const {
    value: totalPrice,
    setValue: setTotalPrice,
    debouncedValue: debouncedTotalPrice,
  } = useDebounce<[number, number] | undefined>(undefined, 500);

  const [paymentStatus, setPaymentStatus] = useState<
    OrderPaymentStatus | undefined
  >();

  const [fulfillmentStatus, setFulfillmentStatus] = useState<
    OrderFulfillmentStatus | undefined
  >();

  const handleUpdatePaymentStatus = useCallback((value: string[]) => {
    setPaymentStatus(value[0] as OrderPaymentStatus);
  }, []);

  const handleUpdateFulfillmentStatus = useCallback((value: string[]) => {
    setFulfillmentStatus(value[0] as OrderFulfillmentStatus);
  }, []);

  const handleUpdateLineItemsCount = useCallback((value: [number, number]) => {
    setLineItemsCount(value);
  }, []);

  const handleUpdateTotalPrice = useCallback((value: [number, number]) => {
    setTotalPrice(value);
  }, []);

  const handleResetPaymentStatus = useCallback(() => {
    setPaymentStatus(undefined);
  }, []);

  const handleResetFulfillmentStatus = useCallback(() => {
    setFulfillmentStatus(undefined);
  }, []);

  const handleRemoveLineItemsCount = useCallback(() => {
    setLineItemsCount(undefined);
  }, []);

  const handleRemoveTotalPrice = useCallback(() => {
    setTotalPrice(undefined);
  }, []);

  const handleFiltersClearAll = useCallback(() => {
    handleResetPaymentStatus();
    handleRemoveLineItemsCount();
    handleResetFulfillmentStatus();
    handleRemoveTotalPrice();
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

  const sortOptions: IndexFiltersProps['sortOptions'] = useMemo(
    () => [
      ...generateSortOption({
        label: OrderSortOptionLabel.Name,
        value: OrderSortOptionValue.Name,
        fieldType: 'string',
      }),
      ...generateSortOption({
        label: OrderSortOptionLabel.TotalPrice,
        value: OrderSortOptionValue.TotalPrice,
        fieldType: 'number',
      }),
      ...generateSortOption({
        label: OrderSortOptionLabel.LineItemsCount,
        value: OrderSortOptionValue.LineItemsCount,
        fieldType: 'number',
      }),
      ...generateSortOption({
        label: OrderSortOptionLabel.CreatedAt,
        value: OrderSortOptionValue.CreatedAt,
        fieldType: 'date',
      }),
      ...generateSortOption({
        label: OrderSortOptionLabel.UpdatedAt,
        value: OrderSortOptionValue.UpdatedAt,
        fieldType: 'date',
      }),
    ],
    [],
  );

  const filters: FilterInterface[] = [
    {
      key: OrderFilterOption.PaymentStatus,
      label: 'Payment status',
      filter: (
        <ChoiceList
          title="Payment status"
          titleHidden
          choices={Object.values(OrderPaymentStatus).map((status) => ({
            label: status,
            value: status,
          }))}
          selected={paymentStatus ? [paymentStatus] : []}
          onChange={handleUpdatePaymentStatus}
        />
      ),
      pinned: true,
    },
    {
      key: OrderFilterOption.FulfillmentStatus,
      label: 'Fulfillment status',
      filter: (
        <ChoiceList
          title="Fulfillment status"
          titleHidden
          choices={Object.values(OrderFulfillmentStatus).map((status) => ({
            label: status,
            value: status,
          }))}
          selected={fulfillmentStatus ? [fulfillmentStatus] : []}
          onChange={handleUpdateFulfillmentStatus}
        />
      ),
      pinned: true,
    },
    {
      key: OrderFilterOption.LineItemsCount,
      label: 'Items count',
      filter: (
        <RangeSlider
          label="Items count"
          labelHidden
          value={lineItemsCount || [0, 10]}
          output
          min={0}
          max={100}
          step={1}
          onChange={handleUpdateLineItemsCount}
        />
      ),
    },
    {
      key: OrderFilterOption.TotalPrice,
      label: 'Total price',
      filter: (
        <RangeSlider
          label="Total price"
          labelHidden
          value={totalPrice || [0, 500]}
          output
          min={0}
          max={10000}
          step={10}
          onChange={handleUpdateTotalPrice}
        />
      ),
    },
  ];

  const appliedFilters = useMemo(() => {
    const filters: IndexFiltersProps['appliedFilters'] = [];

    if (paymentStatus && !isEmpty(paymentStatus)) {
      filters.push({
        key: OrderFilterOption.PaymentStatus,
        label: `Payment status: ${paymentStatus}`,
        onRemove: handleResetPaymentStatus,
      });
    }

    if (fulfillmentStatus && !isEmpty(fulfillmentStatus)) {
      filters.push({
        key: OrderFilterOption.FulfillmentStatus,
        label: `Fulfillment status: ${fulfillmentStatus}`,
        onRemove: handleResetFulfillmentStatus,
      });
    }

    if (lineItemsCount && !isEmpty(lineItemsCount)) {
      filters.push({
        key: OrderFilterOption.LineItemsCount,
        label: `Items count is between ${lineItemsCount[0]} and ${lineItemsCount[1]}`,
        onRemove: handleRemoveLineItemsCount,
      });
    }

    if (totalPrice && !isEmpty(totalPrice)) {
      filters.push({
        key: OrderFilterOption.LineItemsCount,
        label: `Total price is between ${totalPrice[0]} and ${totalPrice[1]}`,
        onRemove: handleRemoveLineItemsCount,
      });
    }

    return filters;
  }, [paymentStatus, fulfillmentStatus, totalPrice, lineItemsCount]);

  useEffect(() => {
    const filterOptions: OrderWhereInput = {
      platform: (tabs[selectedTab]?.content || Platform.Shopify) as Platform,
    };

    if (paymentStatus) {
      filterOptions.paymentStatus = paymentStatus;
    }

    if (fulfillmentStatus) {
      filterOptions.fulfillmentStatus = fulfillmentStatus;
    }

    if (debouncedQuery) {
      filterOptions.OR = [
        {
          name: {
            contains: debouncedQuery,
            mode: 'insensitive',
          },
        },
        {
          customer: {
            contains: debouncedQuery,
            mode: 'insensitive',
          },
        },
      ];
    }

    if (debouncedLineItemsCount && !isEmpty(debouncedLineItemsCount)) {
      filterOptions.lineItemsCount = {
        gte: debouncedLineItemsCount?.[0] ?? 0,
        lte: debouncedLineItemsCount?.[1] ?? 0,
      };
    }

    if (debouncedTotalPrice && !isEmpty(debouncedTotalPrice)) {
      filterOptions.totalPrice = {
        gte: debouncedTotalPrice?.[0] ?? 0,
        lte: debouncedTotalPrice?.[1] ?? 0,
      };
    }

    const [sortBy, direction] = sortSelected?.[0]?.split(' ');

    handleFilterOrders(filterOptions, {
      sortBy,
      direction: direction as Direction,
    });
  }, [
    debouncedQuery,
    currentTab,
    paymentStatus,
    fulfillmentStatus,
    debouncedLineItemsCount,
    debouncedTotalPrice,
    sortSelected,
    pagination?.page,
    pagination?.visibleCount,
  ]);

  useEffect(() => {
    onResetPagination();
  }, [
    debouncedQuery,
    currentTab,
    paymentStatus,
    debouncedLineItemsCount,
    debouncedTotalPrice,
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
        queryPlaceholder="Searching in orders..."
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
        {items.map((order, index) => (
          <OrdersRow
            key={order.id}
            order={order}
            storeDomain={storeDomain}
            index={index}
          />
        ))}
      </IndexTable>
    </>
  );
};
