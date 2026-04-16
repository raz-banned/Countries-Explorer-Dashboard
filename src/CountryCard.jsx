import { Link } from "react-router";
import { useFavorites } from "./hooks/useFavorites";

function CountryCard({ country }) {
  const { state, dispatch } = useFavorites();

  return (
    <li className="flex flex-col items-start p-4 border rounded-lg shadow-sm">
      <span className="font-bold text-gray-900">{country.name?.common}</span>
      {state.countries.find(
        (currentCountry) => currentCountry?.cca3 === country?.cca3,
      ) ? (
        <button
          className="mt-auto py-2 px-4 bg-red-500 text-white border-0 rounded-1 cursor-pointer h-10 hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed focus:outline-0 shadow-xs focus:shadow-red-700 active:bg-red-800 active:inset-shadow-sm active:shadow-black  "
          onClick={() =>
            dispatch({
              type: "REMOVE_FAVORITE",
              payload: {
                cca3: country?.cca3,
              },
            })
          }
        >
          Удалить
        </button>
      ) : (
        <button
          className="mt-auto py-2 px-4 bg-green-500 text-white border-0 rounded-1 cursor-pointer h-10 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed focus:outline-0 shadow-xs focus:shadow-green-700 active:bg-green-800 active:inset-shadow-sm active:shadow-black  "
          onClick={() =>
            dispatch({
              type: "ADD_FAVORITE",
              payload: { country },
            })
          }
        >
          В избранные
        </button>
      )}
      <Link
        to={`/country/${country?.cca3}`}
        className="mt-2 text-blue-500 hover:underline"
      >
        Подробнее
      </Link>
    </li>
  );
}

export default CountryCard;
