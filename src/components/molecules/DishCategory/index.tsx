import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

interface DishCategoryProps {
  pic: any;
  name: string;
}

const DishCategory = ({ pic, name }: DishCategoryProps) => {
  return (
    <>
      <TouchableOpacity style={styles.container}>
        <Image source={pic} style={styles.pic} />
        <Text style={styles.text}>{name}</Text>
      </TouchableOpacity>
    </>
  );
};

export default DishCategory;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  pic: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  text: {
    marginTop: 10,
  },
});
