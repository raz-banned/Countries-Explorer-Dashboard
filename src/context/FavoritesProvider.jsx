import { useEffect, useReducer } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import FavoritesContext from "./FavoritesContext";

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAVORITE": {
      return {
        ...state,
        countries: [...state.countries, action.payload?.country],
      };
    }
    case "REMOVE_FAVORITE": {
      return {
        ...state,
        countries: state.countries.filter(
          (country) => country?.cca3 !== action.payload?.cca3,
        ),
      };
    }
    default:
      return state;
  }
};

const initialState = {
  countries: [],
};

export function FavoritesProvider({ children }) {
  const [storage, setStorage] = useLocalStorage("favorites", initialState);
  const [state, dispatch] = useReducer(favoritesReducer, storage);

  useEffect(() => {
    setStorage(state);
  }, [setStorage, state]);

  return (
    <FavoritesContext value={{ state, dispatch }}>{children}</FavoritesContext>
  );
}
