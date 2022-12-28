import React from "react";
import {
  Image,
  View,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import { useState, useEffect } from "react";
import Chart from "../Components/Layout/Chart";
import axios from "axios";
import { getDataNow } from "../API/services/getData";

const Warning = () => {
  const [data, setData] = useState({});
  const [timelabel, setTimelabel] = useState();
  const [time, setTime] = useState();
  const [temp, setTemp] = useState([22, 22, 22, 22, 22]);
  const [voltage, setVoltage] = useState([22, 22, 22, 22, 22]);
  const [speed, setSpeed] = useState([22, 22, 22, 22, 22]);

  useEffect(() => {
    setInterval(() => {
      getDataNow().then((res) => {
        const json = res.data;
        setTimelabel([
          json[4].realtimelocal.substring(0, 8),
          json[3].realtimelocal.substring(0, 8),
          json[2].realtimelocal.substring(0, 8),
          json[1].realtimelocal.substring(0, 8),
          json[0].realtimelocal.substring(0, 8),
        ]);
        setTime(json[0].realtimelocal);
        setTemp([
          json[4].temp,
          json[3].temp,
          json[2].temp,
          json[1].temp,
          json[0].temp,
        ]);
        setVoltage([
          json[4].voltage,
          json[3].voltage,
          json[2].voltage,
          json[1].voltage,
          json[0].voltage,
        ]);
        setSpeed([
          json[4].speed,
          json[3].speed,
          json[2].speed,
          json[1].speed,
          json[0].speed,
        ]);
        setData(json[0]);
      });
    }, 5000);
  }, []);

  return (
    <SafeAreaView style={styles.containerview}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {!data ? (
          <Text>Khong co du lieu</Text>
        ) : (
          <View style={styles.container}>
            <View style={styles.wrapper}>
              <View
                style={{
                  marginTop: 20,
                }}>
                <Text
                  style={{
                    color: "#ffa07a",
                    fontSize: 20,
                    fontFamily: "OpenSans_600SemiBold",
                  }}>
                  Thông số lúc : {time}
                </Text>
              </View>
              <View style={styles.thongso}>
                <View style={styles.thongsoImage}>
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    source={{
                      uri: `https://cdn-icons-png.flaticon.com/512/1035/1035618.png?w=360`,
                    }}
                  />
                </View>
                <View style={styles.thongsoValue}>
                  <Text style={styles.thongsoValueHeader}>
                    Nhiệt độ nước làm mát
                  </Text>
                  <View style={styles.thongsoValueContent}>
                    <Text
                      style={{
                        color: "#fa8072",
                        fontSize: 65,
                      }}>
                      {data.temp}
                    </Text>
                    <Text
                      style={{
                        color: "#fa8072",
                        marginBottom: 10,
                        fontSize: 40,
                      }}>
                      °C
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.thongso}>
                <View style={styles.thongsoImage}>
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    source={{
                      uri: `https://www.pngplay.com/wp-content/uploads/6/High-Voltage-Symbol-Transparent-PNG.png`,
                    }}
                  />
                </View>
                <View style={styles.thongsoValue}>
                  <Text style={styles.thongsoValueHeader}>
                    Điện áp Bình Ac-quy{" "}
                  </Text>
                  <View style={styles.thongsoValueContent}>
                    <Text
                      style={{
                        color: "#fa8072",
                        fontSize: 65,
                      }}>
                      {data.voltage}
                    </Text>
                    <Text
                      style={{
                        color: "#fa8072",
                        fontSize: 65,
                      }}>
                      V
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.thongso}>
                <View style={styles.thongsoImage}>
                  <Image
                    style={{
                      width: "100%",
                      height: "70%",
                    }}
                    source={{
                      uri: `https://pngimage.net/wp-content/uploads/2018/06/speed-meter-png-4.png`,
                    }}
                  />
                </View>
                <View style={styles.thongsoValue}>
                  <Text style={styles.thongsoValueHeader}>Vận tốc </Text>
                  <View style={styles.thongsoValueContent}>
                    <Text
                      style={{
                        color: "#fa8072",
                        fontSize: 65,
                      }}>
                      {data.speed}
                    </Text>
                    <Text
                      style={{
                        color: "#fa8072",
                        marginTop: 15,
                        fontSize: 40,
                      }}>
                      km/h
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.chartwrap}>
              <View style={styles.chartitem}>
                <Text style={styles.textchart}>
                  Biểu đồ nhiệt độ nước làm mát
                </Text>
                <Chart data={temp} timelabel={timelabel} unit="℃" />
              </View>
              <View style={styles.chartitem}>
                <Text style={styles.textchart}>Biểu đồ điện áp bình Acquy</Text>
                <Chart data={voltage} timelabel={timelabel} unit="V" />
              </View>
              <View style={styles.chartitem}>
                <Text style={styles.textchart}>Biểu đồ vận tốc</Text>
                <Chart data={speed} timelabel={timelabel} unit="km/h" />
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  chartwrap: {
    width: "100%",
    height: 900,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  chartitem: {
    width: "100%",
    height: "30%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textchart: {
    fontSize: 18,
    fontFamily: "OpenSans_500Medium",
  },
  containerview: {
    flex: 1,
    backgroundColor: "white",
    //top: StatusBar.currentHeight,
    //height: 1000,
  },
  container: {
    height: 1800,
    width: "100%",
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    height: 680,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  thongso: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderStyle: "solid",
    width: "90%",
    height: 150,
    backgroundColor: "#e4f5ff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  thongsoImage: {
    //backgroundColor: "red",
    height: 60,
    width: 60,
  },
  thongsoValue: {
    height: "90%",
    width: 250,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  thongsoValueHeader: {
    textAlign: "center",
    fontSize: 18,
    color: "#ff6347",
    fontFamily: "OpenSans_600SemiBold",
  },
  thongsoValueContent: {
    width: "90%",
    height: "70%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  thong_so_1: {
    //flex: 3,
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
    //flex: 1,
    backgroundColor: "red",
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
