import React, { useContext } from "react";
import { Button, AsyncStorage } from "react-native";
import { GlobalContext } from "../context/GlobalContext";

const AddButton = ({ details }) => {
  const { savedMovies, updateSavedMovies } = useContext(GlobalContext);
  const addToWatchlist = movie => {
    const newSavedMovies = [...savedMovies];
    newSavedMovies.push(movie);
    updateSavedMovies(newSavedMovies);
  };
  return (
    <Button title="Add to Watchlist" onPress={() => addToWatchlist(details)} />
  );
};

export default AddButton;
