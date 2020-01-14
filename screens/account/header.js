import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      {/* left */}
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "column" }}>
          <View>
            <Text style={{ fontSize: 22 }}>Kishore S</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={{ fontSize: 19, color: "#e4e1e3" }}>
                view profile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* right */}
      <View>
        <Image
          source={require("../../assets/account-avartar.png")}
          style={{ width: 50, height: 50, borderRadius: 90 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    height: 70,
    paddingTop: 10
  }
});
