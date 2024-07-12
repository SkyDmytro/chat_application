import { Text, TextInput, View, StyleSheet } from "react-native";
import React, { Component, useState } from "react";
import { MessageBlock } from "./MessageBlock";
import { messageType } from "../core/types/chatTypes";
import { MessageSendButton } from "./MessageSendButton";

export const UserConnectedToChatComponent = ({
  chatId,
  messages,
  onSendMessage,
}: {
  onSendMessage: (message: string) => void;
  chatId: string;
  messages: messageType[] | [];
}) => {
  const [inputText, setInputText] = useState(" ");
  const handleTextChange = (text: string) => {
    setInputText(text);
  };
  const handleSendMessage = () => {
    onSendMessage(inputText);
    setInputText("");
  };
  return (
    <>
      <MessageBlock messages={messages} />
      <View style={styles.bottomPart}>
        <TextInput
          value={inputText}
          style={styles.input}
          placeholder={"Write a message"}
          onChangeText={handleTextChange}
          placeholderTextColor="#888"
        />
        <MessageSendButton onPress={handleSendMessage} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingTop: 5,
    marginLeft: 10,
    fontSize: 18,
    color: "#333",
    flex: 1,
  },
  bottomPart: {
    position: "absolute",
    bottom: 0,
    paddingTop: 5,
    height: 50,
    width: "100%",
    borderTopColor: "blue",
    borderTopWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
