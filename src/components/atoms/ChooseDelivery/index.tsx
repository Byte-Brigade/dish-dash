import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { IconDelivery, IconPickup } from "../../../assets";
import { colors } from "../../../utils";

interface ChooseDeliveryProps {
  type: "delivery" | "pickup";
}

const ChooseDelivery = ({ type }: ChooseDeliveryProps) => {
  const Icon = () => {
    if (type === "delivery") {
      return <IconDelivery />;
    }
    if (type === "pickup") {
      return <IconPickup />;
    }
    return <IconDelivery />;
  };
  return (
    <View style={styles.container}>
      <View style={styles.iconOutline}>
        <Icon />
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>{type}</Text>
        <Text>Arrived in 27 min</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Change</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChooseDelivery;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  iconOutline: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: colors.button.green,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    paddingStart: 8,
    flex: 1,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.border,
  },
  buttonText: {
    fontWeight: "bold",
  },
  text: {
    textTransform: "capitalize",
  },
});
