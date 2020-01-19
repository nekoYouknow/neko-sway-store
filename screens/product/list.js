import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function List() {
  const [list, setList] = useState([
    {
      id: 1,
      title: "Beige Blazers",
      price: "$159",
      image: require("../../assets/wish-6.png"),
      wished: false
    },
    {
      id: 2,
      title: "Crimson Swade",
      price: "$129",
      image: require("../../assets/wish-5.png"),
      wished: false
    },
    {
      id: 3,
      title: "Denims",
      price: "$230",
      image: require("../../assets/wish-4.png"),
      wished: false
    },
    {
      id: 4,
      title: "Sweaters",
      price: "$150",
      image: require("../../assets/wish-2.png"),
      wished: true
    },
    {
      id: 5,
      title: "BEIGE BLAZERS",
      price: "$512.90",
      image: require("../../assets/wish-5.png"),
      wished: true
    },
    {
      id: 6,
      title: "BEIGE BLAZERS",
      price: "$512.90",
      image: require("../../assets/wish-6.png"),
      wished: false
    },
    {
      id: 7,
      title: "BEIGE BLAZERS",
      price: "$512.90",
      image: require("../../assets/wish-1.png"),
      wished: false
    }
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        keyExtractor={item => item.id}
        data={list}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={{ marginHorizontal: 3, marginBottom: 20 }}>
            <Image source={item.image} />
            <TouchableOpacity
              style={{ position: "absolute", right: 0, margin: 10 }}
            >
              {item.wished ? (
                <Ionicons name="ios-heart" size={30} color="#fdd835" />
              ) : (
                <Ionicons name="ios-heart-empty" size={30} color="white" />
              )}
            </TouchableOpacity>
            <Text>{item.title}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24
  }
});
