import { useState } from "react";
import { useDebounce } from "./useDebounce";

function TestDebounce() {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 1000);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
      />
      {debouncedSearch && <p>{debouncedSearch}</p>}
    </div>
  );
}

export default TestDebounce;
