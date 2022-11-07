import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Location from "../Screens/LocationScreen";
import LocationMap from "../Screens/LocationMap";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="LOCATION"
        component={Location}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="LocationMap" component={LocationMap} />
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
