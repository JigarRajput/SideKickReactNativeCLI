import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { PaperPlaneTilt } from "phosphor-react-native";
import io from "socket.io-client";
import { UserContext } from "../../../context/UserContext";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ChatsContext } from "../../../context/ChatsContext";

const MessageScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const { user, setUser } = useContext(UserContext);
  const [socket, setSocket] = useState(null);

  const { chats, setChats } = useContext(ChatsContext);

  useEffect(() => {
    socketCreated = io("http://192.168.43.71:3000");
    setSocket(socketCreated);
    return () => {
      socket?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.emit("join", user._id);
    }
  }, [socket]);

  useEffect(() => {
    console.log("Message receiver ", route.params?.receiver.fullName);

    console.log("chats in message screen", chats);

    const chatsWithSender = chats.filter(
      (ourChat) => route.params.receiver._id == ourChat.senderDetails._id
    );

    if (chatsWithSender.length !== 0) {
      setMessages(chatsWithSender[0].chatMessages);
    }

    navigation.setOptions({
      title: route.params.receiver.fullName,
    });
  }, [route]);

  const handleSend = () => {
    if (newMessage.length > 0) {
      const messageToSend = {
        id: new Date(),
        text: newMessage,
        sender: user._id,
        timestamp: new Date(),
        senderDetails: user,
        receiver: "6457f5a5ffb3e78466aba5df",
      };
      setMessages([...messages, messageToSend]);
      //
      socket.emit("message", messageToSend);
      console.log("message emitted!");
      // setMessage("");
      //
      setNewMessage("");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.messageContainer}>
        {messages.length > 0 ? (
          messages.map((message, index) => (
            <View
              key={index}
              style={[
                styles.messageBubble,
                message.sender === user._id
                  ? styles.rightBubble
                  : styles.leftBubble,
              ]}
            >
              <Text style={styles.messageText}>{message.text}</Text>
            </View>
          ))
        ) : (
          <ActivityIndicator animating={true} size={"large"} />
        )}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Type your message"
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <PaperPlaneTilt size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  messageContainer: {
    padding: 10,
  },
  messageBubble: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: "70%",
  },
  leftBubble: {
    backgroundColor: "#f5f5f5",
    alignSelf: "flex-start",
  },
  rightBubble: {
    backgroundColor: "lightgrey",
    alignSelf: "flex-end",
  },
  messageText: {
    fontSize: 16,
    color: "#000",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#e5e5ea",
    padding: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#e5e5ea",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 100,
    borderWidth: 1,
  },
});

export default MessageScreen;
