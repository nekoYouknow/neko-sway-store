import { createDrawerNavigator } from "react-navigation-drawer";
import CartStack from "./cartStack";
import AboutStack from "./aboutStack";

const screens = {
  Cart: {
    screen: CartStack
  },
  About: {
    screen: AboutStack
  }
};

const options = {
  headerMode: "none"
};

export default createDrawerNavigator(screens, options);
