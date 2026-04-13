import { useState } from "react";
import styles from "./Favorites.module.css";
import { useFavorites } from "../hooks/useFavorites";
import FavoriteCard from "./FavoriteCard";

function Favorites() {
  const [isShown, setIsShown] = useState(false);
  const { state } = useFavorites();

  return (
    <div className={styles.container}>
      <button
        className={styles.add}
        onClick={() => setIsShown((prev) => !prev)}
      >
        Показать любимые
      </button>
      {isShown && (
        <ul className={styles.list}>
          {state.countries.map((country) => (
            <FavoriteCard key={country?.cca3} country={country} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favorites;
