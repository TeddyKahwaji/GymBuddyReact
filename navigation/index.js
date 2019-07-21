import { createSwitchNavigator, createAppContainer } from "react-navigation";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

const AppNavigation = createSwitchNavigator(
  {
    AppStack,
    AuthStack
  },
  {
    initialRouteName: "AuthStack"
  }
);

export default createAppContainer(AppNavigation);
