import BottomSheet, {
  BottomSheetFooter,
  BottomSheetFooterProps,
} from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IconMore } from "../../../assets";
import { colors } from "../../../utils";
import { Button } from "../../atoms";

const CheckoutCard = () => {
  const sheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "54%"], []);

  // renders
  const renderFooter = useCallback(
    (props: BottomSheetFooterProps) => (
      <BottomSheetFooter {...props}>
        <View style={styles.checkout}>
          <View style={[styles.checkoutContent, styles.total]}>
            <Text style={styles.totalText}>Total Pembayaran</Text>
            <Text>Rp. 48.500</Text>
          </View>
          <View style={styles.checkoutContent}>
            <Text style={styles.paymentText}>Gopay</Text>
            <TouchableOpacity>
              <IconMore />
            </TouchableOpacity>
          </View>
          <View style={styles.checkoutButton}>
            <Button
              type="btn-checkout"
              text="Checkout Now"
              onPress={() => alert("a")}
            />
          </View>
        </View>
      </BottomSheetFooter>
    ),
    []
  );

  return (
    <BottomSheet
      ref={sheetRef}
      index={1}
      snapPoints={snapPoints}
      footerComponent={renderFooter}
      style={styles.bottomShadow}
    >
      <View style={styles.checkout}>
        <Text style={styles.title}>Payment Summary</Text>
        <View style={styles.description}>
          <Text>Harga</Text>
          <Text>32.000</Text>
        </View>
        <View style={styles.description}>
          <Text>Ongkir</Text>
          <Text>11.500</Text>
        </View>
        <View style={styles.description}>
          <Text>Biaya Layanan</Text>
          <Text>5.000</Text>
        </View>
        <View style={styles.line} />
        <Button
          type="btn-promo-code"
          text="Promo Code"
          onPress={() => alert("a")}
        />
      </View>
    </BottomSheet>
  );
};

export default CheckoutCard;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    marginBottom: 16,
  },
  description: {
    flexDirection: "row",
    marginBottom: 8,
    justifyContent: "space-between",
  },
  footerContainer: {
    padding: 12,
    margin: 12,
    borderRadius: 12,
    backgroundColor: "#80f",
  },
  footerText: {
    textAlign: "center",
    color: "white",
    fontWeight: "800",
  },
  bottomShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 10,
  },
  container: {
    flex: 1,
    padding: 45,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  checkout: {
    backgroundColor: colors.white,
    padding: 16,
  },
  line: {
    height: 1,
    width: 360,
    backgroundColor: colors.border,
    alignSelf: "center",
    marginVertical: 16,
  },
  checkoutContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  total: {
    paddingVertical: 16,
  },
  totalText: {
    fontWeight: "bold",
  },
  paymentText: {
    fontWeight: "bold",
  },
  checkoutButton: {
    paddingVertical: 16,
  },
});
