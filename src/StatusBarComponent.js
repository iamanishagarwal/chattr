import React, { Component } from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import Constants from "expo-constants";

export default class StatusBarComponent extends Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="dark-content" />
        <View style={style.statusBar}></View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  statusBar: {
    backgroundColor: "#eeeeee",
    height: Constants.statusBarHeight
  }
});
