import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class HomeScreenHeader extends Component {
  render() {
    return (
      <View style={style.header}>
        <TouchableOpacity>
          <Image
            source={require("../../../assets/avatar.jpg")}
            style={style.profilePic}
          />
        </TouchableOpacity>
        <Text style={style.text}>Chattr</Text>
        <TouchableOpacity>
          <Ionicons style={style.callIcon} size={32} name="md-call" />
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
    marginVertical: 10,
    marginHorizontal: 10
  },
  profilePic: {
    height: 32,
    width: 32,
    borderRadius: 15
  },
  text: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold"
  },
  callIcon: {}
});
