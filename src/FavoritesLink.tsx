import { memo, useState } from 'react';
import { Link } from 'react-router';
import { useFavorites } from './hooks/useFavorites';
import { Button } from './components/ui/button';

const FavoritesLink = memo(function Favorites() {
  const [onFavorites, setOnFavorites] = useState(false);
  const { countries } = useFavorites();

  return (
    <div className="flex items-center gap-4">
      {onFavorites ? (
        <Button asChild variant="link">
          <Link
            to="/"
            className="text-blue-500 hover:text-blue-700  "
            onClick={() => setOnFavorites((prev) => !prev)}
          >
            Обратно
          </Link>
        </Button>
      ) : (
        <Button asChild variant="link">
          <Link
            to="/favorites"
            className="text-blue-500 hover:text-blue-700  "
            onClick={() => setOnFavorites((prev) => !prev)}
          >
            Перейти к любимым
          </Link>
        </Button>
      )}
      <span className="text-neutral-500 dark:text-gray-300 text-sm">
        Количество в избранных: {countries.length}
      </span>
    </div>
  );
});

export default FavoritesLink;
