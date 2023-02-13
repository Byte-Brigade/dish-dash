import {
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../../../utils";
import { IconSearch } from "../../../assets";

interface InputProps {
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
}

const SearchInput = ({ value, onChangeText, placeholder }: InputProps) => {
  const [icon, setIcon] = useState(true);

  const onFocusForm = () => {
    setIcon(false);
  };

  const onBlurForm = () => {
    setIcon(true);
  };

  const Icon = () => {
    return icon ? <IconSearch style={styles.icon} /> : <></>;
  };

  return (
    <View style={styles.container}>
      <Icon />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.text.input}
        onFocus={onFocusForm}
        onBlur={onBlurForm}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.input,
    borderRadius: 10,
    padding: 12,
  },
  icon: {
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
  input: {
    flex: 1,
    paddingStart: 14,
    backgroundColor: colors.input,
    color: colors.text.input,
  },
});
