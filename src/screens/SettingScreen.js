import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import faker from "faker";
import StatusBar from "../component/StatusBarComponent";
import Header from "../component/headers/SettingScreen";
import Modal from "../component/EditModal";

export default class SettingScreen extends Component {
  constructor(props) {
    super(props);

    let user = {
      profilePic: require("../../assets/avatar.jpg"),
      name: faker.random.word(),
      about: faker.random.words()
    };
    this.state = { user, isVisible: false, heading: " ", text: " " };
  }

  handleModalInput = text => this.setState({ text });

  handleModalSave = key => {
    this.setState(state => {
      state.user = { ...state.user, [key]: this.state.text };
      state.isVisible = false;
      return state;
    });
  };

  handleModal = (heading, text) => {
    this.state.isVisible
      ? this.setState({ isVisible: false })
      : this.setState({ isVisible: true, heading, text });
  };

  render = () => (
    <>
      <StatusBar />
      <Header screenName="Settings" navigation={this.props.navigation} />
      <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
        <TouchableOpacity>
          <View style={style.profilePicContainer}>
            <Image
              style={style.profilePic}
              source={this.state.user.profilePic}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={style.editIconContainer} activeOpacity={0.8}>
          <MaterialIcons
            name="edit"
            style={style.profilePicEditIcon}
            size={28}
          />
        </TouchableOpacity>

        <View style={style.settingsContainer}>
          <TouchableOpacity
            style={style.section}
            activeOpacity={0.5}
            onPress={() => this.handleModal("name", this.state.user.name)}
          >
            <View style={{ marginHorizontal: 10, width: "75%" }}>
              <Text style={{ fontSize: 12, color: "grey" }}>Name</Text>
              <Text style={{ fontSize: 18 }}>{this.state.user.name}</Text>
            </View>
            <View>
              <MaterialIcons name="edit" style={style.editIcon} size={28} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.section}
            activeOpacity={0.5}
            onPress={() => this.handleModal("about", this.state.user.about)}
          >
            <View style={{ marginHorizontal: 10, width: "75%" }}>
              <Text style={{ fontSize: 12, color: "grey" }}>About</Text>
              <Text style={{ fontSize: 18 }}>{this.state.user.about}</Text>
            </View>
            <View>
              <MaterialIcons name="edit" style={style.editIcon} size={28} />
            </View>
          </TouchableOpacity>
          <View style={style.section}>
            <View style={{ marginHorizontal: 10, width: "75%" }}>
              <Text style={{ fontSize: 12, color: "grey" }}>Phone</Text>
              <Text style={{ fontSize: 18 }}>+91 1478965412</Text>
            </View>
          </View>
          <TouchableOpacity
            style={style.options}
            onPress={() => this.props.navigation.navigate("Privacy")}
          >
            <Ionicons
              name="md-lock"
              size={28}
              color="#45beec"
              style={{ width: 40, textAlign: "center" }}
            />
            <Text style={style.optionsText}>Privacy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.options}
            onPress={() => this.props.navigation.navigate("ChatBackup")}
          >
            <Ionicons
              name="md-cloud-upload"
              size={28}
              color="#45beec"
              style={{ width: 40, textAlign: "center" }}
            />
            <Text style={style.optionsText}>Chat backup</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.options}>
            <MaterialIcons
              name="delete"
              size={28}
              color="#45beec"
              style={{ width: 40, textAlign: "center" }}
            />
            <Text style={style.optionsText}>Delete my account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal
        heading={this.state.heading}
        visible={this.state.isVisible}
        handleModal={this.handleModal}
        handleInput={val => this.handleModalInput(val)}
        handleSave={this.handleModalSave}
        text={this.state.text}
      ></Modal>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flex: 1
  },
  profilePicContainer: {
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "center",
    position: "relative"
  },
  profilePic: {
    height: 200,
    width: 200,
    borderRadius: 100
  },
  editIconContainer: {
    height: 50,
    width: 50,
    backgroundColor: "#45beec",
    position: "relative",
    left: "60%",
    top: -70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25
  },
  profilePicEditIcon: { color: "white" },
  settingsContainer: { marginTop: -50 },
  section: {
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#eeeeee"
  },
  editIcon: {
    color: "#45beec",
    marginHorizontal: 20
  },
  options: {
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#eeeeee"
  },
  optionsText: {
    marginHorizontal: 10,
    color: "#45beec",
    fontSize: 18
  }
});
