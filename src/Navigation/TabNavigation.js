import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SecondStackNavigator } from "./SecondStackNavigator";
import Location from "../Screens/LocationScreen";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCircleExclamation,
  faIdCard,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import UserScreen from "../Screens/UserScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          elevation: 0,
          backgroundColor: "white",
          height: 60,
          ...style.shadow,
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center",
        },
      }}>
      <Tab.Screen
        name="UserScreen"
        component={UserScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                backgroundColor: "white",
              }}>
              <FontAwesomeIcon
                icon={faIdCard}
                style={{
                  color: focused ? "#4a4ee7" : "#808080",
                }}
              />
              <Text
                style={{
                  color: focused ? "#4a4ee7" : "#808080",
                  fontFamily: "OpenSans_600SemiBold",
                  fontSize: 13,
                }}>
                Tài xế
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Location"
        component={Location}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                backgroundColor: "white",
              }}>
              <FontAwesomeIcon
                icon={faLocationDot}
                fontSize={1}
                style={{
                  //fontSize: 25,
                  color: focused ? "#4a4ee7" : "#808080",
                }}
              />
              <Text
                style={{
                  color: focused ? "#4a4ee7" : "#808080",
                  fontFamily: "OpenSans_600SemiBold",
                  fontSize: 12,
                  paddingTop: 5,
                }}>
                Dò vị trí
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Warning"
        component={SecondStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                backgroundColor: "white",
              }}>
              <FontAwesomeIcon
                icon={faCircleExclamation}
                style={{
                  color: focused ? "#4a4ee7" : "#808080",
                }}
              />
              <Text
                style={{
                  color: focused ? "#4a4ee7" : "#808080",
                  fontFamily: "OpenSans_600SemiBold",
                  fontSize: 13,
                }}>
                Thông số
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const style = StyleSheet.create({
  shadow: {
    shadowColor: "#7f5df0",
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default BottomTabNavigator;
