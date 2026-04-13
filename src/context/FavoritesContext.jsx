import { createContext, useReducer } from "react";

export const FavoritesContext = createContext(null);

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        countries: [...state.countries, action.payload],
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        countries: state.countries.filter(
          (country) => country?.cca3 !== action.payload?.cca3,
        ),
      };
    default:
      return state;
  }
};

const initialState = { countries: [] };

export function FavoritesProvider({ children }) {
  const [state, dispatch] = useReducer(favoritesReducer, initialState);

  return (
    <FavoritesContext value={{ state, dispatch }}>{children}</FavoritesContext>
  );
}
