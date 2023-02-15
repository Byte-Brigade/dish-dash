import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { IconCartMenuActive } from "../../../assets";
import { colors } from "../../../utils";

interface BtnIconCartProps {
  onPress: () => void;
  qty?: number;
}

const BtnIconCart = ({ onPress, qty }: BtnIconCartProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <IconCartMenuActive />
      {qty ? <Text style={styles.text}>{qty}</Text> : <></>}
    </TouchableOpacity>
  );
};

export default BtnIconCart;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.button.green,
    borderRadius: 5,
    paddingVertical: 7.5,
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 14,
    color: colors.text.primary,
    paddingStart: 4,
  },
});
