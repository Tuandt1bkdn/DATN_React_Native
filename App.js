import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./src/Navigation/TabNavigation";
import Home from "./src/Screens/HomeScreen";
import FirstStackNavigator from "./src/Navigation/FirstStackNavigator";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <FirstStackNavigator />
    </NavigationContainer>
  );
};
export default App;
