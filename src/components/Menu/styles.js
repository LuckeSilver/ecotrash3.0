import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #282e39;
  justify-content: space-around;
  align-items: center;
`;

export const Link = styled.TouchableOpacity`
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const TextLink = styled.Text`
  font-size: 18px;
  font-weight: 100;
  color: #fff;
`;

export const Footer = styled.View`
  flex-direction: row;
`;

export const MediaButtons = styled.TouchableOpacity`
  margin-left: 20px;
  margin-right: 20px;
`;

export const Text = styled.Text`
  color: rgba(255, 255, 255, 0.3);
  font-size: 14px;
`;

export const Copy = styled.View`
  justify-content: center;
  align-items: center;
`;
