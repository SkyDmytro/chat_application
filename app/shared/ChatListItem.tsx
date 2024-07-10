import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { chatType } from "../core/types/chatTypes";

interface chatListItemProps {
  chat: chatType;
}

export const ChatListItem = ({ chat }: chatListItemProps) => {
  const onPressFunction = () => {
    console.log(chat.id);
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
