import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { FavList, Header } from "../../components";
import { StackParams } from "../../router";
import { colors } from "../../utils";

type FavoriteProps = NativeStackScreenProps<StackParams>;

const Favorite = ({ navigation }: FavoriteProps) => {
  return (
    <View style={styles.page}>
      <Header
        type="fav-header"
        qty={0}
        onPress={() => navigation.navigate("Cart")}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FavList />
        <FavList />
        <FavList />
        <FavList />
        <FavList />
      </ScrollView>
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
