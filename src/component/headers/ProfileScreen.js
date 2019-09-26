import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";

export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={style.header}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              paddingHorizontal: 10
            }}
            onPress={() => this.props.navigation.goBack()}
          >
            <Ionicons
              style={style.backIcon}
              size={28}
              name="ios-arrow-back"
              color="#1565C0"
            />
          </TouchableOpacity>
          <View style={{ marginHorizontal: 15 }}>
            <Text style={style.name}>{this.props.user.name}</Text>
            <Text style={style.lastSeen}>last seen today at 9:42pm</Text>
          </View>
        </View>
        <TouchableOpacity>
          <SimpleLineIcons
            style={style.icon}
            size={28}
            name="options-vertical"
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderColor: "#eeeeee"
  },
  backIcon: {
    marginLeft: 5,
    paddingTop: 2
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 18
  },
  lastSeen: {
    fontSize: 12,
    color: "grey"
  },
  icon: {
    marginHorizontal: 5,
    color: "#1565C0"
  }
});
