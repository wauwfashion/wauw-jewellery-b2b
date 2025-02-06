import { getPaginatedOrders } from '@/api/orders/get-paginated-orders';
import { SortOptions } from '@/api/orders/types';
import { EmptyOrdersPage } from '@/components/common';
import { OrdersTable } from '@/components/orders';
import { seedOrders } from '@/services/seed-orders.server';
import { authenticate } from '@/shopify.server';
import {
  Direction,
  OrderSortOptionValue,
  OrderWhereInput,
  Platform,
} from '@/types';
import { handleApiResponse } from '@/utils/api-response-handler';
import { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import { useFetcher, useLoaderData } from '@remix-run/react';
import { useAppBridge } from '@shopify/app-bridge-react';
import { Box, Card, Page, Spinner } from '@shopify/polaris';
import { LayoutRows2Icon } from '@shopify/polaris-icons';
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useTransition,
} from 'react';
import prisma from '@/db.server';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const response = await handleApiResponse(
    async () => {
      const { admin, session } = await authenticate.admin(request);
      const { shop, accessToken } = session;

      const store = await prisma.store.findFirst({
        where: {
          domain: shop,
        },
      });

      if (store) {
        const ordersData = await getPaginatedOrders({
          filter: { platform: Platform.Shopify },
          pagination: { limit: 10, skip: 0 },
        });

        return ordersData;
      }

      const shopInfoRes = await admin.graphql(`
        #graphql
        query {
          shop {
            currencyCode
          }
        }  
      `);

      const shopInfo = await shopInfoRes.json();

      await prisma.store.create({
        data: {
          domain: shop,
          accessToken: accessToken!,
          currencyCode: shopInfo.data.shop.currencyCode,
        },
      });

      await seedOrders(admin.graphql, shop);

      const ordersData = await getPaginatedOrders({
        filter: { platform: Platform.Shopify },
        pagination: { limit: 10, skip: 0 },
      });

      return ordersData;
    },
    {
      onSuccess: {
        message: 'Orders successfully received.',
        responseInitParams: {
          status: 200,
        },
      },
      onError: {
        message: 'Error occurred while sync orders.',
        responseInitParams: {
          status: 500,
        },
      },
    },
  );

  return response;
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const response = await handleApiResponse(
    async () => {
      const { limit, skip, filterOptions, sortOptions } = {
        ...Object.fromEntries(await request.formData()),
      };

      const parsedFilterOptions = filterOptions
        ? JSON.parse(filterOptions as string)
        : {};

      const parsedSortOptions: SortOptions = sortOptions
        ? JSON.parse(sortOptions as string)
        : {
            sortBy: OrderSortOptionValue.UpdatedAt,
            direction: Direction.Descending,
          };

      const ordersData = await getPaginatedOrders({
        filter: parsedFilterOptions,
        pagination: { limit: Number(limit), skip: Number(skip) },
        sort: parsedSortOptions,
      });

      return ordersData;
    },
    {
      onSuccess: {
        message: 'Orders successfully received.',
        responseInitParams: {
          status: 200,
        },
      },
      onError: {
        message: 'Error occurred while receiving orders.',
        responseInitParams: {
          status: 500,
        },
      },
    },
  );

  return response;
};

const VISIBLE_ITEMS_OPTIONS = [10, 25, 50, 100];

export default function OrdersPage() {
  const appBridge = useAppBridge();
  const { data: actionData, submit, state } = useFetcher<typeof action>();
  const loaderData = useLoaderData<typeof loader>();
  const [isPending, startTransition] = useTransition();
  const [firstLoading, setFirstLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(10);
  const [page, setPage] = useState(1);

  const isLoading = useMemo(
    () => isPending || ['loading', 'submitting'].includes(state),
    [isPending, state],
  );

  const preparedData = useMemo(() => {
    if (!actionData && !loaderData) {
      return null;
    }

    return actionData || loaderData;
  }, [loaderData, actionData]);

  const onNextPage = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, []);

  const onPrevPage = useCallback(() => {
    setPage((prevPage) => prevPage - 1);
  }, []);

  const pagination = useMemo(() => {
    if (!preparedData?.data || !preparedData?.data?.orders?.length) {
      return null;
    }

    const { totalCount } = preparedData.data;

    const hasNextPage = visibleCount * page < totalCount;

    return {
      page,
      visibleCount,
      hasNext: hasNextPage,
      hasPrevious: page > 1,
      onNext: onNextPage,
      onPrevious: onPrevPage,
    };
  }, [preparedData, visibleCount, page]);

  const handleFilterOrders = useCallback(
    async (filterOptions: OrderWhereInput, sortOptions: SortOptions) => {
      startTransition(() => {
        submit(
          {
            limit: visibleCount,
            skip: (page - 1) * visibleCount,
            filterOptions: JSON.stringify(filterOptions),
            sortOptions: JSON.stringify(sortOptions),
          },
          { method: 'POST' },
        );
      });
    },
    [visibleCount, page],
  );

  const onResetPagination = useCallback(() => {
    setPage(1);
  }, []);

  useEffect(() => {
    if (!firstLoading) {
      return;
    }

    setFirstLoading(false);
  }, [preparedData]);

  useEffect(() => {
    if (preparedData?.message && firstLoading) {
      appBridge.toast.show(preparedData?.message, {
        isError: !preparedData.success,
      });
    }
  }, [preparedData, firstLoading, isLoading]);

  if (firstLoading) {
    return (
      <Page fullWidth>
        <Card>
          <Box>
            <div
              style={{
                width: '100%',
                minHeight: '30rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Spinner />
            </div>
          </Box>
        </Card>
      </Page>
    );
  }

  if (!preparedData?.data?.orders || !preparedData?.success) {
    return <EmptyOrdersPage disableBackAction />;
  }

  return (
    <Page
      title="Orders"
      fullWidth
      actionGroups={[
        {
          icon: LayoutRows2Icon,
          title: `${visibleCount} visible orders`,
          actions: VISIBLE_ITEMS_OPTIONS.map((count) => ({
            content: `${String(count)} orders`,
            onAction: () => {
              setVisibleCount(count);
            },
            active: count === visibleCount,
          })),
          disabled: isLoading,
        },
      ]}
    >
      <Card>
        <OrdersTable
          storeDomain={appBridge.config.shop || ''}
          pagination={pagination}
          items={preparedData?.data?.orders}
          totalCount={preparedData?.data?.totalCount}
          isLoading={isLoading}
          handleFilterOrders={handleFilterOrders}
          onResetPagination={onResetPagination}
        />
      </Card>
    </Page>
  );
}
