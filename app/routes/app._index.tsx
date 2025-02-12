import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useTransition,
} from 'react';
import type { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import { useFetcher, useLoaderData } from '@remix-run/react';
import { Page, Card, Spinner, Box } from '@shopify/polaris';
import {
  RefreshIcon,
  TransactionIcon,
  LayoutRows2Icon,
} from '@shopify/polaris-icons';
import { useAppBridge } from '@shopify/app-bridge-react';

import { authenticate } from '@/shopify.server';
import * as shopifyProductsService from '@/services/shopify/products.server';
import { syncProducts } from '@/services/sync-products.server';
import { seedProducts } from '@/services/seed-products.server';
import { seedOrders } from '@/services/seed-orders.server';
import { handleApiResponse } from '@/utils/api-response-handler';
import { createNewProductUrl } from '@/utils/create-new-product-url';
import { getPaginatedProducts } from '@/api/products';
import { SortOptions } from '@/api/products/types';
import { ProductsTable } from '@/components/products';
import { EmptyProductsPage } from '@/components/common';
import {
  Direction,
  Platform,
  PlatformProductWhereInput,
  ProductSortOptionValue,
} from '@/types';
import prisma from '@/db.server';
import { retrieveAllOrders } from '@/services/orderchamp/orders.server';

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
        const productData = await getPaginatedProducts(shop, {
          filter: { platform: Platform.Shopify },
          pagination: { limit: 10, skip: 0 },
        });

        return {
          totalCount: productData?.totalCount || 0,
          products: productData?.products || [],
          createNewProductUrl: createNewProductUrl(shop),
        };
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

      const shopifyProducts = await shopifyProductsService.retrieveAllProducts(
        admin.graphql,
      );

      await shopifyProductsService.importShopifyProducts(shopifyProducts, shop);

      await seedProducts(shop);
      await seedOrders(shop);

      const productData = await getPaginatedProducts(shop, {
        filter: { platform: Platform.Shopify },
        pagination: { limit: 10, skip: 0 },
      });

      return {
        totalCount: productData?.totalCount || 0,
        products: productData?.products || [],
        createNewProductUrl: createNewProductUrl(shop),
      };
    },
    {
      onSuccess: {
        message: 'Products successfully received.',
        responseInitParams: {
          status: 200,
        },
      },
      onError: {
        message: 'Error occurred while sync products.',
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
      const { session, admin } = await authenticate.admin(request);
      const { shop } = session;

      const { limit, skip, filterOptions, sortOptions, syncProductsType } = {
        ...Object.fromEntries(await request.formData()),
      };

      const parsedFilterOptions = filterOptions
        ? JSON.parse(filterOptions as string)
        : {};

      const parsedSortOptions: SortOptions = sortOptions
        ? JSON.parse(sortOptions as string)
        : {
            sortBy: ProductSortOptionValue.UpdatedAt,
            direction: Direction.Descending,
          };

      if (syncProductsType) {
        await syncProducts(
          admin.graphql,
          shop,
          syncProductsType as 'full' | 'part',
        );
      }

      const productData = await getPaginatedProducts(shop, {
        filter: parsedFilterOptions,
        pagination: { limit: Number(limit), skip: Number(skip) },
        sort: parsedSortOptions,
      });

      return {
        totalCount: productData?.totalCount || 0,
        products: productData?.products || [],
        createNewProductUrl: createNewProductUrl(shop),
      };
    },
    {
      onSuccess: {
        message: 'Products successfully received.',
        responseInitParams: {
          status: 200,
        },
      },
      onError: {
        message: 'Error occurred while receiving products.',
        responseInitParams: {
          status: 500,
        },
      },
    },
  );

  return response;
};

const VISIBLE_ITEMS_OPTIONS = [10, 25, 50, 100];

