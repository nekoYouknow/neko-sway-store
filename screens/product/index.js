import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Header from "./header";
import ListFilter from "./listFilter";
import List from "./list";

export default function Product() {
  return (
    <View style={styles.container}>
      <Header />
      <ListFilter />
      <List />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    marginHorizontal: 24
  }
});
