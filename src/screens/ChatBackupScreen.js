import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import StatusBar from "../component/StatusBarComponent";
import Header from "../component/headers/SettingScreen";

export default class ChatBackupScreen extends Component {
  state = { autoBackup: false };

  toggleAutoBackup = () => {
    this.setState(({ autoBackup }) => {
      autoBackup = autoBackup ? false : true;
      return { autoBackup };
    });
  };

  render() {
    return (
      <View>
        <StatusBar />
        <Header screenName="Chat Backup" navigation={this.props.navigation} />
        <View style={style.section}>
          <Ionicons
            name="md-cloud-upload"
            size={24}
            color="#1565C0"
            style={{
              width: 40,
              alignSelf: "flex-start",
              textAlign: "center"
            }}
          />
          <View style={{ flexGrow: 1 }}>
            <Text style={style.option}>Last backup</Text>
            <View style={{ paddingTop: 15 }}>
              <Text style={style.subText}>Local: Yesterday 2:00 am</Text>
              <Text style={style.subText}>Google Drive: Yesterday 2:00 am</Text>
              <Text style={style.subText}>Size: 100 mb</Text>
            </View>

            <TouchableOpacity style={style.button}>
              <Text style={style.buttonText}>Backup</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={style.section} onPress={() => {}}>
          <MaterialCommunityIcons
            name="google-drive"
            size={24}
            color="#1565C0"
            style={{
              width: 40,
              alignSelf: "flex-start",
              textAlign: "center"
            }}
          />
          <View style={style.item}>
            <Text style={style.option}>Google Account</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={style.property}>anish99033@gmail.com</Text>
              <Ionicons style={style.property} name="ios-arrow-forward" />
            </View>
          </View>
        </TouchableOpacity>
        <View style={style.section} onPress={() => {}}>
          <MaterialCommunityIcons
            name="autorenew"
            size={24}
            color="#1565C0"
            style={{
              width: 40,
              alignSelf: "flex-start",
              textAlign: "center"
            }}
          />
          <View style={style.item}>
            <Text style={style.option}>Auto Backup</Text>
            <Switch
              value={this.state.autoBackup}
              onValueChange={this.toggleAutoBackup}
              thumbColor="#1565C0"
              trackColor={{ false: "#B0BEC5", true: "#5c87b8" }}
            />
          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  section: {
    paddingVertical: 20,
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#eeeeee"
  },
  option: {
    color: "#1565C0",
    fontSize: 18
  },
  subText: {
    fontSize: 14
  },
  button: {
    width: 80,
    borderRadius: 10,
    backgroundColor: "#1565C0",
    padding: 15,
    marginVertical: 15
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    textAlign: "center"
  },
  item: {
    flexDirection: "row",
    flexGrow: 1,
    justifyContent: "space-between"
  },
  property: {
    color: "grey",
    fontSize: 16,
    marginHorizontal: 10,
    textAlignVertical: "center"
  }
});
