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
            <Ionicons
              style={style.backIcon}
              size={28}
              name="ios-arrow-back"
              color="#1565C0"
            />
            <Image
              source={{ uri: this.props.user.avatar }}
              style={style.profilePic}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("Profile", {
                user: this.props.user
              })
            }
          >
            <Text style={style.name}>{this.props.user.name}</Text>
            <Text style={style.lastSeen}>last seen today at 9:42pm</Text>
          </TouchableOpacity>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <TouchableOpacity>
            <Ionicons
              style={style.callIcon}
              size={28}
              name="ios-call"
              color="#1565C0"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              style={style.icon}
              size={28}
              name="ios-videocam"
              color="#1565C0"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <SimpleLineIcons
              style={style.icon}
              size={28}
              name="options-vertical"
              color="#1565C0"
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
    borderBottomWidth: 1,
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
  name: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 18
  },
  lastSeen: {
    fontSize: 12,
    color: "grey"
  },
  callIcon: {
    marginHorizontal: 15
  },
  icon: {
    marginHorizontal: 5
  }
});
