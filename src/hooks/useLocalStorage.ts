import React from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storageValue, setStorageValue] = React.useState(() => {
    const savedName = localStorage.getItem(key);
    return savedName ? JSON.parse(savedName) : initialValue;
  });

  const setValue = (value: T) => {
    setStorageValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [storageValue, setValue] as const;
}
