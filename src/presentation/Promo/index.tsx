import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { colors } from "../../utils";
import { DishList, Header } from "../../components";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParams } from "../../router";
import { JSONPopularDish } from "../../assets/json";
import { PopDish1 } from "../../assets";

type PromoProps = NativeStackScreenProps<StackParams>;

const Promo = ({ navigation }: PromoProps) => {
  return (
    <View style={styles.page}>
      <Header
        type="home-header"
        name="Promo"
        qty={0}
        onPress={() => navigation.navigate("Cart")}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text>Promo</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {JSONPopularDish.data.map((item) => {
              return (
                <DishList
                  key={item.id}
                  pic={PopDish1}
                  name={item.name}
                  stars={item.star}
                  rating={item.rating}
                  promo={item.promo}
                  onPress={() => {}}
                />
              );
            })}
          </ScrollView>
          <Text>Discount</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {JSONPopularDish.data.map((item) => {
              return (
                <DishList
                  key={item.id}
                  pic={PopDish1}
                  name={item.name}
                  stars={item.star}
                  rating={item.rating}
                  promo={item.promo}
                  onPress={() => {}}
                />
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Promo;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    padding: 16,
  },
});
