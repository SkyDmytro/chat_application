import { RouteProp } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { RootStackParamList } from "../../App";
import { useIsUserConnectedToChat } from "../core/hooks/useIsUserConnectedToChat";

export type ChatScreenRouteProp = RouteProp<RootStackParamList, "Chat">;

interface ChatScreenProps {
  route: ChatScreenRouteProp;
}
const ChatScreen = ({ route }: ChatScreenProps) => {
  const { chatId } = route.params;
  const isUserConnectedToCurrentChat = useIsUserConnectedToChat(chatId);
  return (
    <View style={styles.container}>
      <Text>Chat Screen</Text>
      <Text>Chat ID: {chatId}</Text>
      <View style={styles.bottomPart}>
        {isUserConnectedToCurrentChat ? (
          <TextInput
            style={styles.input}
            placeholder={"Write a message"}
            onChangeText={() => "dsa"}
            placeholderTextColor="#888"
          />
        ) : (
          <Pressable>
            <Text>Connect to chat</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  input: {
    width: "100%",
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
  bottomPart: {
    height: 50,
    display: "flex",
    justifyContent: "center",
    fontSize: 24,
  },
});

export default ChatScreen;
