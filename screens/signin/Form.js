import React, { Component } from "react";
import { Navigation } from "react-native-navigation";
import { Image, Text } from "react-native";
import { Container, Title, Content, Item, Input, Icon } from "native-base";

export default class form extends Component {
  state = {
    email: "",
    password: ""
  };

  render() {
    console.log(this.props);
    return (
      <Container>
        <Text>Hit</Text>
      </Container>
    );
  }
}
