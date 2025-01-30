import { IndexFiltersProps } from '@shopify/polaris';

import {
  Direction,
  DirectionDate,
  DirectionLabel,
  DirectionNumber,
  DirectionString,
} from '@/types';

type SortOption = NonNullable<IndexFiltersProps['sortOptions']>[number];

const FIELD_TYPE = ['string', 'number', 'date', 'default'] as const;

type FieldType = (typeof FIELD_TYPE)[number];

type Params = Omit<SortOption, 'directionLabel' | 'value'> & {
  fieldType?: FieldType;
  value: string;
};

export function generateSortOption({
  label,
  value,
  disabled,
  fieldType = 'default',
}: Params) {
  const direction = {
    string: DirectionString,
    number: DirectionNumber,
    date: DirectionDate,
    default: DirectionLabel,
  }[fieldType];

  const sortOption: SortOption[] = [
    {
      label,
      value: `${value} ${Direction.Ascending}`,
      disabled,
      directionLabel: direction.Ascending,
    },
    {
      label,
      value: `${value} ${Direction.Descending}`,
      disabled,
      directionLabel: direction.Descending,
    },
  ];

  return sortOption;
}
