import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Button,
  Footer,
  FooterTab,
  Body,
  Title
} from "native-base";
import { Text, Image, StyleSheet, View } from "react-native";

export default class Signin extends Component {
  render() {
    console.log(this.props);
    return (
      <Container>
        <Header>
          <Body>
            <Title>SIGN UP</Title>
          </Body>
        </Header>

        <Content>
          <Image
            source={require("../../assets/hello.jpg")}
            style={styles.stretch}
          />

          <Title style={styles.hi}>Hello !</Title>
          <Text>Welcome! Smile, and the day will smile with you.”</Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button success rounded block style={styles.btn}>
              <Text style={styles.txt}>SIGN IN</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  stretch: {
    width: 300,
    height: 300,

    position: "relative",
    top: 40,
    left: 32
  },
  btn: {
    marginStart: 90,
    marginEnd: 90
  },
  txt: {
    color: "white"
  },
  hi: {
    width: 300,
    height: 300,

    position: "relative",
    top: 55,
    left: 30
  }
});
