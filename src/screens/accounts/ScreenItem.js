import { View, Text } from "react-native";
import React from "react";

const ScreenItem = ({ PhosporComponent, text }) => {
  return (
    <View
      style={{ flexDirection: "row", paddingHorizontal: 20, columnGap: 20 }}
    >
      <Text>{text}</Text>
    </View>
  );
};

export default ScreenItem;
