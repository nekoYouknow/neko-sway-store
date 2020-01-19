import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function About(props) {
  return (
    <View style={sytles.about}>
      <Text>About</Text>
    </View>
  );
}

const sytles = StyleSheet.create({
  about: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
