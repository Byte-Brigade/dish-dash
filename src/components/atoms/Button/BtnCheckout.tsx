import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { IconCheckout } from "../../../assets";
import { colors } from "../../../utils";

interface BtnCheckoutProps {
  onPress: () => void;
  text?: string;
}

const BtnCheckout = ({ onPress, text }: BtnCheckoutProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
      <IconCheckout />
    </TouchableOpacity>
  );
};

export default BtnCheckout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 14.5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: colors.white,
    textAlign: "center",
    paddingEnd: 8,
  },
});
