import React from "react";

import { Container, Logo, Button } from "./styles";
import Icon from "react-native-vector-icons/Entypo";

import logo from "../../assets/logo.png";

export default function Header({ navigation }) {
  function onPressOpenDrawer() {
    navigation.openDrawer();
  }

  return (
    <Container
      style={{ borderBottomWidth: 1, borderColor: "rgba(255, 255, 255, 0.2)" }}
    >
      <Button onPress={() => navigation.navigate("Home")}>
        <Logo source={logo}></Logo>
      </Button>
      <Button onPress={onPressOpenDrawer}>
        <Icon name="menu" color="#71A202" size={60} />
      </Button>
    </Container>
  );
}
