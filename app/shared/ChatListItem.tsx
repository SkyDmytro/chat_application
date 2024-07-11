import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import { chatType } from "../core/types/chatTypes";
import { useNavigationCustom } from "../core/hooks/useNavigationCustom";

import { AvatarIcon } from "./AvatarIcon";
import { useIsUserCreatedCurrentChat } from "../core/hooks/useIsUserCreatedCurrentChat";
import { DeleteIcon } from "./DeleteIconButton";

interface ChatListItemProps {
  chat: chatType;
  onDelete: (chatId: string) => void;
}

export const ChatListItem = ({ chat, onDelete }: ChatListItemProps) => {
  const { navigateToScreen } = useNavigationCustom();
  const isUserCreatedChat = useIsUserCreatedCurrentChat(chat.id);

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
        <View>
          <Text style={styles.text}>
            {chat.chatName +
              " " +
              chat.participants
                .map((participant) => participant.username)
                .join(", ")}
          </Text>
          <Text>Some Message</Text>
        </View>
        {isUserCreatedChat && <DeleteIcon onPress={handleDeleteChat} />}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    borderRadius: 8,
    padding: 10,
  },
  text: {
    fontSize: 24,
  },
});
