import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

import Header from "./header";
import Banner from "./banner";

import TopWear from "./topWear";
import BottomWear from "./bottomWear";
import FootWear from "./footWear";

export default function Category() {
  return (
    <View style={styles.container}>
      <Header />

      <ScrollView>
        <Banner />
        <TopWear />
        <BottomWear />
        <FootWear />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24
    // marginHorizontal: 24
  }
});
