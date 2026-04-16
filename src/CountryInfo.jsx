import { Link } from "react-router";
import styles from "./CountryInfo.module.css";
import { countryByCode } from "./api/countries";
import { useFetch } from "./hooks/useFetch";
import Loading from "./components/LoadingState";
import ErrorMessage from "./components/ErrorMessage";

function CountryInfo({ code }) {
  const { data, loading, error } = useFetch(countryByCode(code));

  if (error.active)
    return <ErrorMessage type={error.type} message={error.message} />;
  if (loading) return <Loading />;

  const country = data[0];

  if (!country) return <p>Страница не найдена</p>;

  const currency = country.currencies
    ? Object.values(country.currencies)[0]
    : null;
  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "Не указано";

  return (
    <ul className={styles.container}>
      <Link to="/" className={styles.backLink}>
        Вернутся
      </Link>
      <li>Название: {country.name?.common}</li>
      <li>Флаг: {country.flag}</li>
      <li>Регион: {country.region}</li>
      <li>Население: {country.population?.toLocaleString()}</li>
      <li>
        Валюта:{" "}
        {currency ? `${currency.name} (${currency.symbol})` : "Нет данных"}
      </li>
      <li>Язык: {languages}</li>
      <li>Столица: {country.capital?.join(", ") || "Нет столицы"}</li>
    </ul>
  );
}

export default CountryInfo;
