import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../../../utils";
import { IconClose } from "../../../assets";

interface CartHeaderProps {
  onPress: () => void;
}

const CartHeader = ({ onPress }: CartHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Cart</Text>
        <TouchableOpacity onPress={onPress}>
          <IconClose />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartHeader;

const styles = StyleSheet.create({
  container: {
    height: 81,
    backgroundColor: colors.primary,
    paddingTop: 30,
    padding: 16,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.white,
  },
});
