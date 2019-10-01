import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions
} from "react-native";
import { withNavigation } from "react-navigation";

const Result = ({ item, navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.result}
        onPress={() => {
          navigation.navigate("Detail", { id: item.imdbID });
        }}
      >
        <Image source={{ uri: item.Poster }} style={styles.poster} />
        <Text>{item.Title}</Text>
        <Text>{item.Year}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  poster: {
    flex: 1,
    width: Math.round(Dimensions.get("window").width - 20),
    height: Math.round(Dimensions.get("window").height / 2),
    resizeMode: "stretch"
  },
  container: {
    marginBottom: 10,
    marginHorizontal: 5,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 6
  },
  result: {
    alignItems: "center"
  }
});

export default withNavigation(Result);
