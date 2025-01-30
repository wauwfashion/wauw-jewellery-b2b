import { FC, useMemo } from 'react';
import { Jsonify } from '@remix-run/server-runtime/dist/jsonify';
import { IndexTable, Link, List, Text, Tooltip, Badge } from '@shopify/polaris';

import { PaginatedProducts } from '@/api/products/types';
import { firstUpperCase, truncate } from '@/utils/string-utils';
import { ProductStatus } from '@/types';
import { statusBadgeProgress } from '@/constants';

type Props = {
  product: Jsonify<PaginatedProducts['products']>[number];
  index: number;
  serialNumber: number;
};

export const ProductRow: FC<Props> = ({ product, serialNumber, index }) => {
  const {
    id,
    productId,
    title,
    totalInventory,
    status,
    category,
    tags,
    createdAt,
    updatedAt,
  } = product;

  const productLink = useMemo(() => `/app/products/${productId}`, [productId]);

  const titleData = useMemo(
    () =>
      title?.length >= 25 ? (
        <Tooltip content={<Text as="span">{title}</Text>} hasUnderline>
          <Link removeUnderline url={productLink}>
            {truncate(title, 25)}
          </Link>
        </Tooltip>
      ) : (
        <Link removeUnderline url={productLink}>
          {title}
        </Link>
      ),
    [title, productLink],
  );

  const categoryData = useMemo(() => {
    if (!category) {
      return '-';
    }

    return category?.length >= 25 ? (
      <Tooltip content={<Text as="span">{category}</Text>} hasUnderline>
        <Text as="span">{truncate(category, 25)}</Text>
      </Tooltip>
    ) : (
      <Text as="span">{category}</Text>
    );
  }, [title, productLink]);

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

  const productStatus = useMemo(() => status || ProductStatus.ACTIVE, [status]);

  return (
    <IndexTable.Row id={id} key={id} position={index}>
      <IndexTable.Cell>
        <Text variant="bodyMd" fontWeight="bold" as="span">
          # {serialNumber}
        </Text>
      </IndexTable.Cell>
      <IndexTable.Cell>{titleData}</IndexTable.Cell>
      <IndexTable.Cell>{totalInventory}</IndexTable.Cell>
      <IndexTable.Cell>
        <Badge tone={statusBadgeProgress[productStatus]}>
          {firstUpperCase(productStatus)}
        </Badge>
      </IndexTable.Cell>
      <IndexTable.Cell>{categoryData}</IndexTable.Cell>
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
