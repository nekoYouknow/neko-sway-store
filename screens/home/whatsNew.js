import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity
} from "react-native";

export default function WhatsNew(props) {
  const [list, setList] = useState([
    { id: 1, title: "Woman", source: require("../../assets/home-1.png") },
    { id: 2, title: "Man", source: require("../../assets/home-2.png") },
    { id: 3, title: "Girl", source: require("../../assets/home-3.png") },
    { id: 4, title: "Boy", source: require("../../assets/home-1.png") },
    { id: 5, title: "Unisex", source: require("../../assets/home-2.png") }
  ]);
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
          <Text>What's new</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text>View All</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* scroll */}
      <View style={{ backgroundColor: "#fff", margin: 0 }}>
        <ScrollView horizontal={true}>
          {list.map(item => (
            <View style={styles.box} key={item.id}>
              <TouchableOpacity>
                <ImageBackground
                  source={item.source}
                  resizeMode="cover"
                  style={styles.thumb}
                >
                  <Text style={styles.text}>{item.title}</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  box: {
    marginLeft: 15,
    alignItems: "center",
    alignContent: "center"
  },
  thumb: {
    width: 110,
    height: 120
  },
  text: {
    color: "#fff",
    marginTop: 80,
    textAlign: "center"
  }
});
