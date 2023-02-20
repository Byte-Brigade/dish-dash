import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../../utils";
import Button from "../Button";

interface InputAddNoteProps {
  onPress: () => void;
  value: string;
  onChangeText: (value: string) => void;
}

const InputAddNote = ({ onPress, value, onChangeText }: InputAddNoteProps) => {
  return (
    <View style={styles.contentContainer}>
      <View style={styles.header}>
        <Text style={styles.note}>Add note for Nasi Kebuli</Text>
      </View>
      <View style={styles.textArea}>
        <BottomSheetTextInput
          multiline
          numberOfLines={4}
          maxLength={200}
          onChangeText={onChangeText}
          value={value}
          placeholder="Example: Minta sambel sebaskom"
        />
      </View>
      <View style={styles.footer}>
        <Text>{value.length}/200</Text>
        <Button text="Save" onPress={onPress} />
      </View>
    </View>
  );
};

export default InputAddNote;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  header: {
    paddingTop: 24,
    paddingBottom: 8,
  },
  note: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textArea: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.border,
    borderStyle: "dashed",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    justifyContent: "space-between",
  },
});
