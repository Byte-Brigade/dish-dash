import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Gap } from "../../atoms";
import { colors } from "../../../utils";

interface FavoriteHeaderProps {
  onPress: () => void;
  qty?: number;
}

const FavoriteHeader = ({ onPress, qty }: FavoriteHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Favorite</Text>
        <Button type="btn-menu-cart" onPress={onPress} qty={qty} />
      </View>
    </View>
  );
};

export default FavoriteHeader;

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
  },
  text: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.white,
  },
});
