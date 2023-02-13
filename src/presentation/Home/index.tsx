import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import {
  CatDish1,
  CatDish2,
  CatDish3,
  CatDish4,
  CatDish5,
  PopDish1,
  PopDish2,
} from "../../assets";
import { JSONPopularDish } from "../../assets/json";
import { DishCategory, DishList, Gap, Header } from "../../components";
import { StackParams } from "../../router";
import { colors } from "../../utils/colors";

type HomeProps = NativeStackScreenProps<StackParams>;

const Home = ({ navigation }: HomeProps) => {
  return (
    <View style={styles.page}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text>Select by category</Text>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <DishCategory pic={CatDish1} name="Bebek" />
                <Gap width={24} />
                <DishCategory pic={CatDish2} name="Sushi" />
                <Gap width={24} />
                <DishCategory pic={CatDish3} name="Dessert" />
                <Gap width={24} />
                <DishCategory pic={CatDish4} name="Mie" />
                <Gap width={24} />
                <DishCategory pic={CatDish5} name="Pizza" />
                <Gap width={24} />
                <DishCategory pic={CatDish1} name="Bebek" />
              </View>
            </ScrollView>
          </View>
          <Text>Popular menu items</Text>
          <View style={styles.popular}>
            {JSONPopularDish.data.map((item) => {
              return (
                <DishList
                  key={item.id}
                  pic={PopDish1}
                  name={item.name}
                  stars={item.star}
                  rating={item.rating}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 16,
  },
  category: {
    flexDirection: "row",
  },
  popular: {
    paddingTop: 16,
    marginHorizontal: "auto",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  wrapperScroll: {
    paddingVertical: 16,
    marginHorizontal: -4,
  },
});
