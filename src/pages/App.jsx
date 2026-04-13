import "./App.css";
import Header from "../Header";
import Main from "../Main";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeRegion, setActiveRegion] = useState("");

  return (
    <>
      <Header
        searchQuery={searchQuery}
        onSearch={setSearchQuery}
        onSelect={setActiveRegion}
      />
      <Main searchQuery={searchQuery} activeRegion={activeRegion} />
    </>
  );
}

export default App;
