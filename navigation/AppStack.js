import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
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

// You can easily switch to a bottom tab navigator.
// export default createBottomTabNavigator(
//   {
//     Home,
//     Settings
//   },
//   {
//     initialRouteName: "Home"
//   }
// );
