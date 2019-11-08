import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import StatusBar from "../components/StatusBarComponent";

export default class CallScreen extends Component {
  constructor(props) {
    super(props);

    this.user = props.navigation.state.params.user;
  }

  hangCall = () => this.props.navigation.goBack();

  render = () => (
    <View>
      <StatusBar />

      <View style={style.container}>
        <View>
          <Text style={style.name}>{this.user.name}</Text>
          <Text style={style.subText}>calling...</Text>
        </View>

        <View style={style.buttonContainer}>
          <TouchableOpacity style={style.buttons}>
            <Ionicons name="md-mic-off" size={32} color="#45beec" />
          </TouchableOpacity>
          <TouchableOpacity style={style.buttons}>
            <Ionicons name="md-volume-high" size={32} color="#45beec" />
          </TouchableOpacity>
          <TouchableOpacity style={style.buttons}>
            <Ionicons name="ios-videocam" size={32} color="#45beec" />
          </TouchableOpacity>
        </View>
      </View>

      <Image source={{ uri: this.user.avatar }} style={style.image} />

      <TouchableOpacity
        style={style.hangButton}
        activeOpacity={0.8}
        onPress={this.hangCall}
      >
        <MaterialIcons name="call-end" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: "40%",
    justifyContent: "center"
  },
  image: {
    width: "100%",
    height: "60%"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginVertical: 20
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40
  },
  subText: {
    marginVertical: 10,
    fontSize: 16,
    textAlign: "center",
    color: "grey"
  },
  buttons: {
    marginHorizontal: 25,
    marginTop: 20
  },
  hangButton: {
    width: 55,
    height: 55,
    marginTop: -100,
    backgroundColor: "red",
    borderRadius: 27.5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  }
});
