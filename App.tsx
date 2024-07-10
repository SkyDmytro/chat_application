import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "./app/static/HomePage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, StyleSheet } from "react-native";
import { ChatPage } from "./app/static/ChatPage";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Chat"
        component={ChatPage}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}
// const styles = StyleSheet.create({
//   container: {
//     color: "black",
//   },
// });
