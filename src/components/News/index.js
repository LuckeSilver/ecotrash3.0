import React from "react";

import { Container, Title, SubTitle } from "./styles";

export default function News({ title, children }) {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{children}</SubTitle>
    </Container>
  );
}
