// ./screens/About.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Search = () => {
  return (
    <View style={styles.center}>
      <Text>This is the Search screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Search;
