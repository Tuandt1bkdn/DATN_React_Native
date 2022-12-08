import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const UserScreen = () => {
  return (
    <View style={styles.center}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Thong tin</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.contentProfile}>
          <Image
            style={styles.contentProfileImage}
            source={{
              uri: `https://toigingiuvedep.vn/wp-content/uploads/2021/07/mau-anh-the-dep-lam-the-can-cuoc.jpg`,
            }}
          />
          <View style={styles.contentProfileText}>
            <Text>Tran Van Hoang</Text>
            <Text>04/12/1984</Text>
            <Text>Quang Tri</Text>
            <Text>1234</Text>
          </View>
        </View>
        <View>
          <Text>AB</Text>
        </View>
        <View>
          <Text>AB</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  center: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    top: 30,
    width: "100%",
    height: "100%",
    //backgroundColor: "red",
  },
  header: {
    width: 160,
    height: 45,
    marginTop: 20,
    marginBottom: 40,
    color: "white",
    borderRadius: 25,
    backgroundColor: "#ccc",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    //backgroundColor: "red",
    fontSize: 20,
    color: "white",
  },
  content: {
    width: "100%",
    minHeight: "90%",
    //backgroundColor: "red",
  },
  contentProfile: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  contentProfileImage: {
    width: 100,
    height: 160,
  },
  contentProfileText: {
    width: 250,
    height: 160,

    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default UserScreen;
