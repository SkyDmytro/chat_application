import React from "react";
import { chatType } from "../core/types/chatTypes";
import { View, StyleSheet } from "react-native";
import { ChatListItem } from "./ChatListItem";

interface chatList {
  chats: chatType[];
}

export const ChatList = ({ chats }: chatList) => {
  const handleDeleteChat = (chatId: string) => {
    console.log(chatId);
  };
  return (
    <View style={styles.container}>
      {chats.map((chat: chatType) => {
        return (
          <ChatListItem onDelete={handleDeleteChat} chat={chat} key={chat.id} />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 5,
    marginTop: 20,
    marginBottom: 20,
  },
});
