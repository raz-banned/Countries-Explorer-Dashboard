import CountryList from "./components/CountryList";

function Main({ searchQuery, activeRegion }) {
  return (
    <main>
      <CountryList searchQuery={searchQuery} activeRegion={activeRegion} />
    </main>
  );
}

export default Main;
