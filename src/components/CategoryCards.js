// jai Ganesh
import React from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";
import serviceCategories from "../constants/serviceCategories";
// icons colors #6C4CFB - violet

function CategoryCards() {
  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={styles.cardContainer}
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard
        image={require("../assets/photographer.png")}
        serviceCategory={serviceCategories[0].label}
      />
      <CategoryCard
        image={require("../assets/eventManager.png")}
        serviceCategory={serviceCategories[1].label}
      />
      <CategoryCard
        image={require("../assets/chef.png")}
        serviceCategory={serviceCategories[2].label}
      />
      <CategoryCard
        image={require("../assets/homeService.png")}
        serviceCategory={serviceCategories[3].label}
      />
      <CategoryCard
        image={require("../assets/physitherapy.png")}
        serviceCategory={serviceCategories[4].label}
      />
      <CategoryCard
        image={require("../assets/lawyer.png")}
        serviceCategory={serviceCategories[5].label}
      />
      <CategoryCard
        image={require("../assets/engineer.png")}
        serviceCategory={serviceCategories[6].label}
      />
      <CategoryCard
        image={require("../assets/profileImage.jpg")}
        serviceCategory={serviceCategories[7].label}
        numberOfLines={1}
      />
      <CategoryCard
        image={require("../assets/orchard.png")}
        serviceCategory={serviceCategories[8].label}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    columnGap: 10,
    flexWrap: "wrap",
    rowGap: 10,
    alignContent: "center",
    justifyContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
});

export default CategoryCards;
