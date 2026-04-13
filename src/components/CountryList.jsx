import { useFetch } from "../hooks/useFetch";
import Loading from "./LoadingState";
import Error from "./ErrorMessage";
import { useDebounce } from "../hooks/useDebounce";
import CountryCard from "./CountryCard";
import "./Countries.css";

function CountryList({ searchQuery }) {
  const { data, error, loading } = useFetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,currencies,cca3,region",
  );
  const debouncedValue = useDebounce(searchQuery, 500);

  const isLoading = !!loading && <Loading />;
  const hasError = !!error.active && (
    <Error type={error.type} message={error.message} />
  );

  const countries = debouncedValue
    ? data.filter((country) =>
        country.name.common
          .toLowerCase()
          .includes(debouncedValue.toLowerCase()),
      )
    : data;

  return (
    hasError ||
    isLoading || (
      <div>
        <ul className="countries-container">
          {countries.slice(0, 35).map((country) => (
            <CountryCard country={country} />
          ))}
        </ul>
      </div>
    )
  );
}

export default CountryList;
