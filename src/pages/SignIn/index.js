import React, { useRef, useState } from "react";
import { View, Text, Image, Keyboard } from "react-native";

import {
  Container,
  Form,
  ViewButtons,
  MinnorButton,
  TxtButton,
  LongBtn,
  BtnImage
} from "./styles";
import logo from "../../assets/logotest.png";
import Input from "../../components/Input";
import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";

export default function SignIn({ navigation }) {
  const passwordRef = useRef();
  const userNameuser = "LuckeDev";
  const userPassword = "0147598";

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  function handleSubmit() {
    if (username == null || password == null) {
      alert("preencha os campos acima para realizar o login");
    } else if (username === userNameuser && password === userPassword) {
      navigation.navigate("Map");
    } else {
      alert("Usuário ou senha inválidos");
    }
  }

  return (
    <Container>
      <Image style={{ marginTop: "5%" }} source={logo} />
      <Form>
        <Input
          icon="person-outline"
          autoCorrect={false}
          placeholder="Digite seu username"
          returnKeyType="next"
          value={username}
          onChangeText={text => setUsername(text)}
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <Input
          icon="lock-outline"
          placeholder="Digite sua senha"
          secureTextEntry={true}
          ref={passwordRef}
          returnKeyType="send"
          value={password}
          onChangeText={text => setPassword(text)}
          onSubmitEditing={handleSubmit}
        />
        <ViewButtons>
          <MinnorButton onPress={handleSubmit}>
            <TxtButton>LOGIN</TxtButton>
          </MinnorButton>
          <MinnorButton
            style={{
              backgroundColor: "#21252D",
              borderColor: "#71A202",
              borderWidth: 1
            }}
            onPress={() => navigation.navigate("SignUp")}
          >
            <TxtButton>REGISTER</TxtButton>
          </MinnorButton>
        </ViewButtons>

        <View>
          <LongBtn onPress={() => navigation.navigate("Map")}>
            <BtnImage source={google} />
            <TxtButton style={{ color: "#21252D" }}>LOGIN WITH</TxtButton>
          </LongBtn>
          <LongBtn
            style={{ backgroundColor: "#3b5998", marginBottom: 100 }}
            onPress={() => navigation.navigate("Map")}
          >
            <BtnImage source={facebook} />
            <TxtButton>LOGIN WITH</TxtButton>
          </LongBtn>
        </View>
      </Form>
      <TxtButton>
        forgot <Text style={{ color: "#71A202" }}>password</Text> or username
      </TxtButton>
    </Container>
  );
}
