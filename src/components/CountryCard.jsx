import "./Countries.css";

function CountryCard({ key, country }) {
  return (
    <li className="country-card" key={key}>
      <span>{country.name?.common}</span>
    </li>
  );
}

export default CountryCard;
