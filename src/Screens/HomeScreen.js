import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  View,
  Button,
  ScrollView,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  SafeAreaView,
  StatusBar,
  Pressable,
} from "react-native";
import { Shadow } from "react-native-shadow-2";
import CustomCarousel from "../Components/Layout/CustomCarousel";
const carrent = require("../assets/image/carrent.jpg");
const image = [
  "https://cdn.tgdd.vn/Files/2022/01/24/1412656/su-khac-biet-giua-mang-lora-va-lorawan-2.jpg",
  "https://lora-alliance.org/wp-content/uploads/2021/10/LA-TC-Stack-01-1024x472.png",
  "https://www.mdpi.com/sensors/sensors-20-02028/article_deploy/html/images/sensors-20-02028-g001.png",
];

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

const Home = ({ navigation }) => {
  const data = [
    {
      uri: "https://i.ibb.co/d24ms5t/carrent.png",
      title: "Ứng dụng giám sát xe ô tô cho thuê",
      description: "Hỗ trợ bởi Trung tâm phát triển hạ tầng CNTT Đà Nẵng",
    },
    {
      uri: "https://i.ibb.co/kKpCXvv/image.png",
      title: "Hiển thị vị trí hiện tại của xe theo thời gian",
      description: "Sử dụng cảm biến GPS",
    },
    {
      uri: "https://i.ibb.co/Qv3Crrf/image.png",
      title: "Hiển thị thông số vật lý của xe",
      description: "Giúp người dùng kiểm tra các thông số của xe",
    },
    {
      uri: "https://i.ibb.co/cJsdfkj/image.png",
      title: "Vẽ biểu đồ các thông số",
      description: "Giám sát trực quan, đưa ra những phân tích chính xác",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.center}>
          <View style={styles.gif}>
            <Image
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "cover",
              }}
              source={{
                uri: "https://dplnews.com/wp-content/uploads/2022/10/dplnews_LoRaWAN_mc101022.jpeg",
              }}
            />
          </View>
          <View style={styles.managerbar}>
            <View
              style={{
                width: "50%",
                height: "76%",
                flexDirection: "row",
                marginLeft: 10,
                alignItems: "center",
              }}>
              <Image
                source={{
                  uri: "https://cdn1.iconfinder.com/data/icons/digital-strategy-1/64/manager-business-man-avatar-512.png",
                }}
                style={{
                  width: "20%",
                  height: "100%",
                  borderRadius: 50,
                  resizeMode: "cover",
                }}
              />
              <Text
                style={{
                  fontWeight: "600",
                  color: "#4d4d4d",
                }}>
                Xin chào, Lorawangps01
              </Text>
            </View>
            <FontAwesomeIcon icon={faAngleRight} style={{ marginRight: 10 }} />
          </View>
          <View
            style={{
              width: "100%",
              height: 350,
              //backgroundColor: "blue",
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "800",
                paddingLeft: WIDTH * 0.03 + 10,
                paddingBottom: 15,
              }}>
              KHÁM PHÁ CÁC CHỨC NĂNG CỦA ỨNG DỤNG
            </Text>
            <View
              style={{
                marginTop: 20,
                width: "100%",
                height: 270,
                flexDirection: "row",
              }}>
              <CustomCarousel data={data} />
            </View>
          </View>
          <Shadow
            startColor="#090e71"
            endColor="#00000000"
            distance={9}
            offset={[-5, 10]}>
            <LinearGradient
              start={{ x: 0.0, y: 0.45 }}
              end={{ x: 0.3, y: 2.5 }}
              locations={[0, 0.5, 0.8]}
              colors={["#4c669f", "#3b5998", "#192f6a"]}
              style={{
                borderRadius: 10,
                width: 250,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("BottomTabNavigator")}>
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "600",
                  }}>
                  Start
                </Text>
              </Pressable>
            </LinearGradient>
          </Shadow>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    width: WIDTH,
    //top: StatusBar.currentHeight,
  },
  center: {
    flex: 1,
    width: WIDTH,
    minHeight: 900,
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "white",
    //top: 50,
  },
  gif: {
    width: "100%",
    height: 200,
  },
  managerbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "94%",
    height: 48,
    marginTop: 20,
    marginBottom: 15,
    borderRadius: 20,
    borderColor: "#e6e6e6",
    borderWidth: 1,
    borderStyle: "solid",
  },
  button: {
    width: 200,
    height: 50,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
