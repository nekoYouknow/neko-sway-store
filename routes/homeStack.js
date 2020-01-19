import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";
import Product from "../screens/product";
import Category from "../screens/category";

const screens = {
  Home: {
    screen: Home
  },
  Product: {
    screen: Product
  },
  Category: {
    screen: Category
  }
};

const options = {
  headerMode: "none"
};

// const options = {
//   headerShown: false
// };

export default createStackNavigator(screens, options);
