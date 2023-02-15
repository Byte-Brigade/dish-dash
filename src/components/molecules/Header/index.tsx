import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../../utils";
import { Button, Gap, SearchInput } from "../../atoms";
import CartHeader from "./CartHeader";

interface HeaderProps {
  onPress?: () => void;
  qty?: number;
  type?: string;
}

const Header = ({ onPress, qty, type }: HeaderProps) => {
  const [search, setSearch] = useState("");

  if (type === "cart-header") {
    return <CartHeader onPress={onPress!!} />;
  }

  return (
    <View style={styles.container}>
      <Gap height={30} />
      <View style={styles.content}>
        <Text style={styles.text}>DishDash</Text>
        <Button type="btn-menu-cart" onPress={onPress!!} qty={qty} />
      </View>
      <Gap height={16} />
      <SearchInput
        value={search}
        onChangeText={(value) => setSearch(value)}
        placeholder="Search your cravings"
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 167,
    backgroundColor: colors.primary,
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
