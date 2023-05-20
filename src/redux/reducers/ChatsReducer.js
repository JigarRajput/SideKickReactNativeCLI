// jai Ganesh
import {constants} from '../actions';

const initialState = {
  chats: [],
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.MESSAGE_RECEIVED: {
      const chatIndex = state.chats.findIndex(
        chat => chat.chatId === action.payload.chatId,
      );

      if (chatIndex === -1) {
        return {
          ...state,
          chats: [
            ...state.chats,
            {
              chatId: action.payload.chatId,
              chatWith: action.payload.message.senderDetails,
              chatMessages: [action.payload.message],
            },
          ],
        };
      } else {
        let ourChat = state.chats[chatIndex];
        ourChat.chatMessages = [
          ...ourChat.chatMessages,
          action.payload.message,
        ];

        return {
          ...state,
          chats: state.chats.map(chat =>
            chat.chatId !== action.payload.chatId ? chat : ourChat,
          ),
        };
      }
    }

    case constants.MESSAGE_SENT: {
      const chatIndex = state.chats.findIndex(
        chat => chat.chatId === action.payload.chatId,
      );

      if (chatIndex === -1) {
        return {
          ...state,
          chats: [
            ...state.chats,
            {
              chatId: action.payload.chatId,
              chatWith: action.payload.chatWith,
              chatMessages: [action.payload.message],
            },
          ],
        };
      } else {
        let ourChat = state.chats[chatIndex];
        ourChat.chatMessages = [
          ...ourChat.chatMessages,
          action.payload.message,
        ];

        return {
          ...state,
          chats: state.chats.map(chat =>
            chat.chatId !== action.payload.chatId ? chat : ourChat,
          ),
        };
      }
    }

    case constants.DELETE_CHAT: {
      return {
        ...state,
        chats: state.chats.filter(
          chat => chat.chatId !== action.payload.chatId,
        ),
      };
    }

    default:
      return state;
  }
};

export default chatReducer;
