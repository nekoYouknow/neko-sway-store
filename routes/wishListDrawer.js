import { createDrawerNavigator } from "react-navigation-drawer";
import WishListStack from "./wishListStack";
import AboutStack from "./aboutStack";

const screens = {
  WishList: {
    screen: WishListStack
  },
  About: {
    screen: AboutStack
  }
};

const options = {
  headerMode: "none"
};

export default createDrawerNavigator(screens, options);
