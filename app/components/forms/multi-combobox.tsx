import { useState, useCallback, FC, useMemo } from 'react';
import {
  InlineStack,
  Tag,
  Listbox,
  Combobox,
  Icon,
  BlockStack,
} from '@shopify/polaris';
import { SearchIcon } from '@shopify/polaris-icons';

import { firstUpperCase } from '@/utils/string-utils';

export interface OptionItem {
  label: string;
  value: string;
}

interface Props {
  items: OptionItem[];
  resourceLabel: string;
  selectedItems: OptionItem[];
  onChangeSelectedItems: (value: string[]) => void;
}

export const MultiCombobox: FC<Props> = ({
  items,
  selectedItems,
  onChangeSelectedItems,
  resourceLabel,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState(items);

  const selectedItemsList = useMemo(
    () => selectedItems.map((item) => item.value),
    [selectedItems],
  );

  const escapeSpecialRegExCharacters = useCallback(
    (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
    [],
  );

  const updateText = useCallback(
    (value: string) => {
      setInputValue(value);

      if (!value) {
        setOptions(items);
        return;
      }

      const filterRegex = new RegExp(escapeSpecialRegExCharacters(value), 'i');
      const resultOptions = items.filter((option) =>
        option.label.match(filterRegex),
      );
      setOptions(resultOptions);
    },
    [items, escapeSpecialRegExCharacters],
  );

  const updateSelection = useCallback(
    (selected: string) => {
      if (selectedItemsList.includes(selected)) {
        onChangeSelectedItems(
          selectedItemsList.filter((option) => option !== selected),
        );
      } else {
        onChangeSelectedItems([...selectedItemsList, selected]);
      }

      updateText('');
    },
    [selectedItemsList, updateText],
  );

  const removeTag = useCallback(
    (tag: string) => () => {
      const options = [...selectedItemsList];
      options.splice(options.indexOf(tag), 1);
      onChangeSelectedItems(options);
    },
    [selectedItemsList],
  );

  const tagsMarkup = selectedItems.map((option) => (
    <Tag key={`option-${option.value}`} onRemove={removeTag(option.value)}>
      {option.label}
    </Tag>
  ));

  const optionsMarkup =
    options?.length > 0
      ? options.map(({ label, value }) => {
          return (
            <Listbox.Option
              key={value}
              value={value}
              selected={selectedItemsList.includes(value)}
              accessibilityLabel={label}
            >
              {label}
            </Listbox.Option>
          );
        })
      : null;

  return (
    <>
      <Combobox
        allowMultiple
        willLoadMoreOptions
        activator={
          <Combobox.TextField
            prefix={<Icon source={SearchIcon} />}
            onChange={updateText}
            label={firstUpperCase(resourceLabel)}
            value={inputValue}
            autoComplete="off"
          />
        }
      >
        {optionsMarkup ? (
          <Listbox onSelect={updateSelection}>{optionsMarkup}</Listbox>
        ) : null}
      </Combobox>
      <BlockStack gap="200">
        <InlineStack gap="200">{tagsMarkup}</InlineStack>
      </BlockStack>
    </>
  );
};
