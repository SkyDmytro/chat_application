import { RouteProp } from "@react-navigation/native";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { RootStackParamList } from "../../App";
import { useIsUserConnectedToChat } from "../core/hooks/useIsUserConnectedToChat";
import { AppDispatch, RootState } from "../core/store";
import { useGetMessagesFromChatByChatId } from "../core/hooks/useGetMessagesFromChatByChatId";
import { connectToChat } from "../core/reduxSlices/chatsSlice";
import { messageType } from "../core/types/chatTypes";
import { UserConnectedToChatComponent } from "../shared/UserConnectedToChatComponent";
import { UserIsntConnectedToChatComponent } from "../shared/UserIsntConnectedToChatComponent";

export type ChatScreenRouteProp = RouteProp<RootStackParamList, "Chat">;

interface ChatScreenProps {
  route: ChatScreenRouteProp;
}
const ChatScreen = ({ route }: ChatScreenProps) => {
  const { chatId } = route.params;
  const dispatch: AppDispatch = useDispatch();
  const [messages, setMessages] = useState(
    useGetMessagesFromChatByChatId(chatId)
  );
  const [isUserConnectedToCurrentChat, setIsUserConnectedToCurrentChat] =
    useState(useIsUserConnectedToChat(chatId));

  useEffect(() => {}, []);
  const handleConnectToChat = () => {
    dispatch(connectToChat(route.params.chatId));
    setIsUserConnectedToCurrentChat(true);
  };

  var ws = useRef(new WebSocket("wss://ws.postman-echo.com/raw")).current;

  const handleSend = (messageText: string) => {
    const newMessage = {
      sender: { id: "3", username: "Valeriy" },
      text: messageText,
      timeWhenSended: 12321321,
    };
    ws.send(JSON.stringify(newMessage));
    setMessages((state) => [newMessage, ...state]);
  };

  useEffect(() => {
    ws.onerror = (e: any) => {
      console.error(e.message);
    };
    ws.onmessage = (e) => {
      const { text, timeWhenSended }: messageType = JSON.parse(e.data);
      setMessages((state) => [
        { sender: { id: "1", username: "Dima" }, text, timeWhenSended },
        ...state,
      ]);
    };
    return () => {
      ws.close();
    };
  }, []);
  return (
    <View style={styles.container}>
      {isUserConnectedToCurrentChat ? (
        <UserConnectedToChatComponent
          chatId={chatId}
          messages={messages}
          onSendMessage={handleSend}
        />
      ) : (
        <UserIsntConnectedToChatComponent onPress={handleConnectToChat} />
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
