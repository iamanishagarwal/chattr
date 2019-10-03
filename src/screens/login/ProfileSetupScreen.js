import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { Input } from "react-native-elements";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import StatusBar from "../../component/StatusBarComponent";
import { ScrollView } from "react-native-gesture-handler";

export default class ProfileSetupScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profilePic:
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/64755724/original/9446926e7f07b396a66d46c48b5ee5f382de197a/draw-cartoon-flat-avatar.png",
      name: "Anish"
    };
  }

  handleInput = val => this.setState({ name: val });

  render() {
    return (
      <>
        <StatusBar />
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
          <ScrollView>
            <View style={style.header}>
              <Text style={style.headerText}> Profile Setup </Text>
            </View>

            <TouchableOpacity>
              <View style={style.profilePicContainer}>
                <Image
                  style={style.profilePic}
                  source={{ uri: this.state.profilePic }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.editIconContainer}
              activeOpacity={0.8}
            >
              <MaterialIcons
                name="edit"
                style={style.profilePicEditIcon}
                size={28}
                color="white"
              />
            </TouchableOpacity>

            <Text style={style.subHeading}>Name</Text>
            <View style={style.section}>
              <Input
                value={this.state.name}
                onChangeText={this.handleInput}
                inputContainerStyle={{
                  borderColor: "white",
                  marginBottom: 10
                }}
                inputStyle={{ borderBottomWidth: 1, borderColor: "black" }}
              />
            </View>
          </ScrollView>
          <TouchableOpacity
            style={style.nextBtn}
            disabled={this.state.isDisabled}
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Ionicons name="ios-arrow-forward" color="white" size={28} />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </>
    );
  }
}

const style = StyleSheet.create({
  header: {
    marginBottom: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
    padding: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold"
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
    backgroundColor: "#1666ff",
    position: "relative",
    left: "60%",
    top: -70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25
  },
  section: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    width: "100%"
  },
  subHeading: {
    paddingHorizontal: 25,
    fontSize: 12,
    color: "grey"
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
