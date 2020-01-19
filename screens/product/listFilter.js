import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

export default function ListFilter() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <AntDesign name="filter" size={20} />
          <Text style={{ marginLeft: 5 }}>FILTER</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons name="sort" size={20} />
          <Text style={{ marginLeft: 5 }}>SORT</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "yellow",
    height: 45,
    paddingHorizontal: 24
  }
});
