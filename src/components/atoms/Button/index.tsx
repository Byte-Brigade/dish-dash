import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../../utils";
import BtnIconFav from "./BtnIconFav";

interface ButtonProps {
  type?: string;
  onPress: () => void;
}

const Button = ({ type, onPress }: ButtonProps) => {
  if (type === "btn-menu-fav") {
    return <BtnIconFav onPress={onPress} />;
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>Button Component!</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 10,
  },
  text: {
    fontSize: 16,
    color: colors.white,
    textAlign: "center",
  },
});
