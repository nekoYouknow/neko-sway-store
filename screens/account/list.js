import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function List() {
  const [list, setList] = useState([
    { id: 1, title: "My Wishlist", info: "" },
    { id: 2, title: "Orders", info: "" },
    { id: 3, title: "Ruturns", info: "" },
    { id: 4, title: "Sway Wallet", info: "$120" },
    { id: 5, title: "Account Detils", info: "" },
    { id: 6, title: "Preferences", info: "" },
    { id: 7, title: "Shipping Information", info: "" },
    { id: 8, title: "Security", info: "" },
    { id: 9, title: "FAQ", info: "" },
    { id: 10, title: "Logout", info: "" }
  ]);

  return (
    <View style={styles.container}>
      {list.map(item => (
        <TouchableOpacity key={item.id}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              height: 49,
              paddingVertical: 15,
              backgroundColor: "white",
              borderBottomColor: "#ecf0f1",
              borderBottomWidth: 1
            }}
          >
            {/* left */}
            <View
              style={{
                flex: 1
              }}
            >
              <Text>{item.title}</Text>
            </View>

            {/* center */}
            <View style={{ paddingRight: 20 }}>
              <Text style={{ color: "#95a5a6" }}>{item.info}</Text>
            </View>

            {/* right */}
            <View style={{ justifyContent: "center" }}>
              <Icon name="ios-arrow-forward" size={28} color="#7f8c8d" />
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 8
  }
});
