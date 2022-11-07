import * as React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { View, Text, StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const Latitude_Delta = 0.07;
const Longitude_Delta = Latitude_Delta * ASPECT_RATIO;
const Init_Position = {
  latitude: 16.047079,
  longitude: 108.20623,
  latitudeDelta: Latitude_Delta,
  longitudeDelta: Longitude_Delta,
};

const Search = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={Init_Position}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 400,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
export default Search;
