import { useFavorites } from "./FavoritesContext";

function TestFavorites() {
  return (
    <div>
      <FavoritesContext value={"test"}>
        <Home />
        <Settings />
      </FavoritesContext>
    </div>
  );
}

function TestFavorites2() {
  return (
    <div>
      <FavoritesProvider>
        <Countries />
      </FavoritesProvider>
    </div>
  );
}

function Countries() {
  const { state, dispatch } = useFavorites();

  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: "ADD_COUNTRY",
            payload: { id: 1, name: { common: "Kazakhstan" } },
          })
        }
      >
        Добавить
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "REMOVE_COUNTRY",
            payload: { name: { common: "Kazakhstan" } },
          })
        }
      >
        Удалить
      </button>
      <ul>
        {state.countries.map((country) => (
          <li key={country.id}>{country.name.common}</li>
        ))}
      </ul>
    </div>
  );
}

export default Countries;
