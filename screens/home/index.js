import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import Header from "./header";
import Banner from "./banner";
import WhatsNew from "./whatsNew";
import Season from "./season";

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView>
        <Banner {...props} />
        <WhatsNew {...props} />
        <Season {...props} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 24
  }
});
