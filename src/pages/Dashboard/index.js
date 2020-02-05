import React from "react";

import { Container, Title, SubTitle, Img } from "./styles";
import parceiro from "../../assets/megamate.png";
import News from "../../components/News";
import Button from "../../components/Button";
import Header from "../../components/Header";

export default function Home({ navigation }) {
  return (
    <Container>
      <Header navigation={navigation} />
      <Title>Ganhe 10 % de desconto</Title>
      <SubTitle>no seu primeiro descarte!</SubTitle>
      <Img source={parceiro} />
      <Title style={{ marginTop: 10, fontSize: 19 }}>
        Doe 5 periféricos este mês e garanta seu ingresso para o próximo Star
        Wars!
      </Title>
      <SubTitle style={{ marginTop: 45, fontWeight: "bold" }}>
        Notícias
      </SubTitle>
      <News title="Incêndio florestal na Austrália">A Austrália vive um dos piores incêndios florestais dos últimos anos, com focos que começaram em setembro do ano passado.</News>
      <News title="EUA e Irã podem entrar em guerra?">Quais são as chances de o país entrar em conflito com os americanos? E, caso isso ocorra, o que acontecerá com o Irã?</News>
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
    </Container>
  );
}
