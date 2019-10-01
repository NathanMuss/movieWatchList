import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>This is a home screen!</Text>
      <Text> Imagine there are some results here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14
  },
  container: {
    alignItems: "center"
  }
});

export default HomeScreen;
