import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BottomModal, Header, HistoryList } from "../../components";
import { colors } from "../../utils";
import { ScrollView } from "react-native-gesture-handler";

const History = () => {
  return (
    <View style={styles.page}>
      <Header name="History" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <HistoryList />
        <HistoryList />
        <HistoryList />
        <HistoryList />
      </ScrollView>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    padding: 16,
  },
});
