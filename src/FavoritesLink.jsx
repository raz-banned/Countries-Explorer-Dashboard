import { memo, useState } from "react";
import { Link } from "react-router";
import { useFavorites } from "./hooks/useFavorites";

const FavoritesLink = memo(function Favorites() {
  const [onFavorites, setOnFavorites] = useState(false);
  const { state } = useFavorites();

  return (
    <div className="flex items-center gap-4">
      {onFavorites ? (
        <Link
          to="/"
          className="text-blue-500 hover:text-blue-700  "
          onClick={() => setOnFavorites((prev) => !prev)}
        >
          Обратно
        </Link>
      ) : (
        <Link
          to="/favorites"
          className="text-blue-500 hover:text-blue-700  "
          onClick={() => setOnFavorites((prev) => !prev)}
        >
          Перейти к любимым
        </Link>
      )}
      <span className="text-gray-700 dark:text-gray-300">
        Количество в избранных: {state.countries.length}
      </span>
    </div>
  );
});

export default FavoritesLink;
