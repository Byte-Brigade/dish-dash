import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../utils/colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { StackParams } from "../../router";

type CartProps = NativeStackScreenProps<StackParams, "Cart">;

const Cart = () => {
  return (
    <View style={styles.container}>
      <Text>Cart View!</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
