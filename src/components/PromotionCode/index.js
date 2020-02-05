import React from "react";
import QRCode from "react-native-qrcode";

import { Container } from "./styles";

export default function PromotionCode() {
  return (
    <Container>
      <QRCode
        value="https://www.instagram.com/ecotrashrio/?hl=pt-br"
        size={200}
        fgColor="#fff"
        bgColor="#000"
      />
    </Container>
  );
}
