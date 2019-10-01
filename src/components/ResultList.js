import React from "react";
import { View, FlatList } from "react-native";
import Result from "./Result";

const ResultList = ({ results }) => {
  _renderItem = ({ item }) => {
    return <Result item={item} />;
  };
  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={item => {
          return item.imdbID;
        }}
        renderItem={_renderItem}
      />
    </View>
  );
};

export default ResultList;
