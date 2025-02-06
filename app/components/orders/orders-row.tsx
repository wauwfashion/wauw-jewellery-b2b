import { FC, useMemo } from 'react';
import { Jsonify } from '@remix-run/server-runtime/dist/jsonify';
import { IndexTable, Link, List, Text, Tooltip, Badge } from '@shopify/polaris';

import { truncate } from '@/utils/string-utils';
import {
  fulfillmentStatusBadgeProgress,
  paymentStatusBadgeProgress,
} from '@/constants';
import { PaginatedOrders } from '@/api/orders/types';
import { formatPrice } from '@/utils/format-price';

type Props = {
  order: Jsonify<PaginatedOrders['orders']>[number];
  index: number;
  storeDomain: string;
};

export const OrdersRow: FC<Props> = ({ order, index, storeDomain }) => {
  const {
    id,
    customer,
    name,
    lineItemsCount,
    totalPrice,
    fulfillmentStatus,
    paymentStatus,
    sourceUrl,
    tags,
    currencyCode,
    createdAt,
    updatedAt,
  } = order;

  const nameData = useMemo(
    () =>
      name?.length >= 25 ? (
        <Tooltip content={<Text as="span">{name}</Text>} hasUnderline>
          <Link removeUnderline url={sourceUrl}>
            {truncate(name, 25)}
          </Link>
        </Tooltip>
      ) : (
        <Link removeUnderline url={sourceUrl} target="_blank">
          {name}
        </Link>
      ),
    [name, sourceUrl],
  );

  const customerData = useMemo(
    () =>
      customer?.length >= 25 ? (
        <Tooltip content={<Text as="span">{name}</Text>} hasUnderline>
          {truncate(customer, 25)}
        </Tooltip>
      ) : (
        customer
      ),
    [customer],
  );

  const tagsData = useMemo(
    () =>
      (tags?.length < 2 ? (
        tags[0]
      ) : (
        <Tooltip
          content={
            <List>
              {tags.map((tag) => (
                <List.Item key={tag}>{tag}</List.Item>
              ))}
            </List>
          }
          hasUnderline
        >
          <Text as="span">{truncate(tags[0])}</Text>
        </Tooltip>
      )) || '-',
    [],
  );

  return (
    <IndexTable.Row id={id} key={id} position={index}>
      <IndexTable.Cell>
        <Text variant="bodyMd" fontWeight="bold" as="span">
          {nameData}
        </Text>
      </IndexTable.Cell>
      <IndexTable.Cell>{customerData}</IndexTable.Cell>
      <IndexTable.Cell>{lineItemsCount}</IndexTable.Cell>
      <IndexTable.Cell>
        {formatPrice(+totalPrice, currencyCode)}
      </IndexTable.Cell>
      <IndexTable.Cell>
        <Badge
          progress={paymentStatusBadgeProgress[paymentStatus].progress}
          tone={paymentStatusBadgeProgress[paymentStatus].tone}
        >
          {paymentStatus}
        </Badge>
      </IndexTable.Cell>
      <IndexTable.Cell>
        <Badge
          progress={fulfillmentStatusBadgeProgress[fulfillmentStatus].progress}
          tone={fulfillmentStatusBadgeProgress[fulfillmentStatus].tone}
        >
          {fulfillmentStatus}
        </Badge>
      </IndexTable.Cell>
      <IndexTable.Cell>{tagsData}</IndexTable.Cell>
      <IndexTable.Cell>
        {new Date(createdAt).toLocaleDateString()}
      </IndexTable.Cell>
      <IndexTable.Cell>
        {new Date(updatedAt).toLocaleDateString()}
      </IndexTable.Cell>
    </IndexTable.Row>
  );
};
