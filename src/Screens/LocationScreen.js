// ./screens/About.js

import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import Map from "../Components/Layout/Map";

const Location = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <TouchableOpacity style={styles.appButtonContainer}>
        <Text
          style={styles.appButtonText}
          onPress={() => navigation.navigate("LocationMap")}>
          Kiểm tra
        </Text>
      </TouchableOpacity>
      <View>
        <Text>Toạ độ vị trí hiện tại: </Text>
      </View>
      <Map />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "white",
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#6699FF",
    borderRadius: 10,
    width: 130,
    height: 40,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    top: 40,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

export default Location;
