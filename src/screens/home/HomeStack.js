import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import SearchScreen from "../search/SearchScreen";
import { useRoute } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const routeParams = useRoute().params;
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        initialParams={routeParams}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
