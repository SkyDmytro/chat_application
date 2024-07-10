import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Импортируем FontAwesome
import { chatType } from "../core/types/chatTypes";

interface SearchBarProps {
  placeholder?: string;
  chats: chatType[];
  onFilterChats: (filteredChats: chatType[] | []) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search",
  chats,
  onFilterChats,
}) => {
  const handleInputChange = (searchText: string) => {
    console.log(searchText);
    const filteredChats = chats.filter((chat) =>
      chat.chatName.toLowerCase().includes(searchText.toLowerCase())
    );
    onFilterChats(filteredChats);
  };
  return (
    <View style={styles.container}>
      <FontAwesome name="search" size={20} color="#888" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={handleInputChange}
        placeholderTextColor="#888"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
  icon: {
    marginRight: 10,
  },
});
