import React from "react";
import { Avatar, AvatarProps } from "react-native-elements";

type AvatarIconProps = {
  onPress: () => void;
  text: string;
} & AvatarProps;

export const AvatarIcon = ({ onPress, text, ...props }: AvatarIconProps) => {
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
      overlayContainerStyle={{ backgroundColor: "#ccc" }}
      onPress={onPress}
      activeOpacity={0.7}
      {...props}
    />
  );
};
