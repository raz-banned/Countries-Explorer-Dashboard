import "./Region.css";

function Dropdown({ onSelect }) {
  const handleSwitch = (region) => onSelect(region);
  return (
    <select name="region" className="dropdown">
      <option value="default">Default</option>
      <option value="Africa" onChange={() => handleSwitch("Africa")}>
        Africa
      </option>
      <option value="Americas" onChange={() => handleSwitch("Americas")}>
        Americas
      </option>
      <option value="Asia" onChange={() => handleSwitch("Asia")}>
        Asia
      </option>
      <option value="Europe" onChange={() => handleSwitch("Europe")}>
        Europe
      </option>
      <option value="Oceania" onChange={() => handleSwitch("Oceania")}>
        Oceania
      </option>
    </select>
  );
}

export default Dropdown;
