import { Input } from "./components/ui/input";
import { useSearch } from "./hooks/useSearch";

function SearchBar() {
  const { searchQuery, setSearchQuery } = useSearch();

  return (
    <div className="w-full md:w-64">
      <Input
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
        placeholder="Введите текст"
        className="bg-neutral-300"
      />
    </div>
  );
}

export default SearchBar;
