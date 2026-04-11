import { useFetch } from "./useFetch";

function TestFetch() {
  const fetchResponse = useFetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,currencies",
  );

  const hasError = fetchResponse.error.active ? (
    <p>
      {fetchResponse.error.type} - {fetchResponse.error.message}
    </p>
  ) : (
    fetchResponse.data
  );
  const isLoading = fetchResponse.loading ? <span>Загрузка...</span> : hasError;

  return (
    <div>
      <ul>
        {Array.isArray(isLoading)
          ? isLoading
              .slice(0, 30)
              .map((country) => (
                <ul key={country.capital}>{country.name.common}</ul>
              ))
          : isLoading}
      </ul>
    </div>
  );
}

export default TestFetch;
