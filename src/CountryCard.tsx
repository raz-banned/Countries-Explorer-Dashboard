import { Link } from 'react-router';
import { Button } from './components/ui/button';
import { useFavorites } from './hooks/useFavorites';
import type { Country } from './types/country';

function CountryCard({ country }: { country: Country }) {
  const { countries, dispatch } = useFavorites();

  console.log(countries);

  return (
    <li className="flex flex-col items-start p-4 border rounded-lg shadow-sm gap-1 bg-violet-100">
      <span className="font-bold text-gray-900">{country.name?.common}</span>
      {countries.find(
        (currentCountry) => currentCountry.cca3 === country.cca3
      ) ? (
        <Button
          variant="destructive"
          onClick={() =>
            dispatch({
              type: 'REMOVE_FAVORITE',
              payload: {
                cca3: country.cca3,
              },
            })
          }
        >
          Удалить
        </Button>
      ) : (
        <Button
          variant="secondary"
          className="bg-violet-200"
          onClick={() =>
            dispatch({
              type: 'ADD_FAVORITE',
              payload: country,
            })
          }
        >
          В избранные
        </Button>
      )}
      <Button asChild variant="link">
        <Link
          to={`/country/${country?.cca3}`}
          className="mt-2 text-blue-500 hover:underline"
        >
          Подробнее
        </Link>
      </Button>
    </li>
  );
}

export default CountryCard;
