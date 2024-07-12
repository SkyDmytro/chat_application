import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  Button,
} from "react-native";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../core/store";
import { addChat } from "../core/reduxSlices/chatsSlice";
import { toggleDialogWindow } from "../core/reduxSlices/uiSlice";

const { width, height } = Dimensions.get("window");

export const AddChatDialogWindow = () => {
  const dispatch: AppDispatch = useDispatch();
  const [chatName, setChatName] = useState("");

  const handleAddChat = () => {
    if (chatName.trim() !== "") {
      dispatch(addChat(chatName));
      dispatch(toggleDialogWindow());
      setChatName("");
    }
  };

  return (
    <View style={styles.dialogContainer}>
      <Text style={styles.text}>Write the name of chat </Text>
      <TextInput
        style={styles.input}
        placeholder="Chat name"
        value={chatName}
        onChangeText={(text) => setChatName(text)}
      />
      <Button title="Create chat" onPress={handleAddChat} />
    </View>
  );
};

const styles = StyleSheet.create({
  dialogContainer: {
    zIndex: 999,
    position: "absolute",
    width: 300,
    height: 250,
    top: (height - 350) / 2,
    left: (width - 300) / 2,
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 8,
    elevation: 5,
  },
  text: {
    marginVertical: 20,
    fontSize: 18,
  },
  input: {
    width: "100%",
    marginBottom: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
});
