// ./screens/Home.js

import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const Warning = () => {
  return (
    <View style={styles.center}>
      <Text>This is the Warning screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    top: 50,
    width: "100%",
    height: "100%",
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Warning;
