import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";

import Header from "./header";
import Banner from "./banner";
import WhatsNew from "./whatsNew";
import Season from "./season";

// import CategoryScreen from "../category";
// import ProductScreen from "../product";

// const AppStackNavigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Category: CategoryScreen,
//     Product: ProductScreen
//   },
//   {
//     defaultNavigationOptions: {
//       headerShown: false
//     }
//   }
// );

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Banner />
        <WhatsNew />
        <Season />
      </ScrollView>
    </View>
  );
}

// const AppContainer = createAppContainer(AppStackNavigator);
// export default AppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 24
  }
});
