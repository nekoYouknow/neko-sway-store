import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/about";

const screens = {
  About: {
    screen: About
  }
};

const options = {
  headerMode: "none"
};

export default createStackNavigator(screens, options);
