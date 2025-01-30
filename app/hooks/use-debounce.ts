import { useCallback, useEffect, useState } from 'react';
import _ from 'lodash';

export const useDebounce = <T>(initValue: T, delay = 300) => {
  const [value, setValue] = useState(initValue);
  const [debouncedValue, setDebouncedValue] = useState(initValue);

  const debouncedUpdate = useCallback(
    _.debounce((newValue: T) => {
      setDebouncedValue(newValue);
    }, delay),
    [delay],
  );

  const updateValue = (newValue: T) => {
    setValue(newValue);
    debouncedUpdate(newValue);
  };

  useEffect(() => {
    return () => {
      debouncedUpdate.cancel();
    };
  }, [debouncedUpdate]);

  return { value, debouncedValue, setValue: updateValue };
};
