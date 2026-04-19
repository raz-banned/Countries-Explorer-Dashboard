import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectLabel,
  SelectGroup,
} from "./components/ui/select";
import { useActiveRegion } from "./hooks/useActiveRegion";

function Dropdown() {
  const { activeRegion, setActiveRegion } = useActiveRegion();

  return (
    <Select onValueChange={setActiveRegion} value={activeRegion}>
      <SelectTrigger className="w-full max-w-48 bg-neutral-300">
        <SelectValue placeholder="Фильтр региона" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Регионы</SelectLabel>
          <SelectItem value="default">Умолчанию</SelectItem>
          <SelectItem value="Africa">Africa</SelectItem>
          <SelectItem value="Americas">Americas</SelectItem>
          <SelectItem value="Asia">Asia</SelectItem>
          <SelectItem value="Europe">Europe</SelectItem>
          <SelectItem value="Oceania">Oceania</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default Dropdown;
