import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from "react-native";
import React, { useContext, useState } from "react";
import getFirstLetters from "../../utilities/getFirstLetters";
import { Avatar, Snackbar } from "react-native-paper";

const ChatCard = ({ chat, navigation }) => {
  const avatarLabel = getFirstLetters(chat?.senderDetails?.fullName);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Message", { receiver: chat.senderDetails })
      }
      style={chatCardStyles.container}
    >
      <Avatar.Text
        size={45}
        label={avatarLabel}
        style={{ backgroundColor: "#000", paddingBottom: 2 }}
      />
      <View>
        <Text style={chatCardStyles.nameText}>
          {(chat?.senderDetails?.fullName).toUpperCase()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const chatCardStyles = StyleSheet.create({
  container: {
    marginHorizontal: 2,
    marginVertical: 2,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    borderWidth: 0.4,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "500",
  },
  rightContainer: {},
});

export default ChatCard;
