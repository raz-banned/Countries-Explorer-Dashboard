import "./Header.css";
import SearchBar from "./components/SearchBar";
import Dropdown from "./components/Dropdown";

function Header({ searchQuery, setSearchQuery }) {
  return (
    <header>
      <div>
        <h1>🌍 Countries Explorer Dashboard</h1>
        <p>
          Приложение для исследования стран мира — поиск, фильтрация, избранное,
          детальная страница каждой страны.
        </p>
        <div className="controls">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <Dropdown />
        </div>
      </div>
    </header>
  );
}

export default Header;
