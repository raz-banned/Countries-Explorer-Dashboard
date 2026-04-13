import "./Header.css";
import SearchBar from "./components/SearchBar";
import Dropdown from "./components/Dropdown";

function Header({ searchQuery, onSearch, onSelect }) {
  return (
    <header>
      <div>
        <h1>🌍 Countries Explorer Dashboard</h1>
        <p>
          Приложение для исследования стран мира — поиск, фильтрация, избранное,
          детальная страница каждой страны.
        </p>
        <div className="controls">
          <SearchBar searchQuery={searchQuery} onSearch={onSearch} />
          <Dropdown onSelect={onSelect} />
        </div>
      </div>
    </header>
  );
}

export default Header;
