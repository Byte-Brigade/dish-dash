import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";
import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import {
  CartList,
  CheckoutCard,
  ChooseDelivery,
  Divider,
  Header,
  InputAddNote,
  InputOrderType,
} from "../../components";
import DeliveryAddress from "../../components/atoms/DeliveryAddress";
import { StackParams } from "../../router";
import { colors } from "../../utils/colors";

type CartProps = NativeStackScreenProps<StackParams, "Cart">;

const Cart = ({ navigation }: CartProps) => {
  const [deliveryType, setDeliveryType] = useState<"delivery" | "pickup">(
    "delivery"
  );

  const [modalType, setModalType] = useState<"delivery" | "note">("note");

  const [value, onChangeText] = useState("");

  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ["35%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  const handleClosePress = () => bottomSheetModalRef.current?.close();

  // backdrop
  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
      />
    ),
    []
  );

  return (
    <BottomSheetModalProvider>
      <View style={styles.page}>
        <Header type="cart-header" onPress={() => navigation.pop()} />
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <ChooseDelivery
            type={deliveryType}
            onPress={() => {
              handlePresentModalPress();
              setModalType("delivery");
            }}
          />
          <Divider />
          {deliveryType === "delivery" ? <DeliveryAddress /> : <></>}
          <View style={styles.cartContent}>
            <CartList
              onNotePress={() => {
                handlePresentModalPress();
                setModalType("note");
              }}
            />
            <CartList
              onNotePress={() => {
                handlePresentModalPress();
                setModalType("note");
              }}
            />
            <CartList
              onNotePress={() => {
                handlePresentModalPress();
                setModalType("note");
              }}
            />
            <CartList
              onNotePress={() => {
                handlePresentModalPress();
                setModalType("note");
              }}
            />
          </View>
        </ScrollView>
        <CheckoutCard />
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          backdropComponent={renderBackdrop}
          keyboardBehavior="interactive"
          keyboardBlurBehavior="restore"
          onChange={handleSheetChanges}
        >
          {modalType === "delivery" ? (
            <InputOrderType
              onPickupPress={() => setDeliveryType("pickup")}
              onDeliveryPress={() => setDeliveryType("delivery")}
              type={deliveryType}
            />
          ) : (
            <InputAddNote
              value={value}
              onChangeText={(value) => onChangeText(value)}
              onPress={handleClosePress}
            />
          )}
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
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
