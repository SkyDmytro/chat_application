import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { chatType } from "../core/types/chatTypes";
import { useNavigationCustom } from "../core/hooks/useNavigationCustom";

interface ChatListItemProps {
  chat: chatType;
}

export const ChatListItem = ({ chat }: ChatListItemProps) => {
  const { navigateToScreen } = useNavigationCustom();

  const onPressFunction = () => {
    navigateToScreen("Chat", { chatId: chat.id, chatName: chat.chatName });
  };

  return (
    <Pressable onPress={onPressFunction}>
      <View style={styles.container}>
        <Text style={styles.text}>{chat.chatName}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    borderStyle: "solid",
    padding: 10,
  },
  text: {
    fontSize: 24,
  },
});
