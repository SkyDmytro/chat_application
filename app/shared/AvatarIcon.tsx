import React from "react";
import { Avatar, AvatarProps } from "react-native-elements";
import { getRandomAvatar } from "../helpers/functions";

type AvatarIconProps = {
  onPress: () => void;
  text: string;
} & AvatarProps;

export const AvatarIcon = ({ onPress, text, ...props }: AvatarIconProps) => {
  const avatar = getRandomAvatar();
  // const getInitials = (text: string) => {
  //   const names = text.split(" ");
  //   const initials = names.map((name) => name.charAt(0)).join("");
  //   return initials.toUpperCase();
  // };

  return (
    <Avatar
      rounded
      source={{ uri: avatar }}
      size="medium"
      overlayContainerStyle={{ backgroundColor: "#ccc" }}
      onPress={onPress}
      activeOpacity={0.7}
      {...props}
    />
  );
};
