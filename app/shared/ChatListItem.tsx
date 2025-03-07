import React, { useEffect } from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { useNavigationCustom } from "../core/hooks/useNavigationCustom";
import { useIsUserCreatedCurrentChat } from "../core/hooks/useIsUserCreatedCurrentChat";
import { useGetLastMessage } from "../core/hooks/useGetLastMessage";
import { chatType } from "../core/types/chatTypes";
import { AvatarIcon } from "./AvatarIcon";
import { DeleteIcon } from "./DeleteIconButton";

interface ChatListItemProps {
  chat: chatType;
  onDelete: (chatId: string) => void;
}

export const ChatListItem = ({ chat, onDelete }: ChatListItemProps) => {
  const { navigateToScreen } = useNavigationCustom();
  const isUserCreatedChat = useIsUserCreatedCurrentChat(chat.id);

  const lastMessage = useGetLastMessage(chat.id);

  const handleDeleteChat = () => {
    onDelete(chat.id);
  };

  const onPressFunction = () => {
    navigateToScreen("Chat", { chatId: chat.id, chatName: chat.chatName });
  };

  return (
    <Pressable onPress={onPressFunction}>
      <View style={styles.container}>
        <AvatarIcon text={chat.chatName} onPress={() => console.log(1321)} />
        <View style={styles.content}>
          <Text style={styles.text}>{chat.chatName}</Text>
          <Text>{lastMessage}</Text>
        </View>
        {isUserCreatedChat && (
          <DeleteIcon style={styles.deleteIcon} onPress={handleDeleteChat} />
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    padding: 10,
  },
  content: {
    flex: 1,
    marginLeft: 15,
  },
  text: {
    fontSize: 24,
  },
  deleteIcon: {
    marginLeft: "auto",
  },
});
