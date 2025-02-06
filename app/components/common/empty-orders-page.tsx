import { FC } from 'react';
import { Card, EmptyState, Page } from '@shopify/polaris';

interface Props {
  disableBackAction?: boolean;
}

export const EmptyOrdersPage: FC<Props> = ({ disableBackAction = false }) => {
  return (
    <Page
      fullWidth
      title="Products"
      backAction={
        !disableBackAction ? { url: '/app', content: 'Orders' } : undefined
      }
    >
      <Card>
        <EmptyState
          heading="Manage your orders"
          action={{
            content: 'Learn more about orders',
            url: 'https://help.shopify.com/en/manual/fulfillment/index',
            target: '_blank',
          }}
          secondaryAction={{
            content: 'Learn more',
            url: 'https://help.shopify.com',
            target: '_blank',
          }}
          image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
        >
          <p>Track and receive your orders.</p>
        </EmptyState>
      </Card>
    </Page>
  );
};
