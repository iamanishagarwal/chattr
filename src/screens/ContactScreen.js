import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SearchBar } from "react-native-elements";
import faker from "faker";
import StatusBarComponent from "../component/StatusBarComponent";
import Header from "../component/headers/ContactScreen";

export default class ContactScreen extends Component {
  state = {
    search: "",
    contacts: []
  };

  updateSearch = search => {
    this.setState({ search });
  };

  handleContactPress = ({ name, avatar }) => {
    this.props.navigation.navigate("Chat", { name, avatar });
  };

  componentWillMount = () => {
    let contacts = [];
    for (let i = 0; i < 20; i++) {
      const name = faker.name.findName();
      const avatar = faker.image.avatar();
      let about = faker.random.words();
      about = about.length < 20 ? about : about.substr(0, 17) + "...";
      contacts.push({ name, avatar, about });
    }

    this.setState({ contacts });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBarComponent />
        <Header navigation={this.props.navigation} />
        <SearchBar
          containerStyle={style.searchBarContainer}
          inputContainerStyle={style.searchBar}
          inputStyle={{ color: "black" }}
          placeholder="Search"
          onChangeText={this.updateSearch}
          value={this.state.search}
        />
        <FlatList
          data={this.state.contacts}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={style.contact}
              onPress={() => this.handleContactPress(item)}
            >
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("Profile", { user: item })
                }
              >
                <Image
                  style={style.contactImage}
                  source={{ uri: item.avatar }}
                />
              </TouchableOpacity>
              <View style={style.contactDetail}>
                <View>
                  <Text style={style.contactHeader}>{item.name}</Text>
                  <Text style={{ color: "grey" }}>{item.about}</Text>
                </View>
                <View style={style.featureIcons}>
                  <TouchableOpacity style={style.icon}>
                    <Ionicons size={28} name="md-call" color="#1565C0" />
                  </TouchableOpacity>
                  <TouchableOpacity style={style.icon}>
                    <Ionicons size={28} name="ios-videocam" color="#1565C0" />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: "#fff",
    borderWidth: 0,
    borderBottomColor: "transparent",
    borderTopColor: "transparent"
  },
  searchBar: {
    borderRadius: 18,
    backgroundColor: "#eeeeee"
  },
  contact: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    paddingBottom: 10,
    marginHorizontal: 10
  },
  contactImage: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  contactDetail: {
    marginLeft: 5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  contactHeader: {
    fontSize: 18,
    fontWeight: "bold"
  },
  featureIcons: {
    flexDirection: "row"
  },
  icon: {
    marginHorizontal: 20
  }
});
