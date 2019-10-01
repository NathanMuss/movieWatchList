import React, { useEffect } from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import ResultList from "../components/ResultList";
import useMovieSearch from "../hooks/useMovieSearch";
import HomeButton from "../components/HomeButton";

const ResultsScreen = ({ navigation }) => {
  const [getResults, results, errorMessage] = useMovieSearch();
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
  headerRight: <HomeButton />,
  headerTitle: "Results"
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15
  }
});

export default ResultsScreen;
