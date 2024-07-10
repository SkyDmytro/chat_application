import { Pressable, Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";

export const UserIsntConnectedToChatComponent = () => {
  return (
    <>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Connect to read messages</Text>
      </View>
      <View style={styles.bottomPart}>
        <Pressable style={styles.bottomPartConnectButton}>
          <Text style={styles.bottomPartText}>Connect to chat</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
  bottomPart: {
    position: "absolute",
    bottom: 0,
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
