import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../../utils";

const Divider = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
    </View>
  );
};

export default Divider;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  line: {
    borderTopWidth: 1,
    borderColor: colors.border,
  },
});
