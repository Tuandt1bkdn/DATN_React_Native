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

const Warning = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.wrapper}>
          <View
            style={{
              marginTop: 20,
            }}>
            <Text
              style={{
                color: "red",
                fontSize: 20,
              }}>
              Thong so luc : 21:06, 8/12/2022
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
                    fontSize: 65,
                  }}>
                  40
                </Text>
                <Text
                  style={{
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
                    fontSize: 65,
                  }}>
                  40
                </Text>
                <Text
                  style={{
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
                    fontSize: 65,
                  }}>
                  40
                </Text>
                <Text
                  style={{
                    marginTop: 15,
                    fontSize: 40,
                  }}>
                  km/h
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Button
              title="Xem biểu đồ"
              onPress={() => navigation.navigate("ChartsScreen")}></Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    top: StatusBar.currentHeight,
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
