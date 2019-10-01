import React from "react";
import { Button } from "react-native";
import { withNavigation } from "react-navigation";

const HomeButton = ({ navigation }) => {
  return <Button title="Home" onPress={() => navigation.navigate("Home")} />;
};

export default withNavigation(HomeButton);
