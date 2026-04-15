import { useEffect, useState } from "react";

const initialValue = {
  data: [],
  loading: true,
  error: { active: false, type: "", message: "" },
};

export function useFetch(url) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    let isMounted = true;
    setValue(initialValue);

    const fetchCountries = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          if (res.status >= 400 && res.status < 500) {
            throw new Error(
              `${res.status}. Ошибка клиента, проверьте url или данные. `,
            );
          } else if (res.status >= 500) {
            throw new Error(
              `${res.status}. Ошибка сервера, попробуйте подождать и вернутся позже. `,
            );
          } else {
            throw new Error(`Ошибка: ${res.status}`);
          }
        }
        if (!isMounted) return;
        const data = await res.json();
        console.log("data successfully fetched");
        const countries = Array.isArray(data) ? data : [data];
        setValue((prev) => ({
          ...prev,
          data: countries,
          loading: false,
        }));
      } catch (e) {
        if (!isMounted) return;
        setValue((prev) => ({
          ...prev,
          loading: false,
          error: { active: true, type: e.name, message: e.message },
        }));
      }
    };
    fetchCountries();

    return () => (isMounted = false);
  }, [url]);
  return value;
}
