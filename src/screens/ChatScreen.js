import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  FlatList
} from "react-native";
import StatusBarComponent from "../component/StatusBarComponent";
import Header from "../component/headers/ChatScreen";
import { Ionicons } from "@expo/vector-icons";

export default class ChatScreen extends Component {
  constructor(props) {
    super(props);

    let messages = [];
    for (var i = 0; i < 100; i++) {
      let key = i.toString();
      let id = i % 2 == 0 ? 1 : 0;
      let message =
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.";
      let time = `${i}${i}:${i}${i}`;
      messages.unshift({ id, message, time, key });
    }
    this.state = { messages, value: "" };
  }

  onChangeValue = value => {
    this.setState({ value: value });
  };

  handleSubmit = () => {
    const msg = {
      id: 0,
      key: this.state.messages.length.toString(),
      message: this.state.value,
      time: `12:12`
    };

    let { messages } = this.state;
    messages.unshift(msg);

    this.setState({ messages, value: "" });
    console.log("yo yo");
  };

  render() {
    return (
      <KeyboardAvoidingView style={style.container} behavior="padding" enabled>
        <StatusBarComponent />
        <Header
          navigation={this.props.navigation}
          user={this.props.navigation.state.params}
        />

        <FlatList
          inverted
          style={style.messageContainer}
          data={this.state.messages}
          keyExtractor={item => item.key}
          renderItem={({ item }) => {
            if (item.id) {
              return (
                <View style={style.recievedMsg}>
                  <View
                    style={item.message.length < 35 ? style.smallMsg : null}
                  >
                    <Text>{item.message}</Text>
                    <Text style={style.time}>{item.time}</Text>
                  </View>
                </View>
              );
            } else {
              return (
                <View style={style.sentMsg}>
                  <View
                    style={item.message.length < 35 ? style.smallMsg : null}
                  >
                    <Text>{item.message}</Text>
                    <Text style={style.time}>{item.time}</Text>
                  </View>
                </View>
              );
            }
          }}
        />
        <View style={style.inputBar}>
          <TextInput
            style={style.textInput}
            value={this.state.value}
            placeholder="Type a message"
            onChangeText={this.onChangeValue}
          />
          <TouchableOpacity onPress={this.handleSubmit}>
            <Ionicons style={style.sendIcon} name="md-send" size={28} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1
  },
  messageContainer: {
    flexGrow: 1
  },
  recievedMsg: {
    borderRadius: 10,
    backgroundColor: "#eeeeee",
    maxWidth: "70%",
    alignSelf: "flex-start",
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 10
  },
  sentMsg: {
    borderRadius: 10,
    backgroundColor: "aqua",
    maxWidth: "70%",
    padding: 5,
    alignSelf: "flex-end",
    marginVertical: 5,
    marginHorizontal: 10
  },
  smallMsg: {
    display: "flex",
    flexDirection: "row"
  },
  time: {
    textAlign: "right",
    alignSelf: "flex-end",
    fontSize: 10,
    lineHeight: 10,
    marginTop: 5,
    paddingLeft: 10,
    paddingRight: 2,
    color: "grey"
  },
  inputBar: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  textInput: {
    marginVertical: 5,
    marginLeft: 10,
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 18,
    color: "black",
    backgroundColor: "#eeeeee",
    flexGrow: 1
  },
  sendIcon: {
    marginVertical: 5,
    marginHorizontal: 10
  }
});
