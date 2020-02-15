import React, { useRef, useState } from "react";
import { Image } from "react-native";
import Button from "../../components/Button";

import { Container, Form, SignLink, SignLinkText } from "./styles";
import logo from "../../assets/icon.png";
import Input from "../../components/Input";

export default function SignIn({ navigation }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  function handleSubmit() {
    if (
      username == null ||
      email == null ||
      password == null ||
      confirmPassword == null
    ) {
      alert("Todos os campos do formulário são obrigatórios");
    } else if (password !== confirmPassword) {
      alert(`Olá ${username}, suas senhas estão incompatíveis`);
    } else {
      alert(`Parabéns ${username}, usuário cadastrado com sucesso!`);
      navigation.navigate("Map");
    }
  }

  return (
    <Container>
      <Image source={logo} />
      <Form>
        <Input
          icon="person-outline"
          placeholder="Seu username"
          returnKeyType="next"
          value={username}
          onChangeText={text => setUsername(text)}
          onSubmitEditing={() => emailRef.current.focus()}
        />
        <Input
          icon="mail-outline"
          autoCorrect={false}
          placeholder="Digite seu e-mail"
          autoCompleteType="email"
          autoCapitalize="none"
          keyboardType="email-address"
          ref={emailRef}
          returnKeyType="next"
          value={email}
          onChangeText={text => setEmail(text)}
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <Input
          icon="lock-outline"
          placeholder="Digite sua senha"
          secureTextEntry={true}
          ref={passwordRef}
          returnKeyType="next"
          value={password}
          onChangeText={text => setPassword(text)}
          onSubmitEditing={() => confirmRef.current.focus()}
        />
        <Input
          icon="lock-outline"
          placeholder="Confirme sua senha"
          secureTextEntry={true}
          ref={confirmRef}
          returnKeyType="send"
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
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
