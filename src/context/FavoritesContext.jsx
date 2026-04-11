import { createContext, useContext, useReducer } from "react";

const FavoritesContext = createContext(null);

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_COUNTRY":
      return {
        ...state,
        countries: [...state.countries, action.payload],
      };
    case "REMOVE_COUNTRY":
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

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used inside FavoritesProvider");
  }
  return context;
};
