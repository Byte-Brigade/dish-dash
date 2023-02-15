import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { IconMore } from "../../../assets";
import { Button } from "../../atoms";
import { colors } from "../../../utils";

const CheckoutCard = () => {
  return (
    <View style={styles.checkout}>
      <View style={styles.line} />
      <View style={[styles.checkoutContent, styles.total]}>
        <Text style={styles.totalText}>Total Pembayaran</Text>
        <Text>Rp. 48.500</Text>
      </View>
      <View style={styles.checkoutContent}>
        <Text style={styles.paymentText}>Gopay</Text>
        <TouchableOpacity>
          <IconMore />
        </TouchableOpacity>
      </View>
      <View style={styles.checkoutButton}>
        <Button
          type="btn-checkout"
          text="Checkout Now"
          onPress={() => alert("a")}
        />
      </View>
    </View>
  );
};

export default CheckoutCard;

const styles = StyleSheet.create({
  checkout: {
    backgroundColor: colors.white,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    elevation: 5,
  },
  line: {
    height: 3,
    width: 80,
    backgroundColor: colors.black1,
    borderRadius: 10,
    alignSelf: "center",
  },
  checkoutContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  total: {
    paddingVertical: 16,
  },
  totalText: {
    fontWeight: "bold",
  },
  paymentText: {
    fontWeight: "bold",
  },
  checkoutButton: {
    paddingVertical: 16,
  },
});
