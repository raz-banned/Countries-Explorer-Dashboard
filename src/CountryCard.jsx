import { Link } from "react-router";
import styles from "./CountryCard.module.css";
import { useFavorites } from "./hooks/useFavorites";

function CountryCard({ country }) {
  const { state, dispatch } = useFavorites();

  return (
    <li className={styles.item}>
      <span>{country.name?.common}</span>

      {state.countries.find(
        (currentCountry) => currentCountry?.cca3 === country?.cca3,
      ) ? (
        <button
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
      <Link to={`/country/${country?.cca3}`} className={styles.detailsLink}>
        Подробнее
      </Link>
    </li>
  );
}

export default CountryCard;
