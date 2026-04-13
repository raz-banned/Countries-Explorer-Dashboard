import "./Region.css";

function Dropdown({ onSelect }) {
  const handleSwitch = (region) => onSelect(region);

  return (
    <select
      name="region"
      className="dropdown"
      onChange={(e) => handleSwitch(e.target.value)}
    >
      <option value="default">Default</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}

export default Dropdown;
