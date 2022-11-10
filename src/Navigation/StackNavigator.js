import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Location from "../Screens/LocationScreen";
import LocationMap from "../Screens/LocationMap";
import Warning from "../Screens/WarningScreen";
import DienAp from "../Screens/DienAp";
import Distance from "../Screens/Distance";
import WaterA from "../Screens/WaterA";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

const FirstStackNavigator = () => {
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

const SecondStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="WARNING" component={Warning} />
      <Stack.Screen name="DienAp" component={DienAp} />
      <Stack.Screen name="WaterA" component={WaterA} />
      <Stack.Screen name="Distance" component={Distance} />
    </Stack.Navigator>
  );
};

export { FirstStackNavigator, SecondStackNavigator };
