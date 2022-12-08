import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./TabNavigation";
import Home from "../Screens/HomeScreen";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

const FirstStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="HOME"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};
export default FirstStackNavigator;
