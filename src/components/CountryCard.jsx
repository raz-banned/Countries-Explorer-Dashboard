import "./Countries.css";

function CountryCard({ country }) {
  return (
    <li className="country-card" key={country?.cca3}>
      <span>{country.name?.common}</span>
    </li>
  );
}

export default CountryCard;
