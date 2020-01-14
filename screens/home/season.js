import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export default function Season() {
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
          <TouchableOpacity>
            <Text>View All</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* content */}
      <View style={{ marginHorizontal: 15 }}>
        <TouchableOpacity>
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
