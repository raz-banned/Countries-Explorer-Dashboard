import { useFetch } from './hooks/useFetch';
import Loading from './components/LoadingState';
import Error from './components/ErrorMessage';
import { useDebounce } from './hooks/useDebounce';
import CountryCard from './CountryCard';
import { useMemo, useState } from 'react';
import { allCountries } from './api/countries';
import { useActiveRegion } from './hooks/useActiveRegion';
import { useSearch } from './hooks/useSearch';
import { Button } from './components/ui/button';
import { type Country } from './types/country';

function CountryList() {
  const [shouldSort, setShouldSort] = useState(false);
  const { searchQuery } = useSearch();
  const { activeRegion } = useActiveRegion();

  const { data, error, loading } = useFetch<Country>(allCountries());
  const debouncedValue = useDebounce(searchQuery, 500);

  const isLoading = !!loading && <Loading />;
  const hasError = !!error.active && (
    <Error type={error.type} message={error.message} />
  );

  const sortByPopulation = useMemo(
    () =>
      shouldSort ? data.toSorted((a, b) => b.population - a.population) : data,
    [data, shouldSort]
  );
  const sortByRegion = useMemo(
    () =>
      activeRegion && activeRegion !== 'default'
        ? sortByPopulation.filter((country) =>
            country.region.toLowerCase().includes(activeRegion.toLowerCase())
          )
        : sortByPopulation,
    [activeRegion, sortByPopulation]
  );
  const countries = useMemo(
    () =>
      debouncedValue
        ? sortByRegion.filter((country) =>
            country.name.common
              .toLowerCase()
              .includes(debouncedValue.toLowerCase())
          )
        : sortByRegion,
    [debouncedValue, sortByRegion]
  );

  const handleSort = () => setShouldSort((prev) => !prev);

  return (
    hasError ||
    isLoading || (
      <div>
        <Button size="lg" onClick={handleSort}>
          Сортировать по населению
        </Button>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 bg-violet-100 p-4 rounded-lg shadow-sm">
          {countries.slice(0, 35).map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </ul>
      </div>
    )
  );
}

export default CountryList;
