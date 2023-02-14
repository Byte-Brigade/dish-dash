import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../../../utils";
import { IconCartWhite } from "../../../assets";

interface BtnIconTextProps {
  onPress: () => void;
}

const BtnIconText = ({ onPress }: BtnIconTextProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>Add to cart</Text>
      <IconCartWhite style={styles.icon} />
    </TouchableOpacity>
  );
};

export default BtnIconText;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black1,
    borderRadius: 5,
    padding: 10,
    flexDirection: "row",
  },
  text: {
    fontSize: 16,
    color: colors.white,
    textAlign: "center",
  },
  icon: {
    marginStart: 80,
  },
});
