import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Header from "./header";
import ListFilter from "./listFilter";
import List from "./list";

export default function Product(props) {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <ListFilter />
      <List />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24
  }
});
