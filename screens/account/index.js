import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Header from "./header";
import List from "./list";

export default function Account() {
  return (
    <View style={styles.container}>
      <Header />
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
