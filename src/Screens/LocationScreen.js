import React, { useEffect, useState } from "react";
import MapView, { Marker, Geojson, PROVIDER_GOOGLE } from "react-native-maps";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { getDataNow } from "../API/services/getData";

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const Latitude_Delta = 0.07;
const Longitude_Delta = Latitude_Delta * ASPECT_RATIO;
const Init_Position = {
  latitude: 16.067672,
  longitude: 108.15729,
  latitudeDelta: Latitude_Delta,
  longitudeDelta: Longitude_Delta,
};
const Second_Position = {
  latitude: 16.0781,
  longitude: 108.1515,
  latitudeDelta: Latitude_Delta,
  longitudeDelta: Longitude_Delta,
};
const myPlace = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [64.165329, 48.844287],
      },
    },
  ],
};
const Location = ({ navigation }) => {
  const [lngLatNow, getLngLatNow] = useState({
    latitude: 16.4669,
    longitude: 107.6452,
    latitudeDelta: Latitude_Delta,
    longitudeDelta: Longitude_Delta,
  });
  const [para, getPara] = useState({});
  useEffect(() => {
    setInterval(() => {
      getDataNow()
        .then((res) => {
          const lng = res.data[0].lng;
          const lat = res.data[0].lat;
          getLngLatNow({
            latitude: lat,
            longitude: lng,
            latitudeDelta: Latitude_Delta,
            longitudeDelta: Longitude_Delta,
          });
          getPara(res.data[0]);
        })
        .catch((e) => console.log(e));
    }, 10000);
  }, []);
  //console.log(lngLatNow);
  return (
    <View style={styles.center}>
      <View style={styles.toa_do}>
        <Text style={{ textAlign: "left", backgroundColor: "transparent" }}>
          Toạ độ vị trí lúc : {para.realtimelocal}
        </Text>
        <Text
          style={{
            marginTop: 10,
          }}>
          longitude: {lngLatNow.longitude}, latitude: {lngLatNow.latitude}{" "}
        </Text>
      </View>
      <View style={styles.mapwrap}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={lngLatNow}>
          <Marker coordinate={Init_Position} title="Vi tri xe thu 1" />
          <Marker
            coordinate={lngLatNow}
            title="Vi tri xe luc `${para.realtimelocal}`"
          />
        </MapView>
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
