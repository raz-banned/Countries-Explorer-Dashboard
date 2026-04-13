import styles from "./Header.module.css";
import SearchBar from "./components/SearchBar";
import Dropdown from "./components/Dropdown";
import Favorites from "./components/Favorites";

function Header({ searchQuery, onSearch, onSelect }) {
  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.title}>🌍 Countries Explorer Dashboard</h1>
        <p>
          Приложение для исследования стран мира — поиск, фильтрация, избранное,
          детальная страница каждой страны.
        </p>
        <div className={styles.controls}>
          <SearchBar searchQuery={searchQuery} onSearch={onSearch} />
          <Dropdown onSelect={onSelect} />
          <Favorites />
        </div>
      </div>
    </header>
  );
}

export default Header;
