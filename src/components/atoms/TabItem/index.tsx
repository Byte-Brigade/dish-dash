import React from "react";
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import {
  IconHomeMenuActive,
  IconCartMenu,
  IconLocationMenu,
  IconPromoMenu,
  IconHistoryMenu,
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
      return active ? <IconHomeMenuActive /> : <IconHomeMenuActive />;
    }
    if (title === "Cart") {
      return active ? <IconCartMenu /> : <IconCartMenu />;
    }
    if (title === "Promo") {
      return active ? <IconPromoMenu /> : <IconPromoMenu />;
    }
    if (title === "Riwayat") {
      return active ? <IconHistoryMenu /> : <IconHistoryMenu />;
    }
    return <IconHomeMenuActive />;
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
