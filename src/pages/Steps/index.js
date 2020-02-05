import React from "react";

import { Container, Title, Content, Text } from "./styles";
import Header from "../../components/Header";
import Button from "../../components/Button";

export default function About({ navigation }) {
  return (
    <Container>
      <Header navigation={navigation} />
      <Content>
        <Title style={{ marginBottom: 15, marginLeft: 0, textAlign: "center" }}>
          Como descartar seu lixo eletrônico
        </Title>
        <Title>1º PASSO</Title>
        <Text>Separar seu lixo eletrônico do seu lixo doméstico.</Text>
        <Title>2º PASSO</Title>
        <Text>Acessar a opção descartar logo ao final destas instruções</Text>
        <Title>3º PASSO</Title>
        <Text>Escolher o ponto de coleta mais próximo a você</Text>
        <Title>4º PASSO</Title>
        <Text>
          Ao descartar, posicionar a câmera do seu celular para o QR CODE da
          caixa e seguir as orientações do link de redirecionamento.
        </Text>
        <Title>5º PASSO</Title>
        <Text>
          Digite os dados solicitados e retire seu comprovante de descarte,
          acumule pontos e troque por descontos com nossos parceiros!
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
      </Content>
    </Container>
  );
}
