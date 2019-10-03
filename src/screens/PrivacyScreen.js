import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import StatusBar from "../component/StatusBarComponent";
import Header from "../component/headers/SettingScreen";

export default class PrivacyScreen extends Component {
  optionList = ["Last Seen", "Profile Picture", "About", "Status"];

  render() {
    return (
      <View>
        <StatusBar />
        <Header screenName="Privacy" navigation={this.props.navigation} />
        <FlatList
          data={this.optionList}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <TouchableOpacity style={style.section} onPress={() => {}}>
              <Text style={style.option}>{item}</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={style.property}>Everyone</Text>
                <Ionicons style={style.property} name="ios-arrow-forward" />
              </View>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity style={style.section} onPress={() => {}}>
          <Text style={style.option}>Blocked Contacts</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={style.property}>None</Text>
            <Ionicons style={style.property} name="ios-arrow-forward" />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const style = StyleSheet.create({
  section: {
    paddingVertical: 20,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#eeeeee"
  },
  option: {
    paddingLeft: 10,
    color: "#000",
    fontSize: 18
  },
  property: {
    color: "grey",
    fontSize: 16,
    marginHorizontal: 10,
    textAlignVertical: "center"
  }
});
