import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  StatusBar,
  SafeAreaView,
} from "react-native";
import DriverInfoRow from "../Components/Layout/DriverInfoRow";
import { useState, useEffect } from "react";
import { DriverManage } from "../API/services/getData";

const UserScreen = () => {
  const [driver1, setDriver1] = useState({});

  useEffect(() => {
    DriverManage()
      .then((res) => {
        setDriver1(res.data[4]);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <SafeAreaView style={styles.wrap}>
      <ScrollView>
        {!driver1 ? (
          <Text>Khong co du lieu</Text>
        ) : (
          <View style={styles.center}>
            <View style={styles.header}>
              <ImageBackground
                style={styles.header_background}
                resizeMode="cover"
                source={{
                  uri: "https://img.freepik.com/premium-vector/cartoon-flat-family-characters-rent-car_189557-1065.jpg",
                }}>
                <View style={styles.header_avatar_wrap}>
                  <View style={styles.header_avatar}>
                    <Image
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 50,
                      }}
                      source={{
                        uri: "https://i.pinimg.com/736x/bb/1f/9c/bb1f9c30bc815087d52d1e5e86cde219.jpg",
                      }}
                    />
                  </View>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.content}>
              <View style={styles.name_phone}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "OpenSans_700Bold",
                  }}>
                  {driver1.name}
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    color: "#808080",
                  }}>
                  {driver1.phone}
                </Text>
              </View>
              <Text
                style={{
                  padding: 15,
                  color: "#808080",
                  fontSize: 13,
                  fontFamily: "OpenSans_500Medium",
                }}>
                THÔNG TIN XE
              </Text>
              <DriverInfoRow data={driver1} />
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: "white",
    top: StatusBar.currentHeight,
  },
  center: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    minHeight: 1500,
    backgroundColor: "white",
  },
  header: {
    top: StatusBar.currentHeight,
    width: "100%",
    height: 280,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  header_background: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
  },
  header_avatar_wrap: {
    height: 90,
    width: 90,
    backgroundColor: "white",
    fontSize: 20,
    color: "white",
    top: 230,
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  header_avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: "#ccc",
  },
  content: {
    width: "100%",
    minHeight: "90%",
    top: 70,
  },
  name_phone: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: 50,
    backgroundColor: "white",
    fontSize: 20,
  },
  driver_info: {
    width: "100%",
    height: 500,
    flexDirection: "column",
    alignItems: "flex-end",
    backgroundColor: "red",
  },
  driver_info_row: {
    width: "96%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 10,
  },
});

export default UserScreen;
