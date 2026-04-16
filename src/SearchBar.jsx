function SearchBar({ searchQuery, onSearch }) {
  return (
    <div className="w-full md:w-64">
      <input
        type="text"
        onChange={(e) => onSearch(e.target.value)}
        value={searchQuery}
        className="placeholder-gray-500 dark:*:placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-offset-0 sm:text-sm"
      />
    </div>
  );
}

export default SearchBar;
