import "./App.css";
import Header from "../Header";
import Main from "../Main";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Main />
    </>
  );
}

export default App;
