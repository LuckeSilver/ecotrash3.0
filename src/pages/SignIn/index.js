import React, { useRef, useState, useEffect } from "react";
import { View, Text, Image, Keyboard } from "react-native";
import api from "../../services/api";


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

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [keyboardShow, setKeyboardShow] = useState();

  useEffect(() => {
    Keyboard.addListener('keyboardWillShow', () => setKeyboardShow(true));
    Keyboard.addListener('keyboardWillHide', () => setKeyboardShow(false));

    return () => {
      Keyboard.removeAllListeners('keyboardWillShow', () => 
      setKeyboardShow(true)
      );
      Keyboard.removeAllListeners('keyboardWillHide', () => 
        setKeyboardShow(false)
      );
    }
  })

  async function handleSubmit() {
    if (!email || !password) return;
      
      Keyboard.dismiss();
    try {
      const response = await signin(email, password);
    } catch (err) {
      alert('Houve um erro ao tentar realizar o login');
    }
  }
  
  return (
    <Container>
      <Image style={{marginTop: "5%"}} source={logo} />
      <Form>
        <Input
          icon="mail-outline"
          autoCorrect={false}
          placeholder="Digite seu email"
          autoCompleteType="email"
          keyboardType="email-address"
          returnKeyType="next"
          value={email}
          onChangeText={ text => setEmail(text)}
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
