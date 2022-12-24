import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstStackNavigator from "./src/Navigation/FirstStackNavigator";
import {
  useFonts,
  OpenSans_300Light,
  OpenSans_500Medium,
  OpenSans_600SemiBold,
  OpenSans_400Regular,
  OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";
import AppLoading from "expo-app-loading";

const Stack = createNativeStackNavigator();

const App = () => {
  let fontsLoaded = useFonts({
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_500Medium,
    OpenSans_700Bold,
    OpenSans_600SemiBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else
    return (
      <NavigationContainer>
        <FirstStackNavigator />
      </NavigationContainer>
    );
};
export default App;
