import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header({ navigation }) {
  const title = navigation.getParam("title");

  return (
    <View style={styles.header}>
      <View style={{ width: 20 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back" size={30} color="#2D2D2D" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 18, textAlign: "center" }}>{title}</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Ionicons name="ios-search" size={30} color="#2D2D2D" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 24,
    backgroundColor: "#fff",
    padding: 10,
    flexDirection: "row",
    borderBottomColor: "#ecf0f1",
    borderBottomWidth: 1
  }
});
