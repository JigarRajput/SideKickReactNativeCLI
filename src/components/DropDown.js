import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import React from "react";

const DropDown = ({ options, onSelect, isOpen, setIsOpen, value, name }) => {
  return (
    <View style={dropDownStyles.container}>
      <TouchableOpacity
        style={dropDownStyles.labelContainer}
        onPress={() => setIsOpen(!isOpen)}
      >
        <Text>{value?.label ?? name}</Text>
        <Image
          source={require("../assets/dropDownArrow.png")}
          style={{ width: 25, height: 25 }}
        />
      </TouchableOpacity>
      {isOpen && (
        <ScrollView nestedScrollEnabled={true}>
          {options.map((option) => (
            <TouchableOpacity
              style={dropDownStyles.container}
              key={option.value}
              onPress={() => {
                setIsOpen(!isOpen);
                onSelect(option);
              }}
            >
              <Text>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const dropDownStyles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    width: "100%",
    marginVertical: 10,
    maxHeight: 200,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 15,
    width: "100%",
  },
  divider: {
    height: 0.5,
    backgroundColor: "black",
    marginTop: 5,
  },
});

export default React.memo(DropDown);
