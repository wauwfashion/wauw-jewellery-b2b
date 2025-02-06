import { useEffect, FC, useState, useRef, useCallback, useId } from 'react';
import { TextField, TextFieldProps } from '@shopify/polaris';

import { Maskito, MaskitoElement, MaskitoOptions } from '@maskito/core';
import { maskitoNumberOptionsGenerator } from '@maskito/kit';
import { MaskModel } from '@maskito/core/src/lib/classes';

export const generateMaskitoOptions = (
  maxAmount: number,
  customPostprocessors: ((elementState: any) => any)[] = [],
): MaskitoOptions => {
  const decimals = 2;
  const decimalSeparator = '.';
  const decimalZeros = '0'.repeat(decimals);

  const numberMaskOptions = maskitoNumberOptionsGenerator({
    decimalZeroPadding: true,
    precision: decimals,
    decimalSeparator,
    min: 0,
    max: maxAmount,
    decimalPseudoSeparators: [','],
  });

  return {
    ...numberMaskOptions,
    preprocessors: [
      ...numberMaskOptions.preprocessors,
      handleEmptyInput(decimalZeros),
      prependZero(decimalSeparator),
      trimLeadingZero(decimalSeparator),
      replaceDecimalDigit(decimalSeparator, decimalZeros),
    ],
    postprocessors: [
      ...customPostprocessors,
      ...numberMaskOptions.postprocessors,
    ],
  };
};

const handleEmptyInput =
  (decimalZeros: string) =>
  ({ elementState, data }: any) => ({
    elementState: elementState.value
      ? elementState
      : { selection: [0, 0], value: `0.${decimalZeros}` },
    data,
  });

const prependZero =
  (decimalSeparator: string) =>
  ({ elementState, data }: any) =>
    elementState.value.startsWith(decimalSeparator) && !data
      ? {
          elementState: { selection: [0, 0], value: `0${elementState.value}` },
          data: '',
        }
      : { elementState, data };

const trimLeadingZero =
  (decimalSeparator: string) =>
  ({ elementState, data }: any) => {
    const zeroWithSeparator =
      elementState.value.startsWith('0') &&
      elementState.value[1] === decimalSeparator;

    return zeroWithSeparator && elementState.selection[1] <= 1 && data
      ? {
          elementState: {
            selection: [0, 0],
            value: elementState.value.substring(1),
          },
          data,
        }
      : { elementState, data };
  };

const replaceDecimalDigit =
  (decimalSeparator: string, decimalZeros: string) =>
  ({ elementState, data }: any) => {
    if (!data) return { elementState, data };

    const [num, dec] = elementState.value.split(decimalSeparator);
    const start = Math.max(...elementState.selection) - num.length - 1;

    if (start < 0 || dec.length === 0) return { elementState, data };

    const newDec = [...decimalZeros].map((_, i) =>
      i === start ? data : dec[i] || '',
    );
    const newValue = `${num}${decimalSeparator}${newDec.join('')}`;

    return { elementState: { ...elementState, value: newValue }, data };
  };

export const PriceInput: FC<TextFieldProps> = ({
  id = '',
  value,
  onBlur,
  onChange,
  ...props
}) => {
  const price = useRef(value || '0.00');
  const inputId = useId();

  useEffect(() => {
    const inputElement = document.getElementById(inputId);

    const maskitoOptions = generateMaskitoOptions(1_000_000, [
      (elementState) => {
        price.current = elementState.value;
      },
    ]);

    if (inputElement) {
      new Maskito(inputElement as MaskitoElement, maskitoOptions);
    }
  }, [inputId]);

  const handleOnBlur = useCallback(() => {
    onBlur?.();
    onChange?.(price.current, inputId);
  }, [inputId]);

  return (
    <TextField
      {...props}
      value={value || '0.00'}
      onChange={onChange}
      onBlur={handleOnBlur}
      autoComplete="off"
      id={inputId}
    />
  );
};

export default PriceInput;
