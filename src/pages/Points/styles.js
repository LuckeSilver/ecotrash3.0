import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #21252d;
`;

export const FlexRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
`;

export const Title = styled.Text`
  text-align: left;
  font-size: 18px;
  color: #fff;
  font-weight: 500;
  margin-left: 20px;
`;

export const Text = styled.Text`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
`;

export const Content = styled.View`
  align-items: center;
`;

export const ContentButton = styled.TouchableOpacity`
  background-color: transparent;
`;
