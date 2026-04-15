import { Route, Routes } from "react-router";
import "./App.css";
import { FavoritesProvider } from "./context/FavoritesProvider";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import CountryPage from "./pages/CountryPage";

function App() {
  return (
    <>
      <FavoritesProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/country/:code" element={<CountryPage />} />
          </Route>
        </Routes>
      </FavoritesProvider>
    </>
  );
}

export default App;
