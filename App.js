import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./src/Navigation/TabNavigation";
import Location from "./src/Screens/LocationScreen";
import Test from "./src/Screens/LocationMap";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};
export default App;
