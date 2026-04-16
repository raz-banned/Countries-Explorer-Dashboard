import { Link } from "react-router";
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
    <div className="p-4 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800">
      <ul className="list-disc pl-5">
        <Link to="/" className="text-blue-500 hover:underline">
          Вернутся
        </Link>
        <li className="my-2">Название: {country.name?.common}</li>
        <li className="my-2">Флаг: {country.flag}</li>
        <li className="my-2">Регион: {country.region}</li>
        <li className="my-2">
          Население: {country.population?.toLocaleString()}
        </li>
        <li className="my-2">
          Валюта:{" "}
          {currency ? `${currency.name} (${currency.symbol})` : "Нет данных"}
        </li>
        <li className="my-2">Язык: {languages}</li>
        <li className="my-2">
          Столица: {country.capital?.join(", ") || "Нет столицы"}
        </li>
      </ul>
    </div>
  );
}

export default CountryInfo;
