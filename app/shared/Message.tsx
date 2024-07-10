import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { messageType } from "../core/types/chatTypes";
import { AvatarIcon } from "./AvatarIcon";

interface MessageProps {
  message: messageType;
  isCurrentUser: boolean;
}

const Message = ({ message, isCurrentUser }: MessageProps) => {
  return (
    <View
      style={[
        styles.messageContainer,
        isCurrentUser ? styles.currentUser : styles.otherUser,
      ]}
    >
      <AvatarIcon onPress={() => "12321"} text={message.sender.username} />
      <Text>{message.sender.username}</Text>
      <Text style={styles.messageText}>{message.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    maxWidth: "80%",
  },
  currentUser: {
    alignSelf: "flex-end",
    backgroundColor: "#DCF8C6",
  },
  otherUser: {
    alignSelf: "flex-start",
    backgroundColor: "#ECECEC",
  },
  messageText: {
    fontSize: 16,
  },
});

export default Message;
