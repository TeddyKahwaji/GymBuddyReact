import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import LoadingScreen from "../screens/LoadingScreen";
import BodyScreen from "../screens/BodyScreen";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
export default createStackNavigator(
  {
    LoadingScreen: LoadingScreen,
    BodyScreen: BodyScreen,

    Login: Login,
    Signup: Signup,

    LoginForm: LoginForm,
    SignUpForm: SignUpForm
  },
  {
    headerMode: "none",
    header: "none",
    mode: "modal"
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
