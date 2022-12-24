import React from "react";
import { View, Text, StyleSheet } from "react-native";

function DriverInfoRow({ data }) {
  return (
    <View style={styles.driver_info}>
      <View style={styles.wrap}>
        <Text
          style={{
            fontSize: 15,
            fontFamily: "OpenSans_600SemiBold",
          }}>
          Mã tài xế
        </Text>
        <Text>{data.iddriver}</Text>
      </View>
      <View style={styles.wrap}>
        <Text
          style={{
            fontSize: 15,
            fontFamily: "OpenSans_600SemiBold",
          }}>
          Tên xe
        </Text>
        <Text>{data.car}</Text>
      </View>
      <View style={styles.wrap}>
        <Text
          style={{
            fontSize: 15,
            fontFamily: "OpenSans_600SemiBold",
          }}>
          Số chỗ ngồi
        </Text>
        <Text>{data.seat}</Text>
      </View>
      <View style={styles.wrap}>
        <Text
          style={{
            fontSize: 15,
            fontFamily: "OpenSans_600SemiBold",
          }}>
          Biển số
        </Text>
        <Text>{data.platenumber}</Text>
      </View>
      <View style={styles.wrap}>
        <Text
          style={{
            fontSize: 15,
            fontFamily: "OpenSans_600SemiBold",
          }}>
          Ngày thuê
        </Text>
        <Text>{data.rentdate}</Text>
      </View>
      <View style={styles.wrap}>
        <Text
          style={{
            fontSize: 15,
            fontFamily: "OpenSans_600SemiBold",
          }}>
          Loại hình thuê
        </Text>
        <Text>{data.renttype}</Text>
      </View>
      <View style={styles.wrap}>
        <Text
          style={{
            fontSize: 15,
            fontFamily: "OpenSans_600SemiBold",
          }}>
          Trạng thái
        </Text>
        <Text>{data.state}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  driver_info: {
    width: "100%",
    height: 500,
    flexDirection: "column",
    alignItems: "flex-end",
  },
  wrap: {
    width: "96%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomColor: "#e6e6e6",
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
});
export default DriverInfoRow;
