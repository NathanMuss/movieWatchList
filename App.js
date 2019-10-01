import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "./src/screens/HomeScreen";
import SearchBar from "./src/components/SearchBar";

const navigator = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerTitle: <SearchBar />
    }
  }
);

const Container = createAppContainer(navigator);

export default Container;
