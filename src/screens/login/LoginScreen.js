import React, { Component } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { Input } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

export default class LoginScreen extends Component {
  state = {
    input: "",
    disableBtn: true
  };

  handleInput = input => {
    if (input.length === 10) {
      this.setState({ input, disableBtn: false });
    } else this.setState({ input, disableBtn: true });
  };

  render() {
    return (
      <>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
          <StatusBar barStyle="dark-content" />
          <View style={style.header}>
            <Image
              resizeMode="contain"
              source={require("../../../assets/logo.png")}
              style={style.logo}
            />
          </View>
          <View style={style.container}>
            <Text style={style.heading}>
              Enter your mobile number to login or register
            </Text>
            <Text style={style.label}>Your mobile number</Text>
            <View style={style.inputContainer}>
              <Input
                value={this.state.input}
                keyboardType="number-pad"
                inputStyle={{ fontSize: 20 }}
                leftIcon={
                  <Text style={{ fontSize: 20, marginRight: 20 }}>+ 91</Text>
                }
                leftIconContainerStyle={{ marginBottom: 1 }}
                onChangeText={this.handleInput}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
        <TouchableOpacity
          style={style.nextBtn}
          onPress={() => this.props.navigation.navigate("Otp")}
          disabled={this.state.disableBtn}
        >
          <Ionicons name="ios-arrow-forward" color="white" size={28} />
        </TouchableOpacity>
      </>
    );
  }
}

const style = StyleSheet.create({
  header: {
    marginTop: 25,
    height: "40%",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: "75%"
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 25
  },
  heading: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold"
  },
  label: {
    marginTop: 50,
    marginBottom: 20,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "800",
    color: "grey"
  },
  inputContainer: {
    flexDirection: "row"
  },
  nextBtn: {
    width: 50,
    height: 50,
    position: "absolute",
    bottom: 20,
    right: 20,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1666ff"
  }
});
