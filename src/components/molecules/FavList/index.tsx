import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { IconAddNote, IconFavoriteActive, PopDish2 } from "../../../assets";
import { Divider, Gap, InputQty } from "../../atoms";
import { colors } from "../../../utils";

const FavList = () => {
  const [qty, setQty] = useState(1);

  const [addCart, setAddCart] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.content}>
          <Text style={styles.title}>Ayam Geprek Dada / Paha Atas Polos</Text>
          <Text style={styles.desc}>
            Ayam Geprek+Nasi+Sambal+Lalap+Tempe Orek
          </Text>
        </View>
        <Image source={PopDish2} style={styles.image} />
      </View>
      <View style={styles.priceWrapper}>
        <Text style={styles.price}>34.300</Text>
      </View>
      <Divider />
      <View style={styles.actionWrapper}>
        <TouchableOpacity>
          <IconFavoriteActive style={styles.iconFav} />
        </TouchableOpacity>
        <View style={styles.actionAdd}>
          {!addCart ? (
            <TouchableOpacity
              style={styles.button}
              onPress={() => setAddCart(!addCart)}
            >
              <Text style={styles.buttonText}>Add to cart</Text>
            </TouchableOpacity>
          ) : (
            <>
              <TouchableOpacity style={styles.button}>
                <IconAddNote style={styles.icon} />
                <Text style={styles.buttonText}>Note</Text>
              </TouchableOpacity>
              <Gap width={8} />
              <InputQty type="cart" count={qty} />
            </>
          )}
        </View>
      </View>
    </View>
  );
};

export default FavList;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  contentWrapper: {
    flexDirection: "row",
    padding: 16,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    width: 200,
    paddingBottom: 8,
  },
  desc: {
    fontSize: 12,
    fontWeight: "400",
    width: 234,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  priceWrapper: {
    paddingHorizontal: 16,
  },
  price: {
    fontSize: 14,
  },
  actionWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 16,
    justifyContent: "space-between",
  },
  iconFav: {
    padding: 12,
  },
  actionAdd: {
    flexDirection: "row",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.border,
  },
  buttonText: {
    fontWeight: "bold",
  },
  icon: {
    marginEnd: 5,
  },
});
