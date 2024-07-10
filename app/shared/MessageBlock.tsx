import { Text, StyleSheet, View, ScrollView, FlatList } from "react-native";
import React, { Component, useEffect, useRef } from "react";
import { messageType } from "../core/types/chatTypes";
import Message from "./Message";
import { useSelector } from "react-redux";
import { RootState } from "../core/store";

interface MessageBlockProps {
  messages: messageType[];
}

export const MessageBlock = ({ messages }: MessageBlockProps) => {
  const currentUserId = useSelector(
    (state: RootState) => state.settings.currentUserId
  );
  const renderItem = ({ item }: { item: messageType }) => (
    <Message message={item} isCurrentUser={item.sender.id === currentUserId} />
  );
  return (
    <FlatList
      inverted
      data={messages}
      renderItem={renderItem}
      style={styles.flatList}
    >
      <Text>MessageBlock</Text>
    </FlatList>
  );
};

const styles = StyleSheet.create({
  flatList: {
    width: "100%",
  },
});
