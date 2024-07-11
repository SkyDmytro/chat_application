import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

type DeleteIconProps = {
  onPress: () => void;
} & TouchableOpacityProps;

export const DeleteIcon = ({ onPress, ...props }: DeleteIconProps) => {
  return (
    <TouchableOpacity onPress={onPress} {...props}>
      <Icon name="trash" size={24} color="gray" />
    </TouchableOpacity>
  );
};
