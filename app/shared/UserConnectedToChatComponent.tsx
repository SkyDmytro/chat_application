import { Text, TextInput, View, StyleSheet } from "react-native";
import React, { Component } from "react";
import { MessageBlock } from "./MessageBlock";
import { messageType } from "../core/types/chatTypes";
import { MessageSendButton } from "./MessageSendButton";

export const UserConnectedToChatComponent = ({
  chatId,
  messages,
}: {
  chatId: string;
  messages: messageType[] | [];
}) => {
  return (
    <>
      <MessageBlock messages={messages} />
      <View style={styles.bottomPart}>
        <TextInput
          style={styles.input}
          placeholder={"Write a message"}
          onChangeText={() => "dsa"}
          placeholderTextColor="#888"
        />
        <MessageSendButton onPress={() => {}} />
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
