import { View, Text, Image } from "react-native";
import React from "react";

const ListEmpty = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        source={require("../assets/searchEmpty.gif")}
        style={{ width: 200, height: 200 }}
      />
      <Text style={{ marginVertical: 15, fontSize: 18, fontWeight: "600" }}>
        No profiles found!!
      </Text>
    </View>
  );
};

export default ListEmpty;
