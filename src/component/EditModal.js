import React, { Component } from "react";
import {
  Text,
  View,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class EditModal extends Component {
  state = {
    value: "",
    heading: ""
  };

  static getDerivedStateFromProps = (props, state) => {
    let heading;
    if (props.text !== state.value || props.heading !== state.heading) {
      heading = props.heading === "name" ? "Enter your name" : "Add about";
      return { value: props.text, heading };
    }
    return {};
  };

  render = () => (
    <Modal animationType="fade" visible={this.props.visible} transparent>
      <TouchableWithoutFeedback onPress={this.props.handleModal}>
        <View style={style.outerArea}></View>
      </TouchableWithoutFeedback>

      <View style={style.container}>
        <Text style={style.heading}>{this.state.heading}</Text>
        <View>
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderColor: "grey",
              borderRadius: 5,
              marginVertical: 20
            }}
            autoFocus
            value={this.state.value}
            onChangeText={this.props.handleInput}
          />
        </View>
        <View style={style.buttons}>
          <TouchableOpacity
            onPress={() => this.props.handleSave(this.props.heading)}
          >
            <Text style={style.button}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.handleModal}>
            <Text style={style.button}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const style = StyleSheet.create({
  outerArea: {
    backgroundColor: "#212121",
    opacity: 0.4,
    flex: 1,
    justifyContent: "center"
  },
  container: {
    padding: 20,
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "white",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold"
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginVertical: 10
  },
  button: {
    fontSize: 16,
    marginHorizontal: 20,
    fontWeight: "bold",
    color: "#45beec"
  }
});
