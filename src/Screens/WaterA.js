import { faTemperatureQuarter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { View, Button, Text, StyleSheet, Image } from "react-native";
import { RadialGradient } from "react-native-svg";

const WaterA = () => {
  return (
    <View style={styles.center}>
      <Image
        source={{
          uri: "https://help.opendatasoft.com/platform/en/_images/chart-layers-series.png",
        }}
        style={{
          width: "90%",
          height: 200,
          flex: 0.7,
          top: 30,
          borderRadius: 15,
        }}
      />
      <View style={styles.content}>
        <View
          style={{
            flex: 0,
            width: 200,
            height: 200,
            borderRadius: 100,
            backgroundColor: "#d1f06d",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Text
            style={{
              fontSize: 50,
              paddingBottom: 40,
            }}>
            40°C
          </Text>
          <FontAwesomeIcon
            icon={faTemperatureQuarter}
            style={{ fontSize: 20 }}
          />
          <Text style={{ fontSize: 20, paddingBottom: 10 }}>Nhiệt độ nước</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#a9b5f9",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default WaterA;
