import { useFavorites } from './hooks/useFavorites';
import FavoriteCard from './FavoriteCard';

function FavoritesList() {
  const { countries } = useFavorites();

  return (
    <ul className="list-none flex flex-col gap-4 ">
      {countries.map((country) => (
        <FavoriteCard key={country?.cca3} country={country} />
      ))}
    </ul>
  );
}

export default FavoritesList;
