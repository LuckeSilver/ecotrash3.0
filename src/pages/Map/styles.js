import styled from "styled-components/native";
import { StyleSheet, Dimensions } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: #21252d;
`;

export const TotensContainer = styled.ScrollView`
  width: 100%;
  max-height: 200px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 5px;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: #fff;
  text-align: justify;
`;

export const ButtonRef = styled.TouchableOpacity`
  position: absolute;
  align-self: flex-end;
  padding: 10px;
`;

export const Img = styled.Image``;

export const ContainerTotenImage = styled.View``;
