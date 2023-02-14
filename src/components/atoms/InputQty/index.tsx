import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { IconMinusBlack, IconPlusBlack } from "../../../assets";
import { colors } from "../../../utils";

interface InputQtyProps {
  count: number;
}

const InputQty = ({ count }: InputQtyProps) => {
  const [qty, setQty] = useState(count);

  const plusQtyHandler = () => {
    if (qty < 10) setQty(qty + 1);
  };

  const minusQtyHandler = () => {
    if (qty > 0) setQty(qty - 1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon} onPress={minusQtyHandler}>
        <IconMinusBlack />
      </TouchableOpacity>
      <Text style={styles.text}>{qty}</Text>
      <TouchableOpacity style={styles.icon} onPress={plusQtyHandler}>
        <IconPlusBlack />
      </TouchableOpacity>
    </View>
  );
};

export default InputQty;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.border,
    borderRadius: 5,
  },
  icon: {
    marginHorizontal: 5,
    padding: 10,
  },
  text: {
    marginHorizontal: 14,
  },
});
