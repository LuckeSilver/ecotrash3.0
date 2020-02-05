import React, {useRef, useState} from "react";
import { Image } from "react-native";
import Button from "../../components/Button";
import api from "../../services/api";

import { Container, Form, SignLink, SignLinkText } from "./styles";
import logo from "../../assets/icon.png";
import Input from "../../components/Input";

export default function SignIn({ navigation }) {
  const emailRef = useRef()
  const passwordRef = useRef();
  const confirmRef = useRef();

  const [email, setEmail] = useState();
  function handleSubmit() {
    api.post("/Users", {
      email
    }).then(() => console.log("deu bom!")).catch((error) => console.log(error));
  }

  return (
    <Container>
      <Image source={logo} />
      <Form>
        <Input icon="person-outline" placeholder="Seu nome" 
        returnKeyType="next"
        onSubmitEditing={() => emailRef.current.focus()}
        />
        <Input
          icon="mail-outline"
          autoCorrect={false}
          placeholder="Digite seu e-mail"
          autoCompleteType="email"
          keyboardType="email-address"
          ref={emailRef}
          returnKeyType="next"
          value={email}
          onChangeText={setEmail}
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <Input
          icon="lock-outline"
          placeholder="Digite sua senha"
          secureTextEntry={true}
          ref={passwordRef}
          returnKeyType="next"
          onSubmitEditing={() => confirmRef.current.focus()}
        />
        <Input
          icon="lock-outline"
          placeholder="Confirme sua senha"
          secureTextEntry={true}
          ref={confirmRef}
          returnKeyType="send"
          onPress={handleSubmit}
        />
        <Button onPress={handleSubmit}>REGISTER</Button>
        <SignLink onPress={() => navigation.navigate("SignIn")}>
          <SignLinkText>Já tenho conta</SignLinkText>
        </SignLink>
      </Form>
    </Container>
  );
}
