import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IconStarRate, IconStarRateActive, PopDish1 } from "../../../assets";
import { colors } from "../../../utils";
import { Divider, Gap } from "../../atoms";

const HistoryList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.image} source={PopDish1} />
        <View style={styles.dishContent}>
          <Text style={styles.dishName}>Lalapan thea euuyyy</Text>
          <View style={styles.status}>
            <Text style={styles.orderDate}>11 Feb 2023, 14:05</Text>
            <View style={styles.dot} />
            <Text style={styles.orderStatus}>Selesai</Text>
          </View>
        </View>
      </View>
      <Divider />
      <View style={styles.price}>
        <View style={styles.total}>
          <Text style={styles.orderPrice}>34.300</Text>
          <Text style={styles.orderDisc}>Save 14.7rb</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.orderAgain}>Order Again</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ratingWrapper}>
        <View style={styles.rating}>
          <Text style={styles.rate}>Give us rating</Text>
          <View style={styles.starWrapper}>
            <IconStarRateActive style={styles.star} />
            <Gap width={16} />
            <IconStarRateActive style={styles.star} />
            <Gap width={16} />
            <IconStarRateActive style={styles.star} />
            <Gap width={16} />
            <IconStarRate style={styles.star} />
            <Gap width={16} />
            <IconStarRate style={styles.star} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HistoryList;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    paddingVertical: 16,
  },
  content: {
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  image: {
    height: 80,
    width: 100,
    borderRadius: 10,
  },
  dishContent: {
    paddingStart: 8,
  },
  dishName: {
    paddingBottom: 8,
    fontSize: 18,
    fontWeight: "600",
  },
  status: {
    flexDirection: "row",
    alignItems: "center",
  },
  orderDate: {
    fontSize: 12,
    fontWeight: "400",
  },
  dot: {
    width: 2,
    height: 2,
    backgroundColor: colors.dot.secondary,
    marginHorizontal: 8,
  },
  orderStatus: {
    fontSize: 12,
    color: colors.text.status,
  },
  price: {
    flexDirection: "row",
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "space-between",
  },
  total: {
    flexDirection: "row",
    alignItems: "center",
  },
  orderPrice: {
    fontSize: 16,
    fontWeight: "600",
    paddingEnd: 8,
  },
  orderDisc: {
    paddingHorizontal: 8,
    backgroundColor: colors.button.green,
    borderRadius: 20,
    fontSize: 12,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.border,
    alignSelf: "flex-end",
  },
  orderAgain: {
    fontWeight: "bold",
  },
  ratingWrapper: {
    flexDirection: "row",
    padding: 16,
  },
  rating: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.border,
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  rate: {
    fontSize: 16,
    fontWeight: "bold",
  },
  starWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  star: {
    padding: 10,
  },
});
