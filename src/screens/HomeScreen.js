import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { GlobalContext } from "../context/GlobalContext";
const HomeScreen = () => {
  const { saved } = useContext(GlobalContext);
  return (
    <View style={styles.container}>
      <Text>{saved.test}</Text>
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
