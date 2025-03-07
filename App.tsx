import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./app/static/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, StyleSheet } from "react-native";
import ChatScreen from "./app/static/ChatScreen";
import { RouteProp } from "@react-navigation/native";
import store from "./app/core/store";
import { Provider, useSelector } from "react-redux";

const Stack = createNativeStackNavigator<RootStackParamList>();
export type RootStackParamList = {
  Home: undefined;
  Chat: { chatId: string; chatName: string };
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={({ route }) => ({ title: route.params.chatName })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
