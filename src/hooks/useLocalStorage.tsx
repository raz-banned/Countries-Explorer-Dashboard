import { useCallback, useState } from 'react';

export function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initial;
    } catch (err) {
      console.log(`Не валидный json ${err}`);
      return initial;
    }
  });

  const update = useCallback(
    (item: T) => {
      localStorage.setItem(key, JSON.stringify(item));
      setValue(item);
    },
    [key]
  );

  return [value, update] as const;
}
