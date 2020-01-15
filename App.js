import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "./screens/home";
import Cart from "./screens/cart";
// import Cart from "./screens/detail";
import WishList from "./screens/wishList";
import Account from "./screens/account";

const AppBottomTabNvigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ focused, tintColor }) => {
          const iconName = "ios-home";
          return <Ionicons name={iconName} size={25} color={tintColor} />;
          // return <Image source={require('')} />
        }
      }
    },
    Cart: {
      screen: Cart,
      navigationOptions: {
        tintColor: "#000",
        tabBarIcon: ({ focused, tintColor }) => {
          const iconName = "ios-cart";
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        }
      }
    },
    WishList: {
      screen: WishList,
      navigationOptions: {
        tintColor: "#000",
        tabBarIcon: ({ focused, tintColor }) => {
          const iconName = "ios-heart";
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        }
      }
    },
    Account: {
      screen: Account,
      navigationOptions: {
        tintColor: "#000",
        tabBarIcon: ({ focused, tintColor }) => {
          const iconName = "ios-person";
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#535c68",
      inactiveTintColor: "#bdc3c7",

      // activeBackgroundColor: "green",
      // inactiveBackgroundColor: "yellow",
      // style: {
      //   borderWidth: 2,
      //   borderColor: "purple"
      // },
      labelStyle: {
        fontWeight: "bold"
      },
      tabStyle: {
        paddingTop: 7
      },
      showLabel: true,
      showIcon: true
    }
  }
);
const AppContainer = createAppContainer(AppBottomTabNvigator);

export default function App() {
  return <AppContainer />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 24
  }
});
