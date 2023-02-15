import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import { IconMore } from "../../assets";
import {
  Button,
  CartList,
  CheckoutCard,
  ChooseDelivery,
  Divider,
  Header,
  ModalCustom,
} from "../../components";
import DeliveryAddress from "../../components/atoms/DeliveryAddress";
import { StackParams } from "../../router";
import { colors } from "../../utils/colors";

type CartProps = NativeStackScreenProps<StackParams, "Cart">;

const Cart = ({ navigation }: CartProps) => {
  const [deliveryType, setDeliveryType] = useState<"delivery" | "pickup">(
    "delivery"
  );

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.page}>
      <Header type="cart-header" onPress={() => navigation.pop()} />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <ChooseDelivery type={deliveryType} />
        <Divider />
        {deliveryType === "delivery" ? <DeliveryAddress /> : <></>}
        <View style={styles.cartContent}>
          <CartList onNotePress={() => setModalVisible(!modalVisible)} />
          <CartList onNotePress={() => setModalVisible(!modalVisible)} />
          <CartList onNotePress={() => setModalVisible(!modalVisible)} />
          <CartList onNotePress={() => setModalVisible(!modalVisible)} />
        </View>
      </ScrollView>
      <CheckoutCard />
      <GestureRecognizer onSwipeDown={() => setModalVisible(!modalVisible)}>
        <ModalCustom
          type="modal-cart-note"
          visible={modalVisible}
          onClose={() => setModalVisible(!modalVisible)}
        />
      </GestureRecognizer>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    paddingVertical: 16,
  },
  cartContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});
