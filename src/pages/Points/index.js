import React from "react";

import {
  Container,
  Title,
  Content,
  FlexRow,
  Text,
  ContentButton
} from "./styles";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Discount from "../../components/Discount";
import megamate from "../../assets/megamate3.png";
import tropical from "../../assets/tropicalMix.png";
import verde from "../../assets/mundoVerde.png";

export default function About({ navigation }) {
  return (
    <Container>
      <Header navigation={navigation} />
      <FlexRow>
        <Title>VOCÊ TEM: </Title>
        <Text style={{ color: "#71a202", marginLeft: "15%" }}>9 pontos</Text>
      </FlexRow>
      <Content>
        <Discount discount="5%" points="10" image={megamate}></Discount>
        <Discount discount="10%" points="10" image={tropical}></Discount>
        <Discount discount="15%" points="15" image={verde}></Discount>
        <Discount discount="15%" points="15" image={tropical}></Discount>

        <Button
          onPress={() => navigation.navigate("CodePage")}
          style={{
            alignSelf: "center",
            marginTop: 50
          }}
        >
          TROCAR
        </Button>
      </Content>
    </Container>
  );
}
