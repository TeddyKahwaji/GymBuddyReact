import { createStackNavigator } from "react-navigation";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import LoadingScreen from "../screens/LoadingScreen";
import BodyScreen from "../screens/BodyScreen"
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

export default createStackNavigator(
  {
    //Browse: Browse, 
 
    LoadingScreen: LoadingScreen,
    
    BodyScreen: BodyScreen,
    Login:Login,
    Signup: Signup, 
    LoginForm: LoginForm,
    SignUpForm: SignUpForm
    
   
  }, 
  {
    headerMode: 'none',
    header: 'none',
    mode: 'modal'
  }
);
