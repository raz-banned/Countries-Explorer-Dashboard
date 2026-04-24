import { useState } from "react";
import { Outlet } from "react-router";
import ActiveRegionContext from "./context/ActiveRegionContext";
import SearchContext from "./context/SearchContext";
import Header from "./Header";

function Layout() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeRegion, setActiveRegion] = useState("");

  return (
    <>
      <SearchContext value={{ searchQuery, setSearchQuery }}>
        <ActiveRegionContext value={{ activeRegion, setActiveRegion }}>
          <Header />
          <main>
            <Outlet />
          </main>
        </ActiveRegionContext>
      </SearchContext>
    </>
  );
}

export default Layout;
