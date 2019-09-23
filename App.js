import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ChatScreen from "./src/screens/ChatScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Chat: ChatScreen
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

export default createAppContainer(navigator);
