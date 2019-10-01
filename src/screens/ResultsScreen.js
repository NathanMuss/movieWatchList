import React, { useState, useEffect } from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import ResultList from "../components/ResultList";
import omdb from "../api/omdb";

const ResultsScreen = ({ navigation }) => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  // TODO: extract all of this logic into a hook
  const getResults = async searchTerm => {
    if (!searchTerm) {
      setErrorMessage("You need to provide a search term!");
    } else {
      try {
        const response = await omdb.get("", {
          params: {
            s: searchTerm
          }
        });
        setResults(response.data.Search);
      } catch (err) {
        console.log(err);
        setErrorMessage("Something went wrong with the OMDB API call");
      }
    }
  };
  useEffect(() => {
    getResults(navigation.state.params.query);
  }, []);
  return (
    <ScrollView style={styles.container}>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ResultList results={results} navigation={navigation} />
    </ScrollView>
  );
};

ResultsScreen.navigationOptions = {
  // TODO: Make this a button that goes to home page
  headerRight: <Text>Home</Text>,
  headerTitle: "Results"
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15
  }
});

export default ResultsScreen;
