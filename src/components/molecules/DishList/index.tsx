import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { IconFavorite, IconStar } from "../../../assets";
import { colors } from "../../../utils";

interface DishListProps {
  pic: any;
  name: string;
  stars: number;
  rating: number;
}

const DishList = ({ pic, name, stars, rating }: DishListProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={pic} style={styles.pic} />
      <TouchableOpacity style={styles.addFavWrapper}>
        <IconFavorite style={styles.addFav} />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.text}>{name}</Text>
        <View style={styles.rate}>
          <IconStar />
          <Text style={styles.subtitle}>{stars}</Text>
          <View style={styles.dot}></View>
          <Text style={styles.subtitle}>{rating}+ rating</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DishList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: 162,
    maxWidth: 162,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 4,
    shadowColor: colors.black,
    marginVertical: 5,
    marginHorizontal: 9,
  },
  pic: {
    height: 126,
    maxWidth: 162,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  addFavWrapper: {
    position: "absolute",
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    backgroundColor: colors.white,
    right: 8,
    top: 8,
  },
  addFav: {
    marginTop: 3.83,
    margin: 2.87,
  },
  content: {
    paddingVertical: 4.5,
    paddingHorizontal: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
  },
  rate: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4.5,
  },
  subtitle: {
    paddingHorizontal: 7,
    fontSize: 12,
  },
  dot: {
    width: 2,
    height: 2,
    backgroundColor: colors.dot,
  },
});
