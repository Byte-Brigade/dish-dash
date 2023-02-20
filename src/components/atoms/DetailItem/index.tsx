import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { IconFavorite, IconShare, IconStar, PopDish2 } from "../../../assets";
import InputQty from "../InputQty";
import Button from "../Button";
import { colors } from "../../../utils";
import Gap from "../Gap";

interface DetailItemProps {
  data: { name: string; star: number; rating: number; price: number };
}

const DetailItem = ({ data }: DetailItemProps) => {
  const [qty, setQty] = useState(1);

  return (
    <View style={styles.container}>
      <Image style={styles.imageModal} source={PopDish2} />
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
  );
};

export default DetailItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
