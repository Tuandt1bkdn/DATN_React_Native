import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Warning from "../Screens/WarningScreen";
import ChartsScreen from "../Screens/ChartsScreen";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerShown: false,
};

const SecondStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="WARNING" component={Warning} />
      <Stack.Screen name="ChartsScreen" component={ChartsScreen} />
    </Stack.Navigator>
  );
};

export { SecondStackNavigator };
