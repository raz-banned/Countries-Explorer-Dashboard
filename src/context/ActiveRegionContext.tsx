import { createContext, type Dispatch, type SetStateAction } from 'react';

const ActiveRegionContext = createContext<{
  activeRegion: string;
  setActiveRegion: Dispatch<SetStateAction<string>>;
} | null>(null);

export default ActiveRegionContext;
