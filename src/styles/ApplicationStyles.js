import { StyleSheet, Platform, StatusBar } from "react-native";

const applicationStyles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
  },
});

export default applicationStyles;
