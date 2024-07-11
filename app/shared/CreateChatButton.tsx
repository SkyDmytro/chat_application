import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

interface CreateChatButtonProps {
  onPress: () => void;
  isDialogOpened: boolean;
}

export const CreateChatButton = ({
  onPress,
  isDialogOpened,
}: CreateChatButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      {isDialogOpened ? (
        <>
          <Icon name="close" size={24} color="#fff" />
          <Text style={styles.text}>Close</Text>
        </>
      ) : (
        <>
          <Icon name="add" size={24} color="#fff" />
          <Text style={styles.text}>Add</Text>
        </>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  pressed: {
    backgroundColor: "#0056b3",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 5,
  },
});
