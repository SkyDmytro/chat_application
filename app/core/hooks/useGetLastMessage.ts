import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const useGetLastMessage = (chatId: string) => {
  const chats = useSelector((state: RootState) => state.chats.chats);
  const currentChat = chats.find((chat) => chat.id === chatId);
  if (currentChat?.messages.length === 0) {
    return "No mesages yet";
  }
  return currentChat?.messages[currentChat.messages.length - 1].text;
};
