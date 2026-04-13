import styles from "./SearchBar.module.css";

function SearchBar({ searchQuery, onSearch }) {
  return (
    <div className={styles.container}>
      <input
        type="text"
        onChange={(e) => onSearch(e.target.value)}
        value={searchQuery}
        className={styles.search}
      />
    </div>
  );
}

export default SearchBar;
