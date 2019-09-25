import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";

export default class ChatScreenHeader extends Component {
  render() {
    return (
      <View style={style.header}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <TouchableOpacity
            style={{ display: "flex", flexDirection: "row" }}
            onPress={() => this.props.navigation.goBack()}
          >
            <Ionicons style={style.backIcon} size={28} name="ios-arrow-back" />
            <Image
              source={{ uri: this.props.user.avatar }}
              style={style.profilePic}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={style.text}>{this.props.user.name}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <TouchableOpacity>
            <Ionicons style={style.callIcon} size={28} name="ios-call" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons style={style.icon} size={28} name="ios-videocam" />
          </TouchableOpacity>
          <TouchableOpacity>
            <SimpleLineIcons
              style={style.icon}
              size={28}
              name="options-vertical"
            />
          </TouchableOpacity>
        </View>
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
    borderWidth: 1,
    borderColor: "#eeeeee"
  },
  backIcon: {
    marginLeft: 5,
    paddingTop: 2
  },
  profilePic: {
    height: 32,
    width: 32,
    borderRadius: 15,
    marginHorizontal: 10
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold"
  },
  callIcon: {
    marginHorizontal: 15
  },
  icon: {
    marginHorizontal: 5
  }
});
