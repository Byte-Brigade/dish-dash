import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Header } from "../../components";
import { StackParams } from "../../router";
import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { colors } from "../../utils/colors";

type HomeProps = NativeStackScreenProps<StackParams>;

const Home = ({ navigation }: HomeProps) => {
  return (
    <View style={styles.page}>
      <Header />
      <View style={styles.content}>
        <Text>Home View!</Text>
        <Button onPress={() => navigation.navigate("Cart")} />
      </View>
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
    flex: 1,
    padding: 16,
  },
});
