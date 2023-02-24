import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../../utils";
import CartHeader from "./CartHeader";
import FavoriteHeader from "./FavoriteHeader";
import HomeHeader from "./HomeHeader";

interface HeaderProps {
  onPress?: () => void;
  qty?: number;
  type?: string;
  name?: string;
}

const Header = ({ onPress, qty, type, name }: HeaderProps) => {
  if (type === "cart-header") {
    return <CartHeader onPress={onPress!!} />;
  }

  if (type === "home-header") {
    return <HomeHeader name={name!!} qty={qty} onPress={onPress!!} />;
  }

  if (type === "fav-header") {
    return <FavoriteHeader qty={qty} onPress={onPress!!} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </View>
  );
};

export default Header;

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
  },
  text: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.white,
  },
});
