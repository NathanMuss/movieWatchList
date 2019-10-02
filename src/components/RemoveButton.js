import React, { useContext } from "react";
import { Button } from "react-native";
import { GlobalContext } from "../context/GlobalContext";

const RemoveButton = ({ details }) => {
  const { savedMovies, setSavedMovies } = useContext(GlobalContext);
  const removeFromWatchlist = movie => {
    const newSavedMovies = savedMovies.filter(savedMovie => {
      return savedMovie.imdbID !== movie.imdbID;
    });
    setSavedMovies(newSavedMovies);
    // TODO: Remove from AsyncStorage
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
