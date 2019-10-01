import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const Result = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.Poster }} style={styles.poster} />
      <Text>{item.Title}</Text>
      <Text>{item.Year}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  poster: {
    flex: 1,
    marginHorizontal: 10,
    width: Math.round(Dimensions.get("window").width - 20),
    height: Math.round(Dimensions.get("window").height / 2),
    resizeMode: "stretch"
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginBottom: 10
  }
});

export default Result;
