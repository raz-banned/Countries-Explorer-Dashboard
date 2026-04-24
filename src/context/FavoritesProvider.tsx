import { useEffect, useReducer, type ReactElement } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import FavoritesContext from './FavoritesContext';
import type { Country } from '@/types/country';

export type FavoritesAction =
  | { type: 'ADD_FAVORITE'; payload: Country }
  | { type: 'REMOVE_FAVORITE'; payload: { cca3: string } };

const favoritesReducer = (countries: Country[], action: FavoritesAction) => {
  switch (action.type) {
    case 'ADD_FAVORITE': {
      return [...countries, action.payload];
    }
    case 'REMOVE_FAVORITE': {
      return countries.filter(
        (country) => country.cca3 !== action.payload.cca3
      );
    }
    default:
      return countries;
  }
};

export function FavoritesProvider({ children }: { children: ReactElement }) {
  const [storage, setStorage] = useLocalStorage<Country[]>('favorites', []);
  const [countries, dispatch] = useReducer(favoritesReducer, storage);

  useEffect(() => {
    setStorage(countries);
  }, [setStorage, countries]);

  return (
    <FavoritesContext value={{ countries, dispatch }}>
      {children}
    </FavoritesContext>
  );
}
