import React from "react";
import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import { useNavigationCustom } from "../core/hooks/useNavigationCustom";

interface ErrorScreenProps {
  errorMessage: string;
  onRetry?: () => void;
}

export const ErrorComponent = ({ errorMessage }: ErrorScreenProps) => {
  const { navigateToScreen } = useNavigationCustom();

  const navigateOnHomePage = () => {
    navigateToScreen("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>{errorMessage}</Text>
      <Pressable onPress={navigateOnHomePage}>
        <Text style={styles.navigationText}>Home</Text>
      </Pressable>
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
  navigationText: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
