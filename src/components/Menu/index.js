import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import SecondIcon from "react-native-vector-icons/MaterialCommunityIcons";

import {
  Container,
  Link,
  TextLink,
  Footer,
  MediaButtons,
  Text,
  Copy
} from "./styles";

export default function Menu({ navigation }) {
  return (
    <Container>
      <Link
        style={{ marginTop: 10 }}
        onPress={() => navigation.navigate("Home")}
      >
        <TextLink>HOME</TextLink>
      </Link>
      <Link onPress={() => navigation.navigate("About")}>
        <TextLink>QUEM SOMOS</TextLink>
      </Link>
      <Link onPress={() => navigation.navigate("Steps")}>
        <TextLink>PASSO A PASSO</TextLink>
      </Link>
      <Link onPress={() => navigation.navigate("Map")}>
        <TextLink>PONTOS DE COLETA</TextLink>
      </Link>
      <Link onPress={() => navigation.navigate("Points")}>
        <TextLink>DESCONTOS</TextLink>
      </Link>
      {/* <Link>
        <TextLink>MEU PERFIL</TextLink>
      </Link> */}
      <Link onPress={() => navigation.navigate("SignIn")}>
        <TextLink>SAIR</TextLink>
      </Link>
      <Footer>
        <MediaButtons>
          <Icon name="facebook" color="#71A202" size={30} />
        </MediaButtons>
        <MediaButtons>
          <Icon name="instagram" color="#71A202" size={30} />
        </MediaButtons>
        <MediaButtons>
          <SecondIcon name="gmail" color="#71A202" size={30} />
        </MediaButtons>
        <MediaButtons>
          <Icon name="whatsapp" color="#71A202" size={30} />
        </MediaButtons>
      </Footer>
      <Copy>
        <Text>© 2019 por e-coTrash</Text>
        <Text>Todos os direitos reservados</Text>
      </Copy>
    </Container>
  );
}