export default function ProductsPage() {
  const appBridge = useAppBridge();
  const { data: actionData, submit, state } = useFetcher<typeof action>();
  const loaderData = useLoaderData<typeof loader>();
  const [productsSyncType, setProductsSyncType] = useState<
    'part' | 'full' | null
  >(null);
  const [isPending, startTransition] = useTransition();
  const [firstLoading, setFirstLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(10);
  const [page, setPage] = useState(1);
  const [sortFilterModel, setSortFilterModel] = useState<{
    sortOptions: string;
    filterOptions: string;
  }>({ sortOptions: '', filterOptions: '' });

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

  useEffect(() => {
    console.log({ loaderData });
  }, [loaderData]);

  const onNextPage = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, []);

  const onPrevPage = useCallback(() => {
    setPage((prevPage) => prevPage - 1);
  }, []);

  const pagination = useMemo(() => {
    if (!preparedData?.data || !preparedData?.data?.products?.length) {
      return null;
    }

    const { totalCount } = preparedData.data;

    const hasNextPage = visibleCount * page < totalCount;

    return {
      page,
      visibleCount,
      hasNext: hasNextPage && !isLoading,
      hasPrevious: page > 1 && !isLoading,
      onNext: onNextPage,
      onPrevious: onPrevPage,
    };
  }, [preparedData, visibleCount, page, isLoading]);

  const handleFilterProducts = useCallback(
    async (
      filterOptions: PlatformProductWhereInput,
      sortOptions: SortOptions,
    ) => {
      setSortFilterModel({
        filterOptions: JSON.stringify(filterOptions),
        sortOptions: JSON.stringify(sortOptions),
      });

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

  const handleSyncProducts = useCallback(() => {
    if (!appBridge.config.shop) {
      return;
    }

    startTransition(() => {
      setProductsSyncType('part');
      submit(
        {
          limit: visibleCount,
          skip: (page - 1) * visibleCount,
          syncProductsType: 'part',
          ...sortFilterModel,
        },
        { method: 'POST' },
      );
    });
  }, [visibleCount, page, sortFilterModel]);

  const handleFullSyncProducts = useCallback(() => {
    startTransition(() => {
      submit(
        {
          limit: visibleCount,
          skip: (page - 1) * visibleCount,
          syncProductsType: 'full',
          ...sortFilterModel,
        },
        { method: 'POST' },
      );
      setProductsSyncType('full');
    });
  }, [visibleCount, page, sortFilterModel]);

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

    if (productsSyncType && !isLoading) {
      const message = preparedData?.success
        ? 'Products successfully synchronized.'
        : 'Something went wrong during products synchronization.';

      appBridge.toast.show(message, {
        isError: !preparedData?.success,
      });

      setProductsSyncType(null);
    }
  }, [preparedData, firstLoading, productsSyncType, isLoading]);

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

  if (!preparedData?.data?.products || !preparedData?.success) {
    return (
      <EmptyProductsPage
        disableBackAction
        createNewProductUrl={preparedData?.data?.createNewProductUrl!}
      />
    );
  }

  return (
    <Page
      title="Products"
      fullWidth
      secondaryActions={[
        {
          content: 'Full Sync Products',
          helpText: 'Synchronization of all products',
          accessibilityLabel: 'Full Sync Products action label',
          icon: TransactionIcon,
          disabled: isLoading,
          loading: isLoading && productsSyncType === 'full',
          onAction: handleFullSyncProducts,
        },
        {
          content: 'Sync Products',
          helpText:
            'Synchronization of products that were created after the last synchronization',
          accessibilityLabel: 'Full Sync Products action label',
          icon: RefreshIcon,
          disabled: isLoading,
          loading: isLoading && productsSyncType === 'part',
          onAction: handleSyncProducts,
        },
      ]}
      actionGroups={[
        {
          icon: LayoutRows2Icon,
          title: `${visibleCount} visible products`,
          actions: VISIBLE_ITEMS_OPTIONS.map((count) => ({
            content: `${String(count)} products`,
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
        <ProductsTable
          items={preparedData?.data?.products}
          totalCount={preparedData?.data?.totalCount}
          pagination={pagination}
          isLoading={isLoading}
          handleFilterProducts={handleFilterProducts}
          onResetPagination={onResetPagination}
        />
      </Card>
    </Page>
  );
}
