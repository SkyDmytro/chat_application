import { NavigationProp, ParamListBase } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Button } from "react-native";

interface LayoutProps {
  children: React.JSX.Element;
  navigation: NavigationProp<ParamListBase>;
}

export const LayoutBottomTabNavigation = ({
  children,
  navigation,
}: LayoutProps) => {
  const goToHomeScreen = () => navigation.navigate("Home");
  const goToProfileScreen = () => navigation.navigate("Profile");
  return (
    <View style={styles.screen}>
      {children}
      <View style={styles.buttonContainer}>
        <Button title="Home" onPress={goToHomeScreen} />
        <Button title="Profile" onPress={goToProfileScreen} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    fontSize: 24,
    paddingTop: 40,
    margin: 10,
    flex: 1,
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonContainer: {
    position: "static",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingBottom: 20,
  },
});
