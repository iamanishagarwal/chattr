import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList
} from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import StatusBarComponent from "../component/StatusBarComponent";
import Header from "../component/headers/ProfileScreen";
import faker from "faker";

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);

    this.images = [];
    for (let i = 0; i < 10; i++) this.images.push(faker.image.avatar());
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBarComponent />
        <Header
          navigation={this.props.navigation}
          user={this.props.navigation.state.params.user}
        />
        <ScrollView>
          <View>
            <Image
              style={style.image}
              source={{ uri: this.props.navigation.state.params.user.avatar }}
            />
            <View style={style.options}>
              <TouchableOpacity
                style={style.button}
                onPress={() =>
                  this.props.navigation.navigate(
                    "Chat",
                    this.props.navigation.state.params.user
                  )
                }
              >
                <Ionicons size={28} name="md-text" color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={style.button}>
                <Ionicons size={28} name="ios-call" color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={style.button}>
                <Ionicons size={28} name="ios-videocam" color="white" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginHorizontal: 10 }}>
            <Text style={style.heading}>About and phone number</Text>
            <View style={style.section}>
              <Text style={{ fontSize: 18 }}>Available</Text>
              <Text style={{ fontSize: 12, color: "grey" }}>24 July</Text>
            </View>
            <View style={style.section}>
              <Text style={{ fontSize: 18 }}>+91 87451236987</Text>
              <Text style={{ fontSize: 12, color: "grey" }}>Mobile</Text>
            </View>

            <View>
              <View style={style.mediaHeader}>
                <Text style={style.heading}>Media</Text>
                <TouchableOpacity style={{ flexDirection: "row" }}>
                  <Text style={{ color: "#1565C0", marginHorizontal: 10 }}>
                    50
                  </Text>
                  <Ionicons
                    name="ios-arrow-forward"
                    size={20}
                    color="#1565C0"
                  />
                </TouchableOpacity>
              </View>
              <FlatList
                style={style.mediaSection}
                data={this.images}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                  <TouchableOpacity>
                    <Image source={{ uri: item }} style={style.mediaImage} />
                  </TouchableOpacity>
                )}
              />
            </View>

            <TouchableOpacity style={style.blockButton}>
              <Entypo name="block" size={28} color="red" />
              <Text
                style={{ marginHorizontal: 10, color: "red", fontSize: 18 }}
              >
                Block
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  image: {
    height: 400,
    width: "100%"
  },
  options: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "flex-end",
    marginTop: -32
  },
  button: {
    width: 60,
    height: 60,
    marginHorizontal: 10,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1565C0"
  },
  heading: {
    fontSize: 18,
    color: "grey",
    fontWeight: "bold",
    marginVertical: 5
  },
  section: {
    paddingVertical: 10,
    borderColor: "#eeeeee",
    borderBottomWidth: 1
  },
  mediaHeader: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  mediaSection: {
    flexDirection: "row",
    marginLeft: -5,
    paddingBottom: 15,
    borderColor: "#eeeeee",
    borderBottomWidth: 1
  },
  mediaImage: {
    width: 75,
    height: 75,
    marginHorizontal: 5,
    borderRadius: 5
  },
  blockButton: {
    paddingVertical: 10,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#eeeeee",
    borderBottomWidth: 1
  }
});
