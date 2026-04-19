import { Link } from "react-router";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "./components/ui/card";
import { Separator } from "./components/ui/separator";
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
    <div className="container p-4 flex justify-center">
      <Card className="w-full md:w-1/2 lg:w-1/3 mx-auto mt-8">
        <CardHeader className="flex flex-col items-center gap-4">
          <Button asChild variant="link">
            <Link to="/">Вернутся</Link>
          </Button>
          <CardTitle>Название: {country.name?.common}</CardTitle>
          <CardDescription>Флаг: {country.flag}</CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="grid gap-3 grid-cols-2 place-items-center list-none">
          <li>Регион: {country.region}</li>
          <li>Население: {country.population?.toLocaleString()}</li>
          <li>
            Валюта:
            {currency ? ` ${currency.name} (${currency.symbol})` : "Нет данных"}
          </li>
          <li>Язык: {languages}</li>
        </CardContent>
        <CardFooter className="flex justify-center list-none">
          <li>Столица: {country.capital?.join(", ") || "Нет столицы"}</li>
        </CardFooter>
      </Card>
    </div>
  );
}

export default CountryInfo;
