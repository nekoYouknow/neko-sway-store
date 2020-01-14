import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity
} from "react-native";

export default function Banner() {
  return (
    <View>
      {/* <Image source={require("../../assets/home-banner.png")} /> */}
      <ImageBackground
        style={{ width: "100%", height: 200 }}
        source={require("../../assets/home-banner.png")}
        resizeMode="cover"
      >
        <View
          style={{
            marginTop: 30,
            marginLeft: 20
          }}
        >
          <Text style={{ color: "#fff", fontSize: 25 }}>New Arrivals</Text>
          <Text style={{ color: "#fff" }}>Check out our fresh new stuff</Text>
          <Text style={{ color: "#fff" }}>from sway store!</Text>
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
