import React from "react";

import { Container, Content, CodeTitle, CodeText } from "./styles";

import PromotionCode from "../../components/PromotionCode";
import Header from "../../components/Header";

export default function CodePage({ navigation }) {
  return (
    <Container>
      <Header navigation={navigation} />
      <Content>
        <Content
          style={{
            borderWidth: 1,
            borderColor: "#71a202",
            borderRadius: 10,
            marginTop: "5%",
            padding: 5,
            width: "50%"
          }}
        >
          <CodeTitle> ECO129</CodeTitle>
        </Content>
        <CodeText>Código do Cupom</CodeText>
        <PromotionCode />
        <CodeText style={{ fontSize: 14, marginTop: "5%" }}>
          Este cupom poderá ser usado apenas uma vez
        </CodeText>
        <CodeText style={{ textAlign: "center", marginTop: "5%" }}>
          Apresente este cupom nos restaurantes participantes e ganhe 10% de
          desconto
        </CodeText>
        <CodeText
          style={{ textAlign: "center", fontSize: 14, marginTop: "2%" }}
        >
          Promoção válida por tempo indeterminado ou enquanto durarem os
          estoques. Promoção não cumulativa. Os preços podem variar de acordo
          com região e/ou restaurantes.
        </CodeText>
      </Content>
    </Container>
  );
}
