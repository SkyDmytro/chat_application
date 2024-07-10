import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

interface MessageSendButton {
  onPress: () => void;
}

export const MessageSendButton = ({ onPress }: MessageSendButton) => {
  const handlePress = () => {
    onPress();
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Icon name="send" size={18} color="black" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginHorizontal: 30,
  },
});
