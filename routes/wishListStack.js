import { createStackNavigator } from "react-navigation-stack";
import WishList from "../screens/wishList";
import Detail from "../screens/detail";

const screens = {
  WishList: {
    screen: WishList
  },
  Detail: {
    screen: Detail
  }
};

const options = {
  headerMode: "none"
};

export default createStackNavigator(screens, options);
