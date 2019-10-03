import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./src/screens/HomeScreen";
import ChatScreen from "./src/screens/ChatScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import ContactScreen from "./src/screens/ContactScreen";
import SettingScreen from "./src/screens/SettingScreen";
import LoginScreen from "./src/screens/login/LoginScreen";
import OtpScreen from "./src/screens/login/OtpScreen";
import ProfileSetupScreen from "./src/screens/login/ProfileSetupScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Chat: ChatScreen,
    Profile: ProfileScreen,
    Contact: ContactScreen,
    Setting: SettingScreen,
    Login: LoginScreen,
    Otp: OtpScreen,
    ProfileSetup: ProfileSetupScreen
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);

export default createAppContainer(navigator);
