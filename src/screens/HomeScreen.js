import React, { Component } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { SearchBar } from "react-native-elements";
import StatusBarComponent from "../component/StatusBarComponent";
import HomeScreenHeader from "../component/headers/HomeScreen";
import faker from "faker";

export default class HomeScreen extends Component {
  state = {
    search: "",
    stories: []
  };

  updateSearch = search => {
    this.setState({ search });
  };

  handleChatPress = ({ name, avatar }) => {
    this.props.navigation.navigate("Chat", { name, avatar });
  };

  componentWillMount = () => {
    let stories = [];
    for (let i = 0; i < 10; i++) {
      let name = faker.name.findName();
      const avatar = faker.image.avatar();
      stories.push({ name, avatar });
    }

    this.setState({ stories });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBarComponent />
        <HomeScreenHeader />
        <SearchBar
          containerStyle={style.searchBarContainer}
          inputContainerStyle={style.searchBar}
          inputStyle={{ color: "black" }}
          placeholder="Search"
          onChangeText={this.updateSearch}
          value={this.state.search}
        />
        <ScrollView>
          <View style={style.stories}>
            <Text style={style.heading}>Stories</Text>
            <FlatList
              data={this.state.stories}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.name}
              renderItem={({ item }) => (
                <TouchableOpacity style={style.story}>
                  <Image style={style.image} source={{ uri: item.avatar }} />
                  <Text style={{ textAlign: "center" }}>
                    {item.name.length > 10
                      ? item.name.substring(0, 6) + "..."
                      : item.name}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>

          <View style={style.chatList}>
            <Text style={style.heading}>Chats</Text>
            <FlatList
              data={this.state.stories}
              keyExtractor={item => item.name}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={style.chat}
                  onPress={() => this.handleChatPress(item)}
                >
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("Profile", { user: item })
                    }
                  >
                    <Image
                      style={style.chatImage}
                      source={{ uri: item.avatar }}
                    />
                  </TouchableOpacity>
                  <View style={style.chatDetails}>
                    <View>
                      <Text style={style.chatHeader}>{item.name}</Text>
                      <Text style={{ color: "grey" }}>Lorem Ipsum</Text>
                    </View>
                    <View style={{ alignItems: "flex-end" }}>
                      <Text style={{ color: "grey" }}>5:50</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </ScrollView>
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
  heading: {
    fontSize: 18,
    color: "grey",
    fontWeight: "bold",
    marginVertical: 5
  },
  stories: {
    marginLeft: 10
  },
  story: {
    margin: 5,
    width: 60,
    overflow: "hidden"
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30
  },
  chatList: {
    marginHorizontal: 10
  },
  chat: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 10
  },
  chatImage: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  chatDetails: {
    flexGrow: 1,
    marginLeft: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  chatHeader: {
    fontSize: 18,
    fontWeight: "bold"
  }
});
