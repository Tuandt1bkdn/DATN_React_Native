// ./screens/About.js

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Location = () => {
  return (
    <View style={styles.center}>
      <Text>This is the Location screen</Text>
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

export default Location;
