import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: 'padding', //joga o container pra cima caso o teclado
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #21252d;
`;

export const Form = styled.View`
  padding-left: 15;
  padding-right: 15;
  margin-top: 30px;
`;

export const ViewButtons = styled.View`
  align-items: center;
  margin-top: 10px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 30px;
  color: #fff;
  margin-top: -25px;
`;

export const MinnorButton = styled.TouchableOpacity`
  background-color: #71a202;
  border-radius: 30;
  margin-top: 20px;
  margin-right: 5px;
  align-items: center;
  padding: 15px;
  width: 120px;
`;

export const TxtButton = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const LongBtn = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-top: 15px;
  background-color: #fff;
  border-radius: 30;
  width: 250px;
`;

export const BtnImage = styled.Image`
  width: 45px;
  height: 45px;
  margin-right: 25px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
