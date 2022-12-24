import React from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";
import { Shadow } from "react-native-shadow-2";

const CustomCarousel = ({ data }) => {
  const WIDTH = Dimensions.get("window").width;
  return (
    <ScrollView
      horizontal
      style={{ marginLeft: 15 }}
      showsHorizontalScrollIndicator={false}>
      {data.map((item, index) => {
        return (
          <Shadow
            key={index}
            startColor={"#e6e6e6"}
            offset={[0, 5]}
            distance={7}>
            <View
              style={{
                width: WIDTH * 0.87,
                height: 220,
                flexDirection: "column",
                marginRight: 25,
                borderRadius: 20,
                backgroundColor: "white",
                borderColor: "#e6e6e6",
                borderWidth: 1,
                borderStyle: "solid",
              }}>
              <Image
                style={{
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  width: WIDTH * 0.77,
                  height: 150,
                  resizeMode: "cover",
                  left: 0,
                }}
                source={{ uri: `${item.uri}` }}
              />
              <View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "600",
                    marginLeft: 10,
                    marginTop: 10,
                  }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "300",
                    marginLeft: 10,
                    //marginTop: 5,
                  }}>
                  {item.description}
                </Text>
              </View>
            </View>
          </Shadow>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {},
});

export default CustomCarousel;
