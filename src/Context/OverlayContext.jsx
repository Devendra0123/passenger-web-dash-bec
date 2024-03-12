import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const OverlayContext = createContext();

export function OverlayProvider({ children }) {
const [overlay, setOverlay] = useState(false)

  
    const value = {
      overlay,setOverlay
    };
    return <OverlayContext.Provider value={value}>{children}</OverlayContext.Provider>;
  }
  
  export const useOverlayContext = () => useContext(OverlayContext);