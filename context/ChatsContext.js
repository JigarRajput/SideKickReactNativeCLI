import { createContext } from "react";
import { useState } from "react";

export const ChatsContext = createContext();

const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState([]);
  return (
    <ChatsContext.Provider value={{ chats, setChats }}>
      {children}
    </ChatsContext.Provider>
  );
};

export default ChatProvider;
