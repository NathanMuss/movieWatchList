import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";

const SearchBar = ({ navigation }) => {
  const [query, setQuery] = useState("");
  const handleSubmit = () => {
    navigation.push("Results", { query });
  };

  return (
    <View style={styles.container}>
      <EvilIcons name="search" style={styles.icon} />
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search"
        value={query}
        onChangeText={setQuery}
        onEndEditing={handleSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0EEEE",
    height: 40,
    flexDirection: "row",
    flex: 1,
    marginRight: 0,
    borderRadius: 4
  },
  icon: {
    fontSize: 40,
    alignSelf: "center",
    marginHorizontal: 5
  },
  input: {
    flex: 1,
    fontSize: 18
  }
});

export default withNavigation(SearchBar);
