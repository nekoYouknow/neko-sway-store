import { createStackNavigator } from "react-navigation-stack";
import Account from "../screens/account";

const screens = {
  Account: {
    screen: Account
  }
};

const options = {
  headerMode: "none"
};

export default createStackNavigator(screens, options);
