import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Login = () => {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View>
      <Text>AV</Text>
      <Text>AV</Text>
      <Text>AV</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },

  forgot_button: {
    height: 30,
    width: 133,
    margin: 15,
    paddingTop: 4,
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 50,
    color: "red",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});

export default Login;
