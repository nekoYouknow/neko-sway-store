import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header({ navigation }) {
  return (
    <View style={styles.header}>
      <View style={{ width: 20 }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="ios-menu" size={30} color="#2D2D2D" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 18, textAlign: "center" }}>My Wishlist</Text>
      </View>
      <View>
        <TouchableOpacity>
          <Ionicons
            name="ios-notifications-outline"
            size={30}
            color="#2D2D2D"
          />
          <View
            style={{
              backgroundColor: "yellow",
              borderRadius: 90,
              width: 15,
              height: 15,
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              top: 0,
              left: 10,
              borderColor: "white",
              borderWidth: 1
            }}
          >
            <View>
              <Text style={{ fontSize: 7, textAlign: "center" }}>12</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    padding: 15,
    flexDirection: "row",
    paddingHorizontal: 24
  }
});
