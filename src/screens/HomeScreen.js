import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import StatusBarComponent from "../StatusBarComponent";
import HomeScreenHeader from "../HomeScreenHeader";

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <StatusBarComponent />
        <HomeScreenHeader />
      </View>
    );
  }
}

const style = StyleSheet.create({});
