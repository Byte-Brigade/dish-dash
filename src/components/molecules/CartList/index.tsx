import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { IconAddNote, PopDish1 } from "../../../assets";
import { colors } from "../../../utils";
import { InputQty } from "../../atoms";

interface CartListProps {
  onNotePress: () => void;
}

const CartList = ({ onNotePress }: CartListProps) => {
  const [qty, setQty] = useState(1);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.cartText}>Nasi Kebuli</Text>
          <Text>16.000</Text>
        </View>
        <Image source={PopDish1} style={styles.image} />
      </View>
      <View style={styles.note}>
        <TouchableOpacity style={styles.button} onPress={onNotePress}>
          <IconAddNote style={styles.icon} />
          <Text style={styles.buttonText}>Note</Text>
        </TouchableOpacity>
        <InputQty type="cart" count={qty} />
      </View>
    </View>
  );
};

export default CartList;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: colors.border,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cartText: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: "cover",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.border,
  },
  buttonText: {
    fontWeight: "bold",
  },
  note: {
    flexDirection: "row",
    paddingTop: 16,
    justifyContent: "space-between",
  },
  icon: {
    marginEnd: 5,
  },
});
