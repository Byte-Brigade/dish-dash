import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";
import {
  CatDish1,
  CatDish2,
  CatDish3,
  CatDish4,
  CatDish5,
  PopDish1,
} from "../../assets";
import { JSONPopularDish } from "../../assets/json";
import {
  DishCategory,
  DishList,
  Gap,
  Header,
  ModalCustom,
} from "../../components";
import { StackParams } from "../../router";
import { colors } from "../../utils/colors";

type HomeProps = NativeStackScreenProps<StackParams>;

const Home = ({ navigation }: HomeProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState({
    name: "",
    star: 0,
    rating: 0,
    price: 0,
  });

  return (
    <View style={styles.page}>
      <Header qty={0} />
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
            <View style={styles.popularItem}>
              {JSONPopularDish.data.map((item) => {
                return (
                  <DishList
                    key={item.id}
                    pic={PopDish1}
                    name={item.name}
                    stars={item.star}
                    rating={item.rating}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                      setModalData(item);
                    }}
                  />
                );
              })}
            </View>
            <GestureRecognizer
              onSwipeDown={() => setModalVisible(!modalVisible)}
            >
              <ModalCustom
                visible={modalVisible}
                onClose={() => setModalVisible(!modalVisible)}
                data={modalData}
              />
            </GestureRecognizer>
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
    padding: 16,
  },
  category: {
    flexDirection: "row",
  },
  popular: {
    paddingTop: 16,
  },
  popularItem: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  wrapperScroll: {
    paddingVertical: 16,
    marginHorizontal: -4,
  },
});
