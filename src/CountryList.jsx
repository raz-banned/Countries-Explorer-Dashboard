import { useFetch } from "./hooks/useFetch";
import Loading from "./components/LoadingState";
import Error from "./components/ErrorMessage";
import { useDebounce } from "./hooks/useDebounce";
import CountryCard from "./CountryCard";
import { useMemo, useState } from "react";
import { allCountries } from "./api/countries";
import { useActiveRegion } from "./hooks/useActiveRegion";
import { useSearch } from "./hooks/useSearch";

function CountryList() {
  const [shouldSort, setShouldSort] = useState(false);
  const { searchQuery } = useSearch();
  const { activeRegion } = useActiveRegion();

  const { data, error, loading } = useFetch(allCountries());
  const debouncedValue = useDebounce(searchQuery, 500);

  const isLoading = !!loading && <Loading />;
  const hasError = !!error.active && (
    <Error type={error.type} message={error.message} />
  );

  const sortByPopulation = useMemo(
    () =>
      shouldSort
        ? data.toSorted((a, b) => b?.population - a?.population)
        : data,
    [data, shouldSort],
  );
  const sortByRegion = useMemo(
    () =>
      activeRegion && activeRegion !== "default"
        ? sortByPopulation.filter((country) =>
            country.region.toLowerCase().includes(activeRegion.toLowerCase()),
          )
        : sortByPopulation,
    [activeRegion, sortByPopulation],
  );
  const countries = useMemo(
    () =>
      debouncedValue
        ? sortByRegion.filter((country) =>
            country.name?.common
              .toLowerCase()
              .includes(debouncedValue.toLowerCase()),
          )
        : sortByRegion,
    [debouncedValue, sortByRegion],
  );

  const handleSort = () => setShouldSort((prev) => !prev);

  return (
    hasError ||
    isLoading || (
      <div>
        <button
          className="py-2 px-4 bg-indigo-800 text-white border-0 rounded-1 cursor-pointer h-10 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed focus:outline-0 shadow-xs focus:shadow-blue-700 active:bg-blue-800 active:inset-shadow-sm active:shadow-black"
          onClick={handleSort}
        >
          Сортировать по населению
        </button>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 bg-amber-50 p-4 rounded-lg shadow-sm">
          {countries.slice(0, 35).map((country) => (
            <CountryCard key={country?.cca3} country={country} />
          ))}
        </ul>
      </div>
    )
  );
}

export default CountryList;
