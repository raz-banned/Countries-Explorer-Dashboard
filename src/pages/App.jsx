import "./App.css";
import { useState } from "react";
import Header from "../Header";
import Main from "../Main";
import { FavoritesProvider } from "../context/FavoritesProvider";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeRegion, setActiveRegion] = useState("");

  return (
    <>
      <FavoritesProvider>
        <Header
          searchQuery={searchQuery}
          onSearch={setSearchQuery}
          onSelect={setActiveRegion}
        />
        <Main searchQuery={searchQuery} activeRegion={activeRegion} />
      </FavoritesProvider>
    </>
  );
}

export default App;
