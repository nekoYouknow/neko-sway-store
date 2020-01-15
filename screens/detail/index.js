import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";

import Header from "./header";

export default function Detail() {
  return (
    <View style={styles.container}>
      <Header />

      <View>
        <ScrollView>
          {/* cut */}
          <View>
            <Image
              style={{ width: "100%", height: 300 }}
              source={require("../../assets/Detail/01.png")}
              alt="product cut"
              resizeMode="cover"
            />
          </View>

          {/* title + fit + $ */}
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              justifyContent: "space-between",
              borderBottomWidth: 1,
              borderBottomColor: "#ecf0f1"
            }}
          >
            {/* left */}
            <View style={{ flexDirection: "column" }}>
              <View>
                <Text style={{ fontSize: 18 }}>Crimson Swade</Text>
              </View>
              <View>
                <Text style={{ color: "gray" }}>Regular fit</Text>
              </View>
            </View>

            {/* right */}
            <View>
              <Text style={{ fontSize: 18 }}>$129</Text>
            </View>
          </View>

          {/* Sizes */}
          <View style={{ margin: 10 }}>
            <View>
              <Text style={{ fontSize: 18, color: "gray" }}>Sizes</Text>
            </View>
            <View>
              <ScrollView horizontal={true}>
                <View style={styles.sizeBox}>
                  <Text>UCC1</Text>
                </View>
                <View style={[styles.sizeBox, { borderColor: "black" }]}>
                  <Text>UCC2</Text>
                </View>
                <View style={[styles.sizeBox, { borderColor: "black" }]}>
                  <Text>UCC3</Text>
                </View>
                <View style={styles.sizeBox}>
                  <Text>UCC4</Text>
                </View>
                <View style={[styles.sizeBox, { borderColor: "black" }]}>
                  <Text>UCC5</Text>
                </View>
                <View style={styles.sizeBox}>
                  <Text>UCC6</Text>
                </View>
                <View style={styles.sizeBox}>
                  <Text>UCC7</Text>
                </View>
              </ScrollView>
            </View>
          </View>

          {/* Fit details */}
          <View style={{ padding: 10 }}>
            <View>
              <Text style={{ fontSize: 18, color: "gray" }}>Fit Details</Text>
            </View>
            <View>
              <Text>sfdsfdaljf;afljaldjalgjaklgjalfja lfjasdj</Text>
              <Text>sfdsfdaljf;afljaldjalgjaklgja lfjalfjasdj</Text>
            </View>
          </View>

          {/* Add Wishlit - Cart */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              paddingTop: 10,
              paddingBottom: 70
            }}
          >
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "#ddd",
                borderRadius: 5,
                paddingHorizontal: 25,
                paddingVertical: 10,
                marginHorizontal: 10
                // backgroundColor: "#f9ca24"
              }}
            >
              <Text>Add to Wishlist</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "#ddd",
                borderRadius: 5,
                paddingHorizontal: 25,
                paddingVertical: 10,
                marginHorizontal: 10,
                backgroundColor: "#f9ca24"
              }}
            >
              <Text>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    marginBottom: 50
    // backgroundColor: "yellow"
  },
  sizeBox: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    padding: 5,
    margin: 5
  }
});
