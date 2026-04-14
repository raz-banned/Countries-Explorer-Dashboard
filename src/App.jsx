import "./App.css";
import { FavoritesProvider } from "./context/FavoritesProvider";
import Layout from "./pages/Layout";
import CountryList from "./CountryList";

function App() {
  return (
    <>
      <FavoritesProvider>
        <Layout>
          <CountryList />
        </Layout>
      </FavoritesProvider>
    </>
  );
}

export default App;
