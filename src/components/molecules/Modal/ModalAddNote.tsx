import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../../../utils";
import { Button } from "../../atoms";

interface ModalAddNoteProps {
  visible: boolean;
  onClose: () => void;
  onPress: () => void;
}

const ModalAddNote = ({ onPress, onClose, visible }: ModalAddNoteProps) => {
  const [value, onChangeText] = useState("");

  return (
    <Modal
      animationType="slide"
      visible={visible}
      transparent={true}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay} />
      </TouchableWithoutFeedback>
      <View style={styles.modalContainer}>
        <View style={styles.container}>
          <View style={styles.line} />
          <View style={styles.header}>
            <Text style={styles.note}>Add note for Nasi Kebuli</Text>
          </View>
          <View style={styles.textArea}>
            <TextInput
              editable
              multiline
              numberOfLines={4}
              maxLength={200}
              onChangeText={(value) => onChangeText(value)}
              value={value}
              placeholder="Example: Minta sambel sebaskom"
            />
          </View>
          <View style={styles.footer}>
            <Text>{value.length}/200</Text>
            <Button text="Save" onPress={onPress} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalAddNote;

const styles = StyleSheet.create({
  modalContainer: {
    height: "30%",
    width: "100%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    position: "absolute",
    bottom: 0,
    backgroundColor: colors.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.shadow,
  },
  container: {
    padding: 16,
    flex: 1,
  },
  line: {
    height: 3,
    width: 80,
    backgroundColor: colors.black1,
    borderRadius: 10,
    alignSelf: "center",
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
