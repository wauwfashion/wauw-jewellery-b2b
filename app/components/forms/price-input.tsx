import { useState, FC, useEffect } from 'react';
import { TextField, TextFieldProps } from '@shopify/polaris';

export const PriceInput: FC<TextFieldProps> = ({
  value,
  onChange,
  ...props
}) => {
  const [inputValue, setInputValue] = useState<string>(value || '0.01');

  const handleChange = (value: string) => {
    const regex = /^\d*\.?\d*$/;
    if (regex.test(value)) {
      setInputValue(value);
      onChange && onChange(value, '');
    } else {
      onChange && onChange('0.01', '');
    }
  };

  console.log({ inputValue, value });

  const handleBlur = () => {
    const numericValue = parseFloat(inputValue);
    if (!isNaN(numericValue) && numericValue !== 0) {
      const formatted = numericValue.toFixed(2);
      setInputValue(formatted);
      onChange && onChange(formatted, '');
    } else {
      setInputValue('0.01');
      onChange && onChange('0.01', '');
    }
  };

  return (
    <TextField
      {...props}
      value={inputValue}
      onChange={handleChange}
      onBlur={handleBlur}
      autoComplete="off"
    />
  );
};

export default PriceInput;
