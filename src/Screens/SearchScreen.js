import * as React from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { useRef } from "react";
//import { blue400 } from "react-native-paper/lib/typescript/styles/colors";
const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const Latitude_Delta = 0.07;
const Longitude_Delta = Latitude_Delta * ASPECT_RATIO;
const Init_Position = {
  latitude: 16.047079,
  longitude: 108.20623,
  latitudeDelta: Latitude_Delta,
  longitudeDelta: Longitude_Delta,
};

const Search = () => {
  const refRBSheet = useRef();
  return (
    <View style={styles.container}>
      <Button title="Xem thong tin" onPress={() => refRBSheet.current.open()} />
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={Init_Position}
      />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        height={400}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "blue",
          },
        }}>
        <View style={styles.bottomDrawer}>
          <ScrollView>
            <Text>s</Text>
          </ScrollView>
        </View>
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    top: 25,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: 400,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  bottomDrawer: {
    //backgroundColor: "red",
    borderTopColor: "blue",
    borderTopWidth: 1,
    width: "100%",
    height: "100%",
  },
});
export default Search;

<MapView
  style={styles.map}
  provider={PROVIDER_GOOGLE}
  initialRegion={Init_Position}
/>;
