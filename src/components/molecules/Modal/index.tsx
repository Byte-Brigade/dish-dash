import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { IconFavorite, IconShare, IconStar, PopDish2 } from "../../../assets";
import { colors } from "../../../utils";
import { Button, Gap, InputQty } from "../../atoms";

interface ModalsProps {
  visible: boolean;
  onClose: () => void;
  data?: { name: string; star: number; rating: number; price: number };
}

const ModalCustom = ({ visible, onClose, data }: ModalsProps) => {
  const [qty, setQty] = useState(1);

  if (!data) {
    return null;
  }
  return (
    <View>
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
          <Image style={styles.imageModal} source={PopDish2} />
          <View style={styles.border}>
            <View style={styles.line}></View>
          </View>
          <View style={styles.modalBody}>
            <View style={styles.titleContent}>
              <Text style={styles.title}>{data?.name}</Text>
              <View style={styles.rate}>
                <IconStar style={styles.star} />
                <Text style={styles.subtitle}>{data.star}</Text>
                <Gap width={4} />
                <Text style={styles.subtitle}>{data.rating}+ rating</Text>
              </View>
            </View>
            <Text style={styles.price}>{data.price}</Text>
            <View style={styles.actionWrapper}>
              <TouchableOpacity
                style={styles.action}
                onPress={() => alert("saved")}
              >
                <IconFavorite style={styles.icons} />
                <Text>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.action}
                onPress={() => alert("shared")}
              >
                <IconShare style={styles.icons} />
                <Text>Share</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.modalFooter}>
            <InputQty count={qty} />
            <Button type="btn-add-cart" onPress={() => alert("pressed")} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalCustom;

const styles = StyleSheet.create({
  modalContainer: {
    height: "70%",
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
  border: {
    width: "100%",
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    height: 5,
    width: 80,
    backgroundColor: colors.black1,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  imageModal: {
    width: "100%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    resizeMode: "cover",
  },
  modalBody: {
    padding: 16,
    flex: 1,
  },
  titleContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    maxWidth: "70%",
  },
  rate: {
    flexDirection: "row",
    alignItems: "center",
  },
  star: {
    padding: 10,
  },
  subtitle: {
    paddingStart: 4,
    fontSize: 14,
  },
  price: {
    fontSize: 14,
    paddingTop: 8,
  },
  actionWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 18,
  },
  action: {
    flexDirection: "row",
    alignItems: "center",
  },
  icons: {
    padding: 12,
    marginRight: 8,
  },
  modalFooter: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingVertical: 24,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
