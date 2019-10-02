import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GlobalContext } from "../context/GlobalContext";
import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultList";

const HomeScreen = () => {
  const { savedMovies } = useContext(GlobalContext);
  return (
    <View style={styles.container}>
      {savedMovies.length ? (
        <ResultList results={savedMovies} />
      ) : (
        <Text style={styles.text}>
          Uh oh, your watchlist is empty! Search up top to add some movies
        </Text>
      )}
    </View>
  );
};

HomeScreen.navigationOptions = {
  headerTitle: <SearchBar />
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: "orange"
  },
  container: {
    alignItems: "center"
  }
});

export default HomeScreen;
