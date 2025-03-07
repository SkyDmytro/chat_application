import React from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { chatType } from "../core/types/chatTypes";
import { ChatListItem } from "./ChatListItem";
import { AppDispatch } from "../core/store";
import { deleteChat } from "../core/reduxSlices/chatsSlice";

interface chatList {
  chats: chatType[];
}

export const ChatList = ({ chats }: chatList) => {
  const dispatch: AppDispatch = useDispatch();
  const handleDeleteChat = (chatId: string) => {
    dispatch(deleteChat(chatId));
  };
  return (
    <View style={styles.container}>
      {chats.map((chat: chatType, index: number) => {
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
