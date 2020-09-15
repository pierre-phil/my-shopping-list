import React, { useState, useEffect, createContext } from "react";

export const ModeContext = createContext();

const ModeContextProvider = ({ children }) => {
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");
  // || "light" pour que le localStorage ne soit pas undefined s'il est vierge
  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);
  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeContextProvider;
