import { createStackNavigator } from "react-navigation";
import Login from "../screens/Login";
import Signup from "../screens/Signup";

export default createStackNavigator(
  {
    Login,
    Signup
  },
  {
    initialRouteName: "Login",
    headerMode : 'none'
  }
);
