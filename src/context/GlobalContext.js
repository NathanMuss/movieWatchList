import React, { createContext, useState, useEffect } from "react";
import { AsyncStorage } from "react-native";
const MOVIES_KEY = "STORED_MOVIES";
const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [savedMovies, setSavedMovies] = useState([]);
  async function setup() {
    try {
      const storedMovies = await AsyncStorage.getItem(MOVIES_KEY);
      if (storedMovies !== null) {
        const restoredArray = JSON.parse(storedMovies);
        setSavedMovies(restoredArray);
      } else {
        try {
          await AsyncStorage.setItem(MOVIES_KEY, "[]");
        } catch (err) {
          console.error("Error initializing empty movies store");
          console.error(err);
        }
      }
    } catch (err) {
      console.error("Error retrieving movies store");
      console.error(err);
    }
  }

  const updateSavedMovies = async newMoviesArray => {
    setSavedMovies(newMoviesArray);
    try {
      AsyncStorage.setItem(MOVIES_KEY, JSON.stringify(newMoviesArray));
    } catch (err) {
      console.error("Error setting saved movies list");
      console.error(err);
    }
  };

  // First time through, check for storedMovies, save them to context if the key exists, or create the key if it doesn't exist.
  useEffect(() => {
    setup();
  }, []);

  return (
    <GlobalContext.Provider value={{ savedMovies, updateSavedMovies }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
