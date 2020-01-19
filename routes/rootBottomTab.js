import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeDrawer from "./homeDrawer";
import CartDrawer from "./cartDrawer";
import WishListDrawer from "./wishListDrawer";
import AccountStack from "./accountStack";
// import aboutStack from "./aboutStack";

import React from "react";
import { Ionicons } from "@expo/vector-icons";

const screens = {
  Home: {
    screen: HomeDrawer,
    navigationOptions: {
      // tabBarLabel: "Home",
      // tintColor: "#000",
      tabBarIcon: ({ focused, tintColor }) => {
        return <Ionicons name="ios-home" size={25} color={tintColor} />;
      }
    }
  },
  Cart: {
    screen: CartDrawer,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
        return <Ionicons name="ios-cart" size={25} color={tintColor} />;
      }
    }
  },
  WishList: {
    screen: WishListDrawer,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
        const iconName = "ios-heart";
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }
  },
  Account: {
    screen: AccountStack,
    navigationOptions: {
      tintColor: "#000",
      tabBarIcon: ({ focused, tintColor }) => {
        const iconName = "ios-person";
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }
  }
};

const options = {
  tabBarOptions: {
    // headerMode: "none"
    activeTintColor: "#535c68",
    inactiveTintColor: "#bdc3c7",
    labelStyle: {
      fontWeight: "bold"
    },
    tabStyle: {
      paddingTop: 7
    },
    showLabel: true,
    showIcon: true

    // activeBackgroundColor: "green",
    // inactiveBackgroundColor: "yellow",
    // style: {
    //   borderWidth: 2,
    //   borderColor: "purple"
    // },
  }
};

export default createBottomTabNavigator(screens, options);
