import { useEffect, useState } from "react";

export function useDebounce(value, delay) {
  const [text, setText] = useState("");

  useEffect(() => {
    const debounceId = setTimeout(() => setText(value), delay);

    return () => clearTimeout(debounceId);
  }, [delay, value]);

  return text;
}
