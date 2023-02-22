import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, Gap, SearchInput } from "../../atoms";
import { colors } from "../../../utils";

interface HomeHeaderProps {
  onPress: () => void;
  qty?: number;
}

const HomeHeader = ({ onPress, qty }: HomeHeaderProps) => {
  const [search, setSearch] = useState("");
  return (
    <View style={styles.container}>
      <Gap height={30} />
      <View style={styles.content}>
        <Text style={styles.text}>DishDash</Text>
        <Button type="btn-menu-cart" onPress={onPress} qty={qty} />
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

export default HomeHeader;

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
