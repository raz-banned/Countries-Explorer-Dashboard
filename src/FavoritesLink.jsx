import { memo, useState } from "react";
import styles from "./FavoritesLink.module.css";
import { Link } from "react-router";
import { useFavorites } from "./hooks/useFavorites";

const FavoritesLink = memo(function Favorites() {
  const [onFavorites, setOnFavorites] = useState(false);
  const { state } = useFavorites();

  return (
    <div className={styles.container}>
      {onFavorites ? (
        <Link
          to="/"
          className={styles.pageLink}
          onClick={() => setOnFavorites((prev) => !prev)}
        >
          Обратно
        </Link>
      ) : (
        <Link
          to="/favorites"
          className={styles.pageLink}
          onClick={() => setOnFavorites((prev) => !prev)}
        >
          Перейти к любимым
        </Link>
      )}
      <span className={styles.textLength}>
        Количество в избранных: {state.countries.length}
      </span>
    </div>
  );
});

export default FavoritesLink;
