import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";

const HeaderTitle = ({ navigation }) => {
  const title = navigation.state.routeName;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  header: {
    fontSize: 18
  }
});

export default withNavigation(HeaderTitle);
