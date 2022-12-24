import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
} from "react-native";
import CustomCarousel from "../Components/Layout/CustomCarousel";

function ChartsScreen() {
  const image = [
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
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        <CustomCarousel data={image} />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    top: StatusBar.currentHeight,
    //bottom: 200,
    backgroundColor: "white",
    height: 1000,
  },
});

export default ChartsScreen;
//<CustomCarousel data={image} />
