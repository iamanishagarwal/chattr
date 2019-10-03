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
import PrivacyScreen from "./src/screens/PrivacyScreen";
import ChatBackupScreen from "./src/screens/ChatBackupScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Chat: ChatScreen,
    Profile: ProfileScreen,
    Contact: ContactScreen,
    Setting: SettingScreen,
    Privacy: PrivacyScreen,
    ChatBackup: ChatBackupScreen,
    Login: LoginScreen,
    Otp: OtpScreen,
    ProfileSetup: ProfileSetupScreen
  },
  {
    initialRouteName: "Setting",
    headerMode: "none"
  }
);

export default createAppContainer(navigator);
