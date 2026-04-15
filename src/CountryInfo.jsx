import { Link } from "react-router";
import styles from "./CountryInfo.module.css";
import { countryByCode } from "./api/countries";
import { useFetch } from "./hooks/useFetch";
import Loading from "./components/LoadingState";
import ErrorMessage from "./components/ErrorMessage";

function CountryInfo({ code }) {
  const { data: country, loading, error } = useFetch(countryByCode(code));

  if (error.active)
    return <ErrorMessage type={error.type} message={error.message} />;
  if (loading) return <Loading />;
  if (!country) return <p>Страница не найдена</p>;

  const currency = country?.currencies
    ? Object.values(country?.currencies)[0]
    : undefined;
  const language = country?.languages
    ? Object.values(country?.languages)[0]
    : undefined;

  return (
    <ul className={styles.container}>
      <Link to="/" className={styles.backLink}>
        Вернутся
      </Link>
      <li>Название: {country?.name?.common}</li>
      <li>Флаг: {country?.flag}</li>
      <li>Регион: {country?.region}</li>
      <li>Население: {country?.population}</li>
      <li>Валюта: {currency?.symbol}</li>
      <li>Язык: {language}</li>
      <li>Столица: {country?.capital}</li>
    </ul>
  );
}

export default CountryInfo;
