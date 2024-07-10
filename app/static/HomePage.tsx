import React from "react";
import { Text, View } from "react-native";
import { StyledView } from "../shared/StyledView";
import { LayoutBottomTabNavigation } from "../shared/LayoutBottomTabNavigation";
import { NavigationProp, ParamListBase } from "@react-navigation/native";

interface HomePageProps {
  navigation: NavigationProp<ParamListBase>;
}

export default function HomePage({ navigation }: HomePageProps) {
  return (
    <LayoutBottomTabNavigation navigation={navigation}>
      <View>
        <StyledView />
        <StyledView />
        <StyledView />
        <StyledView />
        <StyledView />
        <StyledView />
      </View>
    </LayoutBottomTabNavigation>
  );
}
