import React from "react";
import { Avatar } from "react-native-elements";

interface AvatarIconProps {
  onPress: () => void;
  text: string;
}

export const AvatarIcon = ({ onPress, text }: AvatarIconProps) => {
  const getInitials = (text: string) => {
    const names = text.split(" ");
    const initials = names.map((name) => name.charAt(0)).join("");
    return initials.toUpperCase();
  };
  return (
    <Avatar
      rounded
      title={getInitials(text)}
      size="medium"
      // icon={{ name: "user", type: "font-awesome" }}
      overlayContainerStyle={{ backgroundColor: "#ccc" }}
      onPress={onPress}
      activeOpacity={0.7}
    />
  );
};
