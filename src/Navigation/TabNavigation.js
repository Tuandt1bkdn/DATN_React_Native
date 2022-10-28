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

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 90,
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
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}>
              <FontAwesomeIcon
                icon={faHome}
                style={{
                  color: focused ? "red" : "black",
                }}
              />
              <Text
                style={{
                  color: focused ? "red" : "black",
                  fontSize: 15,
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
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{
                  color: focused ? "red" : "black",
                }}
              />
              <Text
                style={{
                  color: focused ? "red" : "black",
                  fontSize: 15,
                }}>
                Tìm đường
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Location"
        component={Location}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}>
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{
                  color: focused ? "red" : "black",
                }}
              />
              <Text
                style={{
                  color: focused ? "red" : "black",
                  fontSize: 15,
                }}>
                Dò vị trí
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Warning"
        component={Warning}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}>
              <FontAwesomeIcon
                icon={faCircleExclamation}
                style={{
                  color: focused ? "red" : "black",
                }}
              />
              <Text
                style={{
                  color: focused ? "red" : "black",
                  fontSize: 15,
                }}>
                Cảnh báo
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}>
              <FontAwesomeIcon
                icon={faLock}
                style={{
                  color: focused ? "red" : "black",
                }}
              />
              <Text
                style={{
                  color: focused ? "red" : "black",
                  fontSize: 15,
                }}>
                Ddawng nhaajp
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
