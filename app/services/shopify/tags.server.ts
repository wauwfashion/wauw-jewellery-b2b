import { AdminApiContextWithoutRest } from 'node_modules/@shopify/shopify-app-remix/dist/ts/server/clients';

import { handleGraphqlThrottle } from '@/utils/graphql-throttle-handler';
import { ShopifyQueryCost } from '@/services/shopify/types';
import { PageInfo } from '@/types';

export async function retrieveChunkOfProductTags(
  graphqlClient: AdminApiContextWithoutRest['graphql'],
  first: number,
  afterCursor?: string,
): Promise<{
  productTags: { nodes: string[]; pageInfo: PageInfo };
  cost: ShopifyQueryCost;
}> {
  const res = await graphqlClient(
    `#graphql
      query ProductTags($first: Int!, $afterCursor: String) {
        productTags(first: $first, after: $afterCursor) {
          nodes
          pageInfo {
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
          }
        }
      }
    `,
    {
      variables: {
        first,
        afterCursor,
      },
    },
  );

  const { data, extensions } = (await res.json()) as {
    data: { productTags: { nodes: string[]; pageInfo: PageInfo } };
    extensions: {
      cost: ShopifyQueryCost;
    };
  };

  return {
    productTags: data.productTags,
    cost: extensions.cost,
  };
}

export async function retrieveAllProductTags(
  graphqlClient: AdminApiContextWithoutRest['graphql'],
): Promise<string[]> {
  const limit = 100;
  let afterCursor: string | undefined = undefined;
  let hasNextPage = true;
  let productTagsData: string[] = [];

  while (hasNextPage) {
    const { productTags, cost } = await retrieveChunkOfProductTags(
      graphqlClient,
      limit,
      afterCursor,
    );

    const { nodes, pageInfo } = productTags;

    productTagsData = [...productTagsData, ...nodes];

    hasNextPage = pageInfo.hasNextPage;
    afterCursor = hasNextPage ? pageInfo.endCursor : '';

    await handleGraphqlThrottle({
      requestedQueryCost: cost.requestedQueryCost,
      currentlyAvailable: cost.throttleStatus.currentlyAvailable,
      maximumAvailable: cost.throttleStatus.maximumAvailable,
      restoreRate: cost.throttleStatus.restoreRate,
    });
  }

  return productTagsData;
}
