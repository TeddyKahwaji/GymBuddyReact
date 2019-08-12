import { createStackNavigator } from "react-navigation";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import LoadingScreen from "../screens/LoadingScreen";
import LoginForm from "../components/LoginForm"
import BodyScreen from "../screens/BodyScreen"
export default createStackNavigator(
  {
    //Browse: Browse, 
    BodyScreen: BodyScreen,
    LoadingScreen: LoadingScreen,
    Login:Login,
    Signup: Signup, 

    
   
  }, 
  {
    headerMode: 'none',
    header: 'none',
    mode: 'modal'
  }
);
