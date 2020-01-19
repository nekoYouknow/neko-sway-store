import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity
} from "react-native";

export default function Banner({ navigation }) {
  return (
    <View>
      {/* <Image source={require("../../assets/home-banner.png")} /> */}
      <ImageBackground
        style={{ width: "100%", height: 200 }}
        source={require("../../assets/category-banner.png")}
        resizeMode="cover"
      >
        <View
          style={{
            marginTop: 30,
            marginLeft: 20
          }}
        >
          <Text style={{ color: "#fff", fontSize: 25 }}>Swaggers</Text>
          <Text style={{ color: "#fff" }}>Unleash your inner swag, </Text>
          <Text style={{ color: "#fff" }}>in style.</Text>
          <TouchableOpacity
            style={{
              marginTop: 20,
              backgroundColor: "#fff",
              width: 120,
              padding: 7
            }}
          >
            <View
              style={{
                flexDirection: "row"
              }}
            >
              <Text style={{ color: "#000", flex: 1 }}>SHOP NOW</Text>
              <Text>&gt;</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
