import { RouteProp } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RootStackParamList } from "../../App";

export type ChatScreenRouteProp = RouteProp<RootStackParamList, "Chat">;

interface ChatScreenProps {
  route: ChatScreenRouteProp;
}
const ChatScreen = ({ route }: ChatScreenProps) => {
  const { chatId } = route.params;
  return (
    <View style={styles.container}>
      <Text>Chat Screen</Text>
      <Text>Chat ID: {chatId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChatScreen;
