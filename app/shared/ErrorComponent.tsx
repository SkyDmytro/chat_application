import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

interface ErrorScreenProps {
  errorMessage: string;
  onRetry?: () => void;
}

export const ErrorScreen = ({ errorMessage }: ErrorScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{errorMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: "red",
    marginBottom: 20,
    textAlign: "center",
  },
});
