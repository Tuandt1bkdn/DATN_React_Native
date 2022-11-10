import React from "react";
import { View, Button, Image, Text, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTemperatureDown } from "@fortawesome/free-solid-svg-icons";

const DienAp = () => {
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
              fontSize: 40,
              paddingBottom: 10,
            }}>
            220 VDC
          </Text>
          <FontAwesomeIcon
            icon={faTemperatureDown}
            style={{ fontSize: 20, paddingTop: 20 }}
          />
          <Text style={{ fontSize: 20 }}>Điện Áp</Text>
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

export default DienAp;
