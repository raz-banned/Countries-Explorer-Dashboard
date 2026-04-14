import { useState } from "react";
import Header from "../Header";
import ActiveRegionContext from "../context/ActiveRegionContext";
import SearchContext from "../context/SearchContext";

function Layout({ children }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeRegion, setActiveRegion] = useState("");

  return (
    <>
      <SearchContext value={{ searchQuery, setSearchQuery }}>
        <ActiveRegionContext value={{ activeRegion, setActiveRegion }}>
          <Header />
          <main>{children}</main>
        </ActiveRegionContext>
      </SearchContext>
    </>
  );
}

export default Layout;
