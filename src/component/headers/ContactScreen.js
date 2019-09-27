import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";

export default class ContactScreen extends Component {
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
          <View style={{ marginHorizontal: 15 }}>
            <Text style={style.name}>Select Contact</Text>
            <Text style={style.smallName}>50 contacts</Text>
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
  backIconContainer: {
    paddingHorizontal: 10
  },
  backIcon: {
    paddingTop: 2,
    marginLeft: 5
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: 18
  },
  smallName: {
    fontSize: 12,
    color: "grey"
  },
  icon: {
    marginHorizontal: 5,
    color: "#1565C0"
  }
});
