import "./Countries.css";

function CountryCard({ id, country }) {
  return (
    <li className="country-card" id={id}>
      <span>{country.name?.common}</span>
    </li>
  );
}

export default CountryCard;
