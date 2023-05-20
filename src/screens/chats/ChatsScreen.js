import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, FlatList} from 'react-native';
import applicationStyles from '../../styles/ApplicationStyles';
import io from 'socket.io-client';
import ChatCard from './ChatCard';
import {generateChatID} from '../../utilities/generateChatID';
import {useDispatch, useSelector} from 'react-redux';
import {messageReceived} from '../../redux/actions/ChatActions';

const ChatsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const chats = useSelector(state => state.chatsReducer.chats);
  const user = useSelector(state => state.userReducer.user);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    socketCreated = io('https://sidekick-e028.onrender.com');
    setSocket(socketCreated);

    return () => {
      if (socket) socket.disconnect();
    };
  }, []);

  console.log('chats in chats screen', chats);

  useEffect(() => {
    if (socket) {
      // as soon as socket is available emit join event
      socket.emit('join', user._id);

      // listen to message event
      socket.on('message', message => {
        console.log('message recieved', message);

        const chatId = generateChatID(message.from, message.to);

        // dispatch(messageReceived({message, chatId, chatWith : message.senderDetails}))
        dispatch(
          messageReceived({message, chatId, chatWith: message.senderDetails}),
        );

        // console.log('message received from server', message);
        // const chatWithSender = chats.filter(
        //   chat => message.sender === chat.sender,
        // );

        // means already have chats with that user
        // if (chatWithSender.length > 0) {
        //   const chatIndex = chats.findIndex(
        //     chat => chat.sender === message.sender,
        //   );
        //   const messagesOfChat = chats[chatIndex].chatMessages;
        //   setChats(
        //     chats.map(chat =>
        //       chat.sender !== message.sender
        //         ? chat
        //         : {
        //             sender: message.sender,
        //             senderDetails: message.senderDetails,
        //             chatMessages: [...messagesOfChat, message],
        //           },
        //     ),
        //   );
        // }

        // // else
        // else {
        //   const newChat = {
        //     sender: message.sender,
        //     senderDetails: message.senderDetails,
        //     chatMessages: [{...message}],
        //   };
        //   setChats([...chats, newChat]);
        // }
        // // setMessages((prevMessages) => [...prevMessages, message]);
        // console.log('chats', chats);
      });
    }
  }, [socket]);

  return (
    <SafeAreaView style={applicationStyles.container}>
      <FlatList
        data={chats}
        renderItem={({item, index}) => (
          <ChatCard chat={item} navigation={navigation} />
        )}
        ListEmptyComponent={<ChatsEmpty />}
      />
    </SafeAreaView>
  );
};

function ChatsEmpty() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>There are no chats yet!</Text>
    </View>
  );
}

export default ChatsScreen;
