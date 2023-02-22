import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  IconDelivery,
  IconPickup,
  IconRadioButton,
  IconRadioButtonActive,
} from "../../../assets";
import { colors } from "../../../utils";
import Divider from "../Divider";

interface InputOrderTypeProps {
  onDeliveryPress?: () => void;
  onPickupPress?: () => void;
  type: string;
}

const InputOrderType = ({
  onDeliveryPress,
  onPickupPress,
  type,
}: InputOrderTypeProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose order type</Text>
      <TouchableOpacity
        style={styles.contentWrapper}
        onPress={onDeliveryPress!!}
      >
        <View style={styles.iconOutline}>
          <IconDelivery />
        </View>
        <View style={styles.content}>
          <Text>Delivery</Text>
          <Text>Arrived in 27 min</Text>
        </View>
        <View>
          {type === "delivery" ? (
            <IconRadioButtonActive />
          ) : (
            <IconRadioButton />
          )}
        </View>
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity style={styles.contentWrapper} onPress={onPickupPress!!}>
        <View style={styles.iconOutline}>
          <IconPickup />
        </View>
        <View style={styles.content}>
          <Text>Pickup</Text>
          <Text>Ready to take in 8 min</Text>
        </View>
        <View>
          {type === "pickup" ? <IconRadioButtonActive /> : <IconRadioButton />}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InputOrderType;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 16,
  },
  contentWrapper: {
    flexDirection: "row",
    alignItems: "center",
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
    paddingStart: 12,
    flex: 1,
  },
});
