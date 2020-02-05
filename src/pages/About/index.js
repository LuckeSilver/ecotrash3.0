import React from "react";

import { Container, Title, Content, Text } from "./styles";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

export default function About({ navigation }) {
  return (
    <Container>
      <Header navigation={navigation} />
      <Content>
        <Title>O que fazemos?</Title>
        <Text>
          Facilitamos o descarte ecologicamente correto do lixo eletrônico de
          pessoas e empresas e incentivamos a transformação social por meio do
          engajamento socioambiental.
        </Text>
        <Title>Por que descartar? </Title>
        <Text>
          Você contribui diretamente para o descarte correto de insumos
          químicos e o reaproveitamento de componentes, ajudando a limpar o meio
          ambiente.
        </Text>
        <Title>Por que a ecoTrash? </Title>
        <Text>
          Os componentes eletrônicos são selecionados e encaminhados para 
          conserto e remanufatura, fora que descartando conosco
          você consegue desconto com nossos parceiros.
        </Text>
        <Button
          onPress={() => navigation.navigate("Map")}
          style={{
            alignSelf: "center",
            marginTop: 30,
            marginBottom: 30
          }}
        >
          DESCARTAR
        </Button>
        <Footer />
      </Content>
    </Container>
  );
}
