import { Route, Routes } from 'react-router';
import { ErrorBoundary } from 'react-error-boundary';
import { FavoritesProvider } from './context/FavoritesProvider';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import CountryPage from './pages/CountryPage';
import Fallback from './Fallback';
import { Layout } from 'lucide-react';

function App() {
  return (
    <>
      <ErrorBoundary FallbackComponent={Fallback}>
        <FavoritesProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/country/:code" element={<CountryPage />} />
            </Route>
          </Routes>
        </FavoritesProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
