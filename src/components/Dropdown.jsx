import { useState } from "react";
import "./Region.css";

function Dropdown() {
  const [activeRegion, setActiveRegion] = useState("");

  const handleSwitch = (region) => {
    setActiveRegion(region);
  };

  return (
    <select name="region" className="dropdown">
      <option value="default">Default</option>
      <option value="Africa" onClick={() => handleSwitch("Africa")}>
        Africa
      </option>
      <option value="Americas" onClick={() => handleSwitch("Americas")}>
        Americas
      </option>
      <option value="Asia" onClick={() => handleSwitch("Asia")}>
        Asia
      </option>
      <option value="Europe" onClick={() => handleSwitch("Europe")}>
        Europe
      </option>
      <option value="Oceania" onClick={() => handleSwitch("Oceania")}>
        Oceania
      </option>
    </select>
  );
}

export default Dropdown;
