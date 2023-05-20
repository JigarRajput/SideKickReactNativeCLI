import { Platform, StyleSheet } from "react-native";
const loginStyles = StyleSheet.create({
  topContainer: {
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "white",
    flex: 1,
  },
  loginContinueText: {
    fontSize: 16,
    fontWeight: "700",
  },
  bottom: {
    flex: 1,
    alignItems: "center",
    marginTop: 40,
    rowGap: 10,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: "white",
  },
  loginBtn: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: 10,
    paddingVertical: 15,
    marginTop: 10,
  },
  loginBtnText: {
    color: "white",
    fontSize: 16,
  },
  signupText: {
    marginVertical: 10,
    fontSize: 16,
  },
});

export default loginStyles;
