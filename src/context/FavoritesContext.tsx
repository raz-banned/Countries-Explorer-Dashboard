import { createContext, type Dispatch } from 'react';
import type { Country } from '@/types/country';
import type { FavoritesAction } from './FavoritesProvider';

interface FavoritesContextType {
  countries: Country[];
  dispatch: Dispatch<FavoritesAction>;
}

const FavoritesContext = createContext<FavoritesContextType | null>(null);

export default FavoritesContext;
