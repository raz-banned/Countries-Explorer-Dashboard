import { memo, useState } from "react";
import styles from "./Favorites.module.css";
import FavoriteCard from "./FavoriteCard";
import { useFavorites } from "./hooks/useFavorites";

const Favorites = memo(function Favorites() {
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
      <span className={styles.textLength}>
        Количество: {state.countries.length}
      </span>
    </div>
  );
});

export default Favorites;
