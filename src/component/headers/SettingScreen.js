import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class SettingScreen extends Component {
  render() {
    return (
      <View style={style.header}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <TouchableOpacity
            style={style.backIconContainer}
            onPress={() => this.props.navigation.goBack()}
          >
            <Ionicons
              style={style.backIcon}
              size={28}
              name="ios-arrow-back"
              color="#1565C0"
            />
          </TouchableOpacity>
          <Text style={style.name}>{this.props.screenName}</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  header: {
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderColor: "#eeeeee"
  },
  backIconContainer: {
    paddingHorizontal: 10
  },
  backIcon: {
    marginLeft: 5
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center"
  }
});
