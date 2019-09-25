import React, { Component } from "react";
import { Text, View } from "react-native";
import StatusBarComponent from "../component/StatusBarComponent";
import Header from "../component/headers/ChatScreen";

export default class ChatScreen extends Component {
  constructor(props) {
    super(props);

    let messages = [];
    for (var i = 0; i < 20; i++) {
      let id = i % 2 == 0 ? 1 : 2;
      let message =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec enim diam vulputate ut pharetra.";
      let time = `${i}${i}:${i}${i}`;
      messages.push({ id, message, time });
    }
    state = { messages };
  }

  render() {
    return (
      <View>
        <StatusBarComponent />
        <Header
          navigation={this.props.navigation}
          user={this.props.navigation.state.params}
        />
        <View></View>
        <View></View>
      </View>
    );
  }
}
