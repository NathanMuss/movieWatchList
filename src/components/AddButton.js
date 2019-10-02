import React, { useContext } from "react";
import { Button } from "react-native";
import { GlobalContext } from "../context/GlobalContext";

const AddButton = ({ details }) => {
  const { savedMovies, setSavedMovies } = useContext(GlobalContext);
  const addToWatchlist = movie => {
    const newSavedMovies = [...savedMovies];
    newSavedMovies.push(movie);
    setSavedMovies(newSavedMovies);
    // TODO: Save to AsyncStorage
  };
  return (
    <Button title="Add to Watchlist" onPress={() => addToWatchlist(details)} />
  );
};

export default AddButton;
