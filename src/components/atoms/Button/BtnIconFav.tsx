import React from "react";
import { TouchableOpacity } from "react-native";
import { IconFavMenu } from "../../../assets";

interface BtnIconFavProps {
  onPress: () => void;
}

const BtnIconFav = ({ onPress }: BtnIconFavProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <IconFavMenu />
    </TouchableOpacity>
  );
};

export default BtnIconFav;
