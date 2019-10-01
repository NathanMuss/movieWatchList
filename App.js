import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "./src/screens/HomeScreen";
import ResultsScreen from "./src/screens/ResultsScreen";
import DetailScreen from "./src/screens/DetailScreen";
import SearchBar from "./src/components/SearchBar";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Results: ResultsScreen,
    Detail: DetailScreen
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
