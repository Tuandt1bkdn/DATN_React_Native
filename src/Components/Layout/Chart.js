import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";
import axios from "axios";
import { LineChart } from "react-native-chart-kit";

function Chart({ data, timelabel, unit }) {
  return (
    <LineChart
      data={{
        labels: timelabel,
        datasets: [
          {
            data: data,
          },
        ],
      }}
      width={Dimensions.get("window").width * 0.9} // from react-native
      height={200}
      //yAxisLabel="$"
      yAxisSuffix={unit}
      yAxisInterval={1} // optional, defaults to 1
      chartConfig={{
        backgroundColor: "red",
        backgroundGradientFrom: "#fff",
        backgroundGradientTo: "#fff",

        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        labelColor: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
        style: {
          borderRadius: 16,
          backgroundColor: "red",
        },
        propsForDots: {
          r: "4",
          strokeWidth: "2",
          stroke: "#ccc",
        },
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    top: StatusBar.currentHeight,
    bottom: 200,
    backgroundColor: "white",
  },
  content: {
    flexDirection: "column",
    alignItems: "center",
  },
});

export default Chart;
