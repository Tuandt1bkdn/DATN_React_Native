import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";
import Home from "../Screens/HomeScreen";
import Search from "../Screens/SearchScreen";
import Location from "../Screens/LocationScreen";
import Warning from "../Screens/WarningScreen";
import Login from "../Screens/LoginScreen";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCircleExclamation,
  faHome,
  faLocationDot,
  faLock,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FirstStackNavigator, SecondStackNavigator } from "./StackNavigator";

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
        name="Home"
        component={Home}
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
                icon={faHome}
                style={{
                  color: focused ? "#1412df" : "#808080",
                }}
              />
              <Text
                style={{
                  color: focused ? "#1412df" : "#808080",
                  fontSize: 13,
                }}>
                Trang chủ
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
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
                icon={faMagnifyingGlass}
                style={{
                  color: focused ? "#1412df" : "#808080",
                }}
              />
              <Text
                style={{
                  color: focused ? "#1412df" : "#808080",
                  fontSize: 13,
                }}>
                Tìm đường
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Location"
        component={FirstStackNavigator}
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
                icon={faLocationDot}
                style={{
                  color: focused ? "#1412df" : "#808080",
                }}
              />
              <Text
                style={{
                  color: focused ? "#1412df" : "#808080",
                  fontSize: 13,
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
                  color: focused ? "#1412df" : "#808080",
                }}
              />
              <Text
                style={{
                  color: focused ? "#1412df" : "#808080",
                  fontSize: 13,
                }}>
                Thông số
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
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
                  color: focused ? "#1412df" : "#808080",
                }}
              />
              <Text
                style={{
                  color: focused ? "#1412df" : "#808080",
                  fontSize: 13,
                }}>
                Login
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
