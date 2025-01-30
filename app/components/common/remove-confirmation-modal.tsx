import { FC } from 'react';
import { Button, Text, Modal, Frame } from '@shopify/polaris';

interface Props {
  isOpen: boolean;
  isLoading: boolean;
  onAction: () => Promise<void>;
  onClose: () => void;
  resourceName: string;
  sourceName: string;
}

export const RemoveConfirmationModal: FC<Props> = ({
  isOpen,
  onClose,
  isLoading,
  onAction,
  sourceName,
  resourceName,
}) => {
  return (
    <Modal
      primaryAction={{
        onAction,
        content: 'Delete',
        destructive: true,
        loading: isLoading,
        disabled: isLoading,
      }}
      secondaryActions={[
        {
          onAction: onClose,
          content: 'Cancel',
          disabled: isLoading,
        },
      ]}
      title={`Delete ${sourceName}?`}
      onClose={onClose}
      open={isOpen}
    >
      <Modal.Section>
        <Text as="p" variant="bodyMd">
          Are you sure you want to remove this {resourceName}? If you delete it,
          this can't be undone.
        </Text>
      </Modal.Section>
    </Modal>
  );
};
