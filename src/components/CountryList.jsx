import { useFetch } from "../hooks/useFetch";
import Loading from "./LoadingState";
import Error from "./ErrorMessage";
import { useDebounce } from "../hooks/useDebounce";
import CountryCard from "./CountryCard";
import styles from "./CountryList.module.css";
import { useMemo } from "react";

function CountryList({ searchQuery, activeRegion }) {
  const { data, error, loading } = useFetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,currencies,cca3,region,flag,population",
  );
  const debouncedValue = useDebounce(searchQuery, 500);

  const isLoading = !!loading && <Loading />;
  const hasError = !!error.active && (
    <Error type={error.type} message={error.message} />
  );

  const sortByRegion = useMemo(
    () =>
      activeRegion && activeRegion !== "default"
        ? data.filter((country) =>
            country.region.toLowerCase().includes(activeRegion.toLowerCase()),
          )
        : data,
    [activeRegion, data],
  );
  const countries = useMemo(
    () =>
      debouncedValue
        ? sortByRegion.filter((country) =>
            country.name.common
              .toLowerCase()
              .includes(debouncedValue.toLowerCase()),
          )
        : sortByRegion,
    [debouncedValue, sortByRegion],
  );

  return (
    hasError ||
    isLoading || (
      <div>
        <ul className={styles.list}>
          {countries.slice(0, 35).map((country) => (
            <CountryCard key={country?.cca3} country={country} />
          ))}
        </ul>
      </div>
    )
  );
}

export default CountryList;
