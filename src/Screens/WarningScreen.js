// ./screens/Home.js

import {
  faLocation,
  faLocationDot,
  faRoute,
  faSquare,
  faSquareVirus,
  faTemperatureHigh,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
const Warning = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.thong_so}>
        <View style={styles.thong_so_1}>
          <Text
            style={{
              flex: 1.5,
              textAlign: "center",
              alignContent: "center",
              justifyContent: "center",
              fontSize: 80,
              paddingTop: 10,
              color: "#687fe0",
            }}>
            40°C
          </Text>
          <Text
            style={{
              flex: 1.5,
              textAlign: "center",
              fontSize: 70,
              color: "#687fe0",
            }}>
            45 VDC
          </Text>
        </View>
        <View style={styles.thong_so_2}>
          <FontAwesomeIcon icon={faLocationDot} />
          <Text
            style={{
              justifyContent: "flex-end",
              alignItems: "flex-end",
              textAlign: "right",
              fontSize: 15,
              paddingBottom: 20,
            }}>
            Số 86, đường Nguyễn Sinh Sắc, phường Hoà Minh, Liên Chiểu, Đà Nẵng
          </Text>
        </View>
      </View>
      <View style={styles.center}>
        <TouchableOpacity style={styles.appButtonContainer}>
          <FontAwesomeIcon icon={faTemperatureHigh} />
          <Text onPress={() => navigation.navigate("WaterA")}>
            Nhiệt độ nước
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.appButtonContainer}>
          <FontAwesomeIcon icon={faSquareVirus} />
          <Text onPress={() => navigation.navigate("DienAp")}>Điện áp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.appButtonContainer}>
          <FontAwesomeIcon icon={faRoute} />
          <Text onPress={() => navigation.navigate("Distance")}>
            Khoảng cách
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  thong_so: {
    width: "90%",
    height: 250,
    backgroundColor: "#e4f5ff",
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    top: 100,
    borderRadius: 15,
  },
  thong_so_1: {
    flex: 3,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "transparent",
  },
  thong_so_2: {
    flex: 2,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
  },
  center: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#6699FF",
    borderRadius: 20,
    width: 150,
    height: 50,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    margin: 25,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

export default Warning;
