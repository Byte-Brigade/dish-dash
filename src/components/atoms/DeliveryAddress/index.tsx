import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { colors } from "../../../utils";
import { IconAddNote } from "../../../assets";

const DeliveryAddress = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.addressContent}>
          <Text>Alamat Pengantaran</Text>
          <Text style={styles.addressText}>Gg. Nuri</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Address</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.note}>
        <TouchableOpacity style={styles.button}>
          <IconAddNote style={styles.icon} />
          <Text style={styles.buttonText}>Note</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DeliveryAddress;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  addressContent: {
    flex: 1,
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
  addressText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  note: {
    alignSelf: "flex-start",
    paddingTop: 16,
  },
  icon: {
    marginEnd: 5,
  },
});
