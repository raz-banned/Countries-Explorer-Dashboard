import styles from "./Header.module.css";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";
import Favorites from "./Favorites";
import { useSearch } from "./hooks/useSearch";
import { useActiveRegion } from "./hooks/useActiveRegion";

function Header() {
  const { searchQuery, setSearchQuery } = useSearch();
  const { setActiveRegion } = useActiveRegion();

  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.title}>🌍 Countries Explorer Dashboard</h1>
        <p>
          Приложение для исследования стран мира — поиск, фильтрация, избранное,
          детальная страница каждой страны.
        </p>
      </div>
      <div className={styles.controls}>
        <SearchBar searchQuery={searchQuery} onSearch={setSearchQuery} />
        <Dropdown onSelect={setActiveRegion} />
        <Favorites />
      </div>
    </header>
  );
}

export default Header;
