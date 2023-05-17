import React from "react";
import HomeScreen from "../screens/home/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ChatsScreen from "../screens/chats/ChatsScreen";
import SavedScreen from "../screens/SavedScreen";
import AccountsScreen from "../screens/accounts/AccountsScreen";
import { Image } from "react-native";
import { MyTheme } from "../constants/theme";
import HomeStack from "../screens/home/HomeStack";
import ChatStack from "../screens/chats/ChatStack";
import { useRoute } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const routeParams = useRoute().params;
  console.log("params obtained from loginScreen", routeParams);
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        initialParams={routeParams}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/homeIcon.png")}
              style={{
                width: 40,
                height: 40,
                tintColor: focused ? MyTheme.colors.primary : "grey",
              }}
            />
          ),
        }}
        name="Home"
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/chatIcon.png")}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? MyTheme.colors.primary : "grey",
              }}
            />
          ),
        }}
        name="Chats"
        component={ChatStack}
      />
      <Tab.Screen
        options={{
          headerShown: true,
          headerTitle: "Bookmarked Profiles",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/saveIcon.png")}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? MyTheme.colors.primary : "grey",
              }}
            />
          ),
        }}
        name="Saved"
        component={SavedScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/profileIcon.png")}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? MyTheme.colors.primary : "grey",
              }}
            />
          ),
        }}
        name="Accounts"
        component={AccountsScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
