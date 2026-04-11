import { useState } from "react";

export function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initial;
    } catch (err) {
      console.log(`Не валидный json ${err}`);
      return initial;
    }
  });

  const update = (item) => {
    localStorage.setItem(key, JSON.stringify(item));
    setValue(item);
  };

  return [value, update];
}
