import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { SearchBar } from "react-native-elements";
import StatusBarComponent from "../StatusBarComponent";
import HomeScreenHeader from "../HomeScreenHeader";

export default class HomeScreen extends Component {
  state = {
    search: ""
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    return (
      <View>
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
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: "#eeeeee"
  }
});
