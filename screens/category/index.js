import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Category() {
  return (
    <View>
      <Text>Category</Text>
      <Text>Man</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow"
  }
});
