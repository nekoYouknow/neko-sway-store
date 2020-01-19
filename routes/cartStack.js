import { createStackNavigator } from "react-navigation-stack";
import Cart from "../screens/cart";

const screens = {
  Cart: {
    screen: Cart
  }
};

const options = {
  headerMode: "none"
};

export default createStackNavigator(screens, options);
