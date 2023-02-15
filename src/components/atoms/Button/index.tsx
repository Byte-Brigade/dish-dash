import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../../utils";
import BtnIconCart from "./BtnIconCart";
import BtnIconText from "./BtnIconText";

interface ButtonProps {
  type?: string;
  onPress: () => void;
  text?: string;
  qty?: number;
}

const Button = ({ type, onPress, text, qty }: ButtonProps) => {
  if (type === "btn-menu-cart") {
    return <BtnIconCart onPress={onPress} qty={qty} />;
  }
  if (type === "btn-add-cart") {
    return <BtnIconText onPress={onPress} />;
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
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
