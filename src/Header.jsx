import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";
import Favorites from "./FavoritesLink";

function Header() {
  return (
    <header className=" mx-auto p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div>
        <h1 className="font-bold text-xl md:text-2xl tracking-tight">
          🌍 Countries Explorer Dashboard
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-1">
          Приложение для исследования стран мира — поиск, фильтрация, избранное,
          детальная страница каждой страны.
        </p>
      </div>
      <div className="flex items-center gap-4 flex-wrap">
        <SearchBar />
        <Dropdown />
        <Favorites />
      </div>
    </header>
  );
}

export default Header;
