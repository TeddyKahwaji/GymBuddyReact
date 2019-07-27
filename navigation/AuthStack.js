import { createStackNavigator } from "react-navigation";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import LoadingScreen from "../screens/LoadingScreen";
import LoginForm from "../components/LoginForm"
export default createStackNavigator(
  {
    //Browse: Browse, 
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
