import React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Dimensions,
} from "react-native";

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
const Location = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <View style={styles.toa_do}>
        <Text style={{ textAlign: "left" }}>Toạ độ vị trí hiện tại: </Text>
      </View>
      <View style={styles.mapwrap}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={Init_Position}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 10,
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "left",
    backgroundColor: "white",
  },
  toa_do: {
    top: 60,
    left: 20,
    flex: 2,
    width: "100%",
    backgroundColor: "white",
  },

  mapwrap: {
    flex: 8,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
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
