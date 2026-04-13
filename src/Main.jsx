import CountryList from "./components/CountryList";

function Main({ searchQuery }) {
  return (
    <main>
      <CountryList searchQuery={searchQuery} />
    </main>
  );
}

export default Main;
