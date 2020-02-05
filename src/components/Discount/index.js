import React from "react";

import {
  Container,
  BtnTrade,
  DiscountText,
  PointText,
  ImgButton,
  Content
} from "./styles";

export default function Discount({ discount, points, image }) {
  return (
    <Container>
      <Content>
        <DiscountText>{discount} DE DESCONTO</DiscountText>
        <PointText>a partir de {points} pontos </PointText>
      </Content>
      <BtnTrade>
        <ImgButton source={image} />
      </BtnTrade>
    </Container>
  );
}
