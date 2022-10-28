import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Screens/HomeScreen";
import Search from "../Screens/SearchScreen";
import Location from "../Screens/LocationScreen";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Location" component={Location} />
    </Stack.Navigator>
  );
};

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Location" component={Location} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, ContactStackNavigator };
