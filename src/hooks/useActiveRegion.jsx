import { useContext } from "react";
import ActiveRegionContext from "../context/ActiveRegionContext";

export const useActiveRegion = () => {
  const context = useContext(ActiveRegionContext);
  if (!context) {
    throw new Error("useActiveRegion must be used inside ActiveRegionContext");
  }
  return context;
};
