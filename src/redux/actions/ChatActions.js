import constants from './constants';

export const messageReceived = message => {
  console.log('message received dispatched for message', message);
  return {
    type: constants.MESSAGE_RECEIVED,
    payload: message,
  };
};

export const messageSent = message => {
  return {
    type: constants.MESSAGE_SENT,
    payload: message,
  };
};

export const deleteChat = chatId => {
  return {
    type: constants.DELETE_CHAT,
    payload: chatId,
  };
};
