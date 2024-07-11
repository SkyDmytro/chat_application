import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { messageType } from "../core/types/chatTypes";
import { AvatarIcon } from "./AvatarIcon";

interface MessageProps {
  message: messageType;
  isCurrentUser: boolean;
}

export const Message = ({ message, isCurrentUser }: MessageProps) => {
  return (
    <View
      style={[
        styles.messageContainer,
        isCurrentUser ? styles.currentUserPosition : styles.otherUserPosition,
      ]}
    >
      <AvatarIcon onPress={() => "12321"} text={message.sender.username} />
      <View
        style={[
          isCurrentUser ? styles.currentUserColor : styles.otherUserColor,
          styles.message,
        ]}
      >
        {!isCurrentUser && (
          <Text style={styles.messageHeader}>{message.sender.username}</Text>
        )}
        <Text style={styles.messageText}>{message.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "80%",
    gap: 5,
    margin: 10,
  },
  currentUserPosition: {
    alignSelf: "flex-end",
  },
  currentUserColor: {
    backgroundColor: "skyblue",
  },
  otherUserPosition: {
    alignSelf: "flex-start",
  },
  otherUserColor: {
    backgroundColor: "#ECECEC",
  },
  message: {
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  messageHeader: {
    fontSize: 18,
    fontWeight: "bold",
  },
  messageText: {
    fontSize: 16,
  },
});
