import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export default function Season({ navigation }) {
  return (
    <View style={styles.container}>
      {/* header */}
      <View
        style={{
          flexDirection: "row",
          marginVertical: 15,
          marginHorizontal: 20
        }}
      >
        <View style={{ flex: 1 }}>
          <Text>Spring Summer 2020</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Product")}>
            <Text>View All</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* content */}
      <View style={{ marginHorizontal: 15 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Product")}>
          <Image
            style={{ width: "100%" }}
            source={require("../../assets/home-summer.png")}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
