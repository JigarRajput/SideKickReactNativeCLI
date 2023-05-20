import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from 'react-native';
import React, {useContext, useState} from 'react';
import getFirstLetters from '../../utilities/getFirstLetters';
import {Avatar, Snackbar} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {setReceiver} from '../../redux/actions/ChatHelperActions';
import {deleteChat} from '../../redux/actions/ChatActions';

const ChatCard = ({chat, navigation}) => {
  const dispatch = useDispatch();
  const avatarLabel = getFirstLetters(chat?.chatWith?.fullName);

  return (
    <TouchableOpacity
      onLongPress={() => {
        dispatch(deleteChat(chat.chatId));
      }}
      onPress={() => {
        dispatch(setReceiver(chat.chatWith));
        navigation.navigate('Message');
      }}
      style={chatCardStyles.container}>
      <Avatar.Text
        size={45}
        label={avatarLabel}
        style={{backgroundColor: '#000', paddingBottom: 2}}
      />
      <View>
        <Text style={chatCardStyles.nameText}>
          {(chat?.chatWith?.fullName).toUpperCase()}
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
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    borderWidth: 0.4,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  nameText: {
    fontSize: 18,
    fontWeight: '500',
  },
  rightContainer: {},
});

export default ChatCard;
