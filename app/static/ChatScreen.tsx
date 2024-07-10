import { RouteProp } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { RootStackParamList } from "../../App";
import { useIsUserConnectedToChat } from "../core/hooks/useIsUserConnectedToChat";
import { UserConnectedToChatComponent } from "../shared/UserConnectedToChatComponent";
import { UserIsntConnectedToChatComponent } from "../shared/UserIsntConnectedToChatComponent";
import { useSelector } from "react-redux";
import { RootState } from "../core/store";
import { useGetMessagesFromChatByChatId } from "../core/hooks/useGetMessagesFromChatByChatId";

export type ChatScreenRouteProp = RouteProp<RootStackParamList, "Chat">;

interface ChatScreenProps {
  route: ChatScreenRouteProp;
}
const ChatScreen = ({ route }: ChatScreenProps) => {
  const { chatId } = route.params;
  const isUserConnectedToCurrentChat = useIsUserConnectedToChat(chatId);
  const messages = useGetMessagesFromChatByChatId(chatId);
  return (
    <View style={styles.container}>
      {isUserConnectedToCurrentChat ? (
        <UserConnectedToChatComponent chatId={chatId} messages={messages}/>
      ) : (
        <UserIsntConnectedToChatComponent />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 60,
  },
  input: {
    width: "100%",
    paddingTop: 5,
    marginLeft: 10,
    fontSize: 18,
    color: "#333",
  },
  bottomPart: {
    paddingTop: 5,
    height: 50,
    width: "100%",
    borderTopColor: "blue",
    borderTopWidth: 1,
  },
  bottomPartText: {
    fontSize: 20,
  },
  bottomPartConnectButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChatScreen;
