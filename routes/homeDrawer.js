import { createDrawerNavigator } from "react-navigation-drawer";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";

const screens = {
  Home: {
    screen: HomeStack
  },
  About: {
    screen: AboutStack
  }
};

const options = {
  headerMode: "none"
};

export default createDrawerNavigator(screens, options);
