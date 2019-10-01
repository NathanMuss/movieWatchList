import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import useMovieDetails from "../hooks/useMovieDetails";
import HomeButton from "../components/HomeButton";

const DetailScreen = ({ navigation }) => {
  const [details, getDetails, errorMessage] = useMovieDetails();

  useEffect(() => {
    getDetails(navigation.state.params.id);
  }, []);

  return errorMessage ? (
    <Text>{errorMessage}</Text>
  ) : (
    <>
      <View style={styles.container}>
        <Image style={styles.poster} source={{ uri: details.Poster }} />
        <Text style={styles.title}>
          {details.Title} ({details.Rated})
        </Text>
        <Text>{details.Year}</Text>
        <Text>
          <Text style={styles.label}>Director(s): </Text>
          {details.Director}
        </Text>
        <Text style={styles.actors}>{details.Actors}</Text>
        <Text style={styles.plot}>
          <Text style={styles.label}>Summary: </Text>
          {details.Plot}
        </Text>
      </View>
    </>
  );
};

DetailScreen.navigationOptions = {
  headerRight: <HomeButton />,
  headerTitle: "Details"
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 5
  },
  poster: {
    width: 300,
    height: 400,
    marginBottom: 15
  },
  title: {
    fontSize: 18,
    fontWeight: "bold"
  },
  plot: {
    marginTop: 10,
    fontSize: 16,
    marginBottom: 5,
    paddingHorizontal: 2,
    marginHorizontal: 2
  },
  actors: {
    fontStyle: "italic",
    fontSize: 16
  },
  label: {
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default DetailScreen;
