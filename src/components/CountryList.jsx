import { useFetch } from "../hooks/useFetch";
import Loading from "./LoadingState";
import Error from "./ErrorMessage";
import "./Countries.css";

function CountryList() {
  const countries = useFetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,currencies,cca3",
  );

  const isLoading = !!countries.loading && <Loading />;
  const hasError = !!countries.error.active && (
    <Error type={countries.error.type} message={countries.error.message} />
  );

  return (
    hasError ||
    isLoading || (
      <div>
        <ul className="countries-container">
          {countries.data.slice(0, 35).map((country) => (
            <li className="country-card" key={country?.cca3}>
              <span>{country.name?.common}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  );
}

export default CountryList;
