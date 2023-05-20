import React, {useState, useEffect, useContext, useCallback} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {PaperPlaneTilt} from 'phosphor-react-native';
import io from 'socket.io-client';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {messageSent} from '../../redux/actions/ChatActions';
import {generateChatID} from '../../utilities/generateChatID';

const MessageScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector(state => state.userReducer.user);
  const receiver = useSelector(state => state.chatHelperReducer.receiver);
  const chats = useSelector(state => state.chatsReducer.chats);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  console.log('receiver in message', receiver);

  useFocusEffect(() => {
    console.log('chats now', chats);
    navigation.setOptions({title: receiver?.fullName});
  });

  const [socket, setSocket] = useState(null);

  useEffect(() => {
    socketCreated = io('https://sidekick-e028.onrender.com');
    console.log('socket created is', socketCreated);
    setSocket(socketCreated);

    const ourChatId = generateChatID(user._id, receiver._id);

    const messagesOfChat = chats.filter(chat => chat.chatId === ourChatId);
    if (messagesOfChat.length > 0) {
      setMessages(messagesOfChat[0].chatMessages);
    }

    return () => {
      socket?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.emit('join', user._id);
    }
  }, [socket]);

  const handleSend = () => {
    if (newMessage.length > 0) {
      const messageToSend = {
        id: new Date(),
        from: user._id,
        to: receiver._id,
        text: newMessage,
        timestamp: new Date(),
        senderDetails: user,
      };

      const chatId = generateChatID(messageToSend.from, messageToSend.to);

      setMessages([...messages, messageToSend]);
      // //
      socket.emit('message', messageToSend);

      dispatch(
        messageSent({message: messageToSend, chatId, chatWith: receiver}),
      );

      console.log('message emitted!');
      // setMessage("");
      //
      setNewMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.messageContainer}>
        {messages.map((message, index) => (
          <View
            key={index}
            style={[
              styles.messageBubble,
              message?.from === user?._id
                ? styles.rightBubble
                : styles.leftBubble,
            ]}>
            <Text style={styles.messageText}>{message?.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Type your message"
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => handleSend()}>
          <PaperPlaneTilt size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  messageContainer: {
    padding: 10,
  },
  messageBubble: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: '70%',
  },
  leftBubble: {
    backgroundColor: '#f5f5f5',
    alignSelf: 'flex-start',
  },
  rightBubble: {
    backgroundColor: 'lightgrey',
    alignSelf: 'flex-end',
  },
  messageText: {
    fontSize: 16,
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e5e5ea',
    padding: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#e5e5ea',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 10,
    color: '#000000',
  },
  sendButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 100,
    borderWidth: 1,
  },
});

export default MessageScreen;
