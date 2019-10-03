import React, { useContext } from "react";
import { Button, AsyncStorage } from "react-native";
import { GlobalContext } from "../context/GlobalContext";

const RemoveButton = ({ details }) => {
  const { savedMovies, updateSavedMovies } = useContext(GlobalContext);
  const removeFromWatchlist = movie => {
    const newSavedMovies = savedMovies.filter(savedMovie => {
      return savedMovie.imdbID !== movie.imdbID;
    });
    updateSavedMovies(newSavedMovies);
  };
  return (
    <Button
      title="Remove from Watchlist"
      color="red"
      onPress={() => removeFromWatchlist(details)}
    />
  );
};

export default RemoveButton;
