import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  IconFavMenu,
  IconFavMenuActive,
  IconHistoryMenu,
  IconHistoryMenuActive,
  IconHomeMenu,
  IconHomeMenuActive,
  IconPromoMenu,
  IconPromoMenuActive,
} from "../../../assets";
import { colors } from "../../../utils";

interface TabItemProps {
  title: string;
  active: boolean;
  onPress: () => void;
  onLongPress: () => void;
}

const TabItem = ({ title, active, onPress, onLongPress }: TabItemProps) => {
  const Icon = () => {
    if (title === "Home") {
      return active ? <IconHomeMenuActive /> : <IconHomeMenu />;
    }
    if (title === "Promo") {
      return active ? <IconPromoMenuActive /> : <IconPromoMenu />;
    }
    if (title === "Favorite") {
      return active ? <IconFavMenuActive /> : <IconFavMenu />;
    }
    if (title === "History") {
      return active ? <IconHistoryMenuActive /> : <IconHistoryMenu />;
    }
    return <IconHomeMenu />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Icon />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    color: colors.text.primary,
    fontSize: 10,
    marginTop: 4,
  },
});
