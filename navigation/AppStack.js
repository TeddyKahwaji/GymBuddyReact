import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import LoadingScreen from "../screens/LoadingScreen";
import BodyScreen from '../screens/BodyScreen'
export default createStackNavigator(
  {
    BodyScreen:BodyScreen,
      LoadingScreen:LoadingScreen,
    Login:Login,
    Signup:Signup,


   
  }, 
  {
    headerMode: 'none',
    header: 'none',
    mode: 'modal'
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
