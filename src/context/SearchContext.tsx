import { createContext, type Dispatch, type SetStateAction } from 'react';

const SearchContext = createContext<{
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
} | null>(null);

export default SearchContext;
