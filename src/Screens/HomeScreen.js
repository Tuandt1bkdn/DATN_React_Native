import React from "react";
import {
  View,
  Button,
  ScrollView,
  Text,
  Dimensions,
  StyleSheet,
  Image,
} from "react-native";

const images = [
  "https://cdn.tgdd.vn/Files/2022/01/24/1412656/su-khac-biet-giua-mang-lora-va-lorawan-2.jpg",
  "https://lora-alliance.org/wp-content/uploads/2021/10/LA-TC-Stack-01-1024x472.png",
  "https://www.mdpi.com/sensors/sensors-20-02028/article_deploy/html/images/sensors-20-02028-g001.png",
];

const WIDTH = Dimensions.get("screen").width;
//const HEIGHT = Dimensions.get("screen").height;

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.center}>
        <View style={styles.gif}>
          <Text> GIF Demo Giới thiệu</Text>
        </View>
        <View
          style={{
            flex: 0.13,
            width: "90%",
            backgroundColor: "white",
          }}>
          <Text
            style={{
              top: 20,
              textAlign: "center",
              fontStyle: "italic",
            }}>
            Dự án phát triển với sự kết hợp của : Khoa Điện tử - Viễn thông và
            Trung tâm Phát triển Hạ tầng Công nghệ Thông tin Đà Nẵng
          </Text>
        </View>
        <View
          style={{
            flex: 0.5,
            width: "100%",
            height: 50,
            backgroundColor: "blue",
          }}>
          <Text style={{ flex: 0.15, fontWeight: "900" }}>
            KHÁM PHÁ CÁC CHỨC NĂNG CỦA ỨNG DỤNG
          </Text>
          <View
            style={{
              flex: 0.5,
              backgroundColor: "red",
              flexDirection: "row",
            }}>
            <View
              style={{
                flex: 1 / 3,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
              <Image
                style={{
                  flex: 0.9,
                  top: 5,
                  width: "90%",
                  borderRadius: 10,
                }}
                source={{
                  uri: "https://danhkiet.com/upload_images/images/cach-nhap-toa-do-vao-google-map.jpg",
                }}
              />
              <Text style={{ fontStyle: "italic" }}>
                Kiểm tra toạ độ hiện tại
              </Text>
            </View>
            <View
              style={{
                flex: 1 / 3,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
              <Image
                style={{
                  flex: 0.9,
                  top: 5,
                  width: "90%",
                  height: "60%",
                  borderRadius: 10,
                }}
                source={{
                  uri: "https://help.opendatasoft.com/platform/en/_images/chart-layers-series.png",
                }}
              />
              <Text style={{ fontStyle: "italic" }}>
                Nhiệt độ nước làm mát{" "}
              </Text>
            </View>
            <View
              style={{
                flex: 1 / 3,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
              <Image
                style={{
                  flex: 0.8,
                  top: 5,
                  width: "90%",
                  height: "60%",
                  borderRadius: 10,
                }}
                source={{
                  uri: "https://help.opendatasoft.com/platform/en/_images/chart-layers-series.png",
                }}
              />
              <Text style={{ fontStyle: "italic" }}>Điện áp bình Acquy</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          top: 0,
          backgroundColor: "red",
        }}>
        <Button title="Test"></Button>
        <Text>ABCD</Text>
        <Text>ABCD</Text>
        <Text>ABCD</Text>
        <Text>ABCD</Text>
        <Text>ABCD</Text>
        <Text>ABCD</Text>
        <Text>ABCD</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    width: WIDTH,
    height: 700,
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "white",
    top: 50,
  },
  gif: {
    flex: 0.3,
    width: "100%",
    backgroundColor: "purple",
    borderRadius: 15,
  },
});

export default Home;
