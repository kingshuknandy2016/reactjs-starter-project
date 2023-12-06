import { useEffect, useState } from 'react';

export const getSavedValue = (key: string, initialValue: any) => {
  const storageValue = localStorage.getItem(key);
  const savedValueJson = storageValue ? JSON.parse(storageValue) : undefined;

  // const savedValue = JSON.parse(localStorage.getItem(key) as string);
  // If the key exist
  if (savedValueJson && savedValueJson !== '') {
    return savedValueJson;
  }
  //If key does not exist return initial value
  //If Initial Value is a function
  if (initialValue instanceof Function) {
    return initialValue();
  }
  // Key not exist and initial value not a function
  return initialValue;
};

/**
 * @description Custom hooks for persistance storage of data, by using local storage.
 * It is similar to useState but need tp pass an additional key
 * @param key : The key for the attribute
 * @param initialValue : Initial Value like we pass in the useState
 * @returns
 */
export const useLocalStorage = (key: string, initialValue: string) => {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  // Whenever the value changes we will save value inside local storage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, value]);

  return [value, setValue];
};
