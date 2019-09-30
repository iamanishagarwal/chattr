import React, { Component } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Vibration
} from "react-native";
import { Input } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

export default class OtpScreen extends Component {
  state = {
    input: ["", "", "", ""],
    isDisabled: false
  };

  handleInput = (val, index) => {
    this.setState(({ input }) => {
      input[index] = val;
      return { input };
    });
  };

  handleBackSpace = (key, index) => {
    if (key.nativeEvent.key === "Backspace")
      this.setState(({ input, isDisabled }) => {
        input[index - 1] = "";
        isDisabled = index === 3 ? true : false;
        return { input, isDisabled };
      });
  };

  componentDidUpdate = () => {
    for (let i = 0; i < 4; i++) {
      if (!this.state.input[i]) {
        this.refs[`input${i}`].focus();
        break;
      }
    }
    console.log(this.state.isDisabled);
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
            <Text style={style.heading}>Enter the code</Text>
            <View style={style.inputsWrapper}>
              <Input
                ref="input0"
                value={this.state.input[0]}
                maxLength={1}
                autoFocus
                keyboardType="phone-pad"
                inputStyle={style.input}
                inputContainerStyle={style.inputContainer}
                containerStyle={style.inputOuterContainer}
                onChangeText={val => this.handleInput(val, 0)}
                onKeyPress={key => this.handleBackSpace(key, 0)}
              />
              <Input
                ref="input1"
                value={this.state.input[1]}
                maxLength={1}
                keyboardType="phone-pad"
                inputStyle={style.input}
                inputContainerStyle={style.inputContainer}
                containerStyle={style.inputOuterContainer}
                onChangeText={val => this.handleInput(val, 1)}
                onKeyPress={key => this.handleBackSpace(key, 1)}
              />
              <Input
                ref="input2"
                value={this.state.input[2]}
                maxLength={1}
                keyboardType="phone-pad"
                inputStyle={style.input}
                inputContainerStyle={style.inputContainer}
                containerStyle={style.inputOuterContainer}
                onChangeText={val => this.handleInput(val, 2)}
                onKeyPress={key => this.handleBackSpace(key, 2)}
              />
              <Input
                ref="input3"
                value={this.state.input[3]}
                maxLength={1}
                keyboardType="phone-pad"
                inputStyle={style.input}
                inputContainerStyle={style.inputContainer}
                containerStyle={style.inputOuterContainer}
                onChangeText={val => this.handleInput(val, 3)}
                onKeyPress={key => this.handleBackSpace(key, 3)}
              />
            </View>
            <View style={style.footer}>
              <Text style={style.footerText}>Didn't receive the code? </Text>
              <TouchableOpacity style={style.resendButton}>
                <Text style={style.resendButton}>Resend Code.</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
        <TouchableOpacity
          style={style.nextBtn}
          disabled={this.state.isDisabled}
          onPress={() => this.props.navigation.navigate("ProfileSetup")}
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
  inputsWrapper: {
    marginTop: 50,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%"
  },
  input: {
    fontSize: 30,
    textAlign: "center"
  },
  inputContainer: {
    borderBottomWidth: 0,
    marginTop: 3
  },
  inputOuterContainer: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 5
  },
  footer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center"
  },
  footerText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "500",
    color: "grey"
  },
  resendButton: {
    fontSize: 18,
    fontWeight: "500",
    color: "blue"
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
