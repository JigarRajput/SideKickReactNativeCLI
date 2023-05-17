import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CategoryCard = ({ serviceCategory, numberOfLines, image }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Search", { category: serviceCategory })
      }
    >
      <View style={styles.card}>
        <View style={styles.cardImgContainer}>
          <Image style={styles.cardImg} source={image} />
        </View>
        <Text
          numberOfLines={numberOfLines ?? 2}
          ellipsizeMode="tail"
          style={styles.cardText}
        >
          {serviceCategory}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardImgContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
  },
  cardImg: {
    width: 60,
    height: 75,
  },
  cardText: {
    textAlign: "center",
    paddingTop: 2,
    paddingBottom: 5,
    paddingHorizontal: 10,
    fontWeight: "500",
  },
  card: {
    flexDirection: "column",
    backgroundColor: "#f5f5f5",
    rowGap: 4,
    borderRadius: 10,
    width: 120,
    // borderWidth: 0.3,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 2,
    //   height: 7,
    // },
    // shadowOpacity: 0.43,
    // shadowRadius: 9.51,
    // elevation: 2,
  },
});

export default CategoryCard;
