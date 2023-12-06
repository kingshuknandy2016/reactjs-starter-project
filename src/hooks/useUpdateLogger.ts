//Every time a variable changes we want to log the variable into console

import { useEffect } from 'react';

/**
 * @description Custom hook to log a variable into console every time the variable changes.
 * @param value : the value of variable
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useUpdateLogger = (value: any) => {
  useEffect(() => {
    console.log(value);
  }, [value]);
};
