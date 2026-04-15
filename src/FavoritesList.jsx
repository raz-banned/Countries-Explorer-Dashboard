import styles from "./FavoritesList.module.css";
import { useFavorites } from "./hooks/useFavorites";
import FavoriteCard from "./FavoriteCard";

function FavoritesList() {
  const { state } = useFavorites();

  return (
    <ul className={styles.list}>
      {state.countries.map((country) => (
        <FavoriteCard key={country?.cca3} country={country} />
      ))}
    </ul>
  );
}

export default FavoritesList;
