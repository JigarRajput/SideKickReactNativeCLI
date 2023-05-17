import React, { useState, useEffect, useContext } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  FlatList,
} from "react-native";
import applicationStyles from "../../styles/ApplicationStyles";
import io from "socket.io-client";
import { UserContext } from "../../../context/UserContext";
import { useRoute } from "@react-navigation/native";
import ChatCard from "./ChatCard";
import { ChatsContext } from "../../../context/ChatsContext";

const ChatsScreen = ({ navigation }) => {
  const route = useRoute();
  const { chats, setChats } = useContext(ChatsContext);
  const { user, setUser } = useContext(UserContext);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    socketCreated = io("http://192.168.43.71:3000");
    setSocket(socketCreated);

    return () => {
      if (socket) socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      // as soon as socket is available emit join event
      socket.emit("join", user._id);

      // listen to message event
      socket.on("message", (message) => {
        console.log("message received from server", message);
        const chatWithSender = chats.filter(
          (chat) => message.sender === chat.sender
        );

        // means already have chats with that user
        if (chatWithSender.length > 0) {
          const chatIndex = chats.findIndex(
            (chat) => chat.sender === message.sender
          );
          const messagesOfChat = chats[chatIndex].chatMessages;
          setChats(
            chats.map((chat) =>
              chat.sender !== message.sender
                ? chat
                : {
                    sender: message.sender,
                    senderDetails: message.senderDetails,
                    chatMessages: [...messagesOfChat, message],
                  }
            )
          );
        }

        // else
        else {
          const newChat = {
            sender: message.sender,
            senderDetails: message.senderDetails,
            chatMessages: [{ ...message }],
          };
          setChats([...chats, newChat]);
        }
        // setMessages((prevMessages) => [...prevMessages, message]);
        console.log("chats", chats);
      });
    }
  }, [socket]);

  return (
    <SafeAreaView style={applicationStyles.container}>
      <FlatList
        data={chats}
        renderItem={({ item, index }) => (
          <ChatCard chat={item} navigation={navigation} />
        )}
        ListEmptyComponent={<ChatsEmpty />}
      />
    </SafeAreaView>
  );
};

function ChatsEmpty() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>There are no chats yet!</Text>
    </View>
  );
}

export default ChatsScreen;
