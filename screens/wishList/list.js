import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";

export default function List({ navigation }) {
  const [list, setList] = useState([
    {
      id: 1,
      title: "Beige Blazers",
      price: "$159",
      image: require("../../assets/wish-1.png")
    },
    {
      id: 2,
      title: "Crimson Swade",
      price: "$129",
      image: require("../../assets/wish-2.png")
    },
    {
      id: 3,
      title: "Denims",
      price: "$230",
      image: require("../../assets/wish-3.png")
    },
    {
      id: 4,
      title: "Sweaters",
      price: "$150",
      image: require("../../assets/wish-4.png")
    },
    {
      id: 5,
      title: "BEIGE BLAZERS",
      price: "$512.90",
      image: require("../../assets/wish-5.png")
    },
    {
      id: 6,
      title: "BEIGE BLAZERS",
      price: "$512.90",
      image: require("../../assets/wish-6.png")
    },
    {
      id: 7,
      title: "BEIGE BLAZERS",
      price: "$512.90",
      image: require("../../assets/wish-1.png")
    }
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={list}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={{ marginHorizontal: 3, marginBottom: 20 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Detail", item)}
            >
              <Image source={item.image} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ position: "absolute", right: 0, margin: 10 }}
            >
              <Image source={require("../../assets/wish-delete.png")} />
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
    // backgroundColor: "pink"
    paddingHorizontal: 24
  }
});
