import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MessageScreen from "./MessageScreen";
import ChatsScreen from "./ChatsScreen";
import { useRoute } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const ChatStack = () => {
  const routeParams = useRoute().params;
  return (
    <Stack.Navigator
      initialRouteName="ChatScreen"
      screenOptions={{
        headerShown: true,
        unmountOnBlur: true,
      }}
    >
      <Stack.Screen
        initialParams={routeParams}
        options={{
          headerTitle: "Your chats",
        }}
        name="ChatScreen"
        component={ChatsScreen}
      />
      <Stack.Screen
        options={{ unmountOnBlur: true }}
        name="Message"
        component={MessageScreen}
      />
    </Stack.Navigator>
  );
};

export default ChatStack;
