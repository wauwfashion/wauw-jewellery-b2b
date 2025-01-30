import { FC } from 'react';
import { Card, EmptyState, Page } from '@shopify/polaris';

interface Props {
  createNewProductUrl: string;
  disableBackAction?: boolean;
}

export const EmptyProductsPage: FC<Props> = ({
  disableBackAction = false,
  createNewProductUrl,
}) => {
  return (
    <Page
      fullWidth
      title="Products"
      backAction={
        !disableBackAction ? { url: '/app', content: 'Products' } : undefined
      }
    >
      <Card>
        <EmptyState
          heading="Manage your products"
          action={{
            content: 'Add product',
            url: createNewProductUrl,
            target: '_blank',
          }}
          secondaryAction={{
            content: 'Learn more',
            url: 'https://help.shopify.com',
            target: '_blank',
          }}
          image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
        >
          <p>Track and receive your products.</p>
        </EmptyState>
      </Card>
    </Page>
  );
};
