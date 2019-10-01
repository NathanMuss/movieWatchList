import React, { createContext, useEffect } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const saved = {
    test: "Working",
    savedMovies: []
  };
  useEffect(() => {
    // TODO: Get saved movies from AsyncStorage and add to list
  }, []);

  return (
    <GlobalContext.Provider value={{ saved }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
