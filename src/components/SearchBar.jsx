import "./Search.css";

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="search">
      <input
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
      />
    </div>
  );
}

export default SearchBar;
