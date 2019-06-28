import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Button,
  Footer,
  FooterTab,
  Body,
  Title,
  Item,
  Icon,
  Input
} from "native-base";
import { StyleSheet, Text, Image } from "react-native";
import { Navigation } from "react-native-navigation";

export default class Signin extends Component {
  formHandle() {
    Navigation.setRoot({
      root: {
        component: {
          name: "Form"
        }
      }
    });
  }
  render() {
    console.log(this.props);
    return (
      <Container>
        <Header>
          <Body>
            <Title>Sign in to your profile</Title>
          </Body>
        </Header>

        <Content>
          <Item>
            <Icon>
              <Image
                source={require("../../assets/user.png")}
                style={styles.stretch}
              />
            </Icon>
            <Input placeholder="Email" />
          </Item>
          <Item>
            <Icon>
              <Image
                source={require("../../assets/key.png")}
                style={styles.stretch}
              />
            </Icon>
            <Input placeholder="Password" />
          </Item>
        </Content>
        <Footer>
          <FooterTab>
            <Button
              success
              rounded
              block
              style={styles.btn}
              onPress={() => this.formHandle()}
            >
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
    width: 20,
    height: 20,

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
