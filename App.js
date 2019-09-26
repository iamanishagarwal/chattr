import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ChatScreen from "./src/screens/ChatScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Chat: ChatScreen,
    Profile: ProfileScreen
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

export default createAppContainer(navigator);
