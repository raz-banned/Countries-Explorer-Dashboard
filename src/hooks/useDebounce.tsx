import { useEffect, useState } from 'react';

export function useDebounce<T>(value: T, delay: number) {
  const [text, setText] = useState<T>(value);

  useEffect(() => {
    const debounceId = setTimeout(() => setText(value), delay);

    return () => clearTimeout(debounceId);
  }, [delay, value]);

  return text;
}
