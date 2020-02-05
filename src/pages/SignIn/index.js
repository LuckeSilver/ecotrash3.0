import React, { useRef } from "react";
import { View, Text, Image } from "react-native";

import {
  Container,
  Form,
  ViewButtons,
  Title,
  MinnorButton,
  TxtButton,
  LongBtn,
  BtnImage
} from "./styles";
import logo from "../../assets/icon.png";
import Input from "../../components/Input";
import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";

export default function SignIn({ navigation }) {
  const passwordRef = useRef();

  function handleSubmit() {}

  return (
    <Container>
      <Image style={{marginTop: "5%"}} source={logo} />
      <Form>
        <Input
          icon="person-outline"
          autoCorrect={false}
          placeholder="Digite seu usuário"
          autoCompleteType="email"
          keyboardType="email-address"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <Input
          icon="lock-outline"
          placeholder="Digite sua senha"
          secureTextEntry={true}
          ref={passwordRef}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
        />
        <ViewButtons>
          <MinnorButton onPress={() => navigation.navigate("Map")}>
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
          <LongBtn onPress={() => navigation.navigate("Home")}>
            <BtnImage source={google} />
            <TxtButton style={{ color: "#21252D" }}>LOGIN WITH</TxtButton>
          </LongBtn>
          <LongBtn
            style={{ backgroundColor: "#3b5998", marginBottom: 100 }}
            onPress={() => navigation.navigate("Home")}
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
