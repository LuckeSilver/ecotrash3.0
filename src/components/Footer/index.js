import React from "react";

import { Container, Companies, Text, Content } from "./styles";

import recode from "../../assets/recode.png";
import firjan from "../../assets/firjan.png";
import megamate from "../../assets/megamate2.png";

export default function Footer() {
  return (
    <Container>
      <Text>Nossos Parceiros</Text>
      <Content>
        <Companies source={firjan} />
        <Companies source={recode} />
        <Companies source={megamate} />
      </Content>
    </Container>
  );
}
