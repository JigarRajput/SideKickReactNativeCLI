import { StyleSheet } from "react-native";

export const profileCardStyles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: "#efefef",
    padding: 10,
    rowGap: 30,
    borderRadius: 14,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topLeftContainer: {
    flexDirection: "row",
    columnGap: 20,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  locationContainer: {
    flexDirection: "row",
  },
  contactContainer: {
    flexDirection: "row",
  },
  nameServiceContainer: {
    justifyContent: "space-around",
  },
  nameText: {
    fontSize: 16,
    fontWeight: "700",
  },
  numberText: {
    fontWeight: "600",
    paddingHorizontal: 8,
  },
  areaText: {
    fontWeight: "600",
    paddingHorizontal: 8,
  },
});
