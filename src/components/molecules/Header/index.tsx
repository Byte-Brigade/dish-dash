import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../../../utils";
import { Button, Gap, SearchInput } from "../../atoms";

const Header = () => {
  const [search, setSearch] = useState("");

  const toast = () => {
    ToastAndroid.show("Pressed!", ToastAndroid.SHORT);
  };

  return (
    <View style={styles.container}>
      <Gap height={30} />
      <View style={styles.content}>
        <Text style={styles.text}>DishDash</Text>
        <TouchableOpacity>
          <Button type="btn-menu-fav" onPress={toast} />
        </TouchableOpacity>
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
