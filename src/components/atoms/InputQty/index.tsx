import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React, { useState } from "react";
import { IconMinusBlack, IconPlusBlack } from "../../../assets";
import { colors } from "../../../utils";

interface InputQtyProps {
  count: number;
  type?: string;
}

const InputQty = ({ count, type }: InputQtyProps) => {
  const [qty, setQty] = useState(count);

  const plusQtyHandler = () => {
    if (qty < 10) setQty(qty + 1);
  };

  const minusQtyHandler = () => {
    if (qty > 0) setQty(qty - 1);
  };

  return (
    <View style={{ ...styles({ type }).container }}>
      <TouchableOpacity
        style={{ ...styles({ type }).icon }}
        onPress={minusQtyHandler}
      >
        <IconMinusBlack />
      </TouchableOpacity>
      <Text style={{ ...styles({ type }).text }}>{qty}</Text>
      <TouchableOpacity
        style={{ ...styles({ type }).icon }}
        onPress={plusQtyHandler}
      >
        <IconPlusBlack />
      </TouchableOpacity>
    </View>
  );
};

export default InputQty;

interface StyleProps {
  type?: string;
}

const styles = ({ type }: StyleProps) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: type === "cart" ? colors.white : colors.border,
      borderRadius: 5,
      borderWidth: type === "cart" ? 1 : 0,
      borderColor: type === "cart" ? colors.border : "none",
    },
    icon: {
      marginHorizontal: 5,
      padding: 10,
    },
    text: {
      marginHorizontal: type === "cart" ? 4 : 14,
    },
  });
