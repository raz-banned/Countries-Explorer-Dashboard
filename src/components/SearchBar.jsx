import "./Search.css";

function SearchBar({ searchQuery, onSearch }) {
  return (
    <div className="search">
      <input
        type="text"
        onChange={(e) => onSearch(e.target.value)}
        value={searchQuery}
      />
    </div>
  );
}

export default SearchBar;
