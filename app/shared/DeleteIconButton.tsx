import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

interface DeleteIconProps {
  onPress: () => void;
}

export const DeleteIcon = ({ onPress }: DeleteIconProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name="trash" size={24} color="gray" />
    </TouchableOpacity>
  );
};
