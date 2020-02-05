import styled from "styled-components/native";

export const Container = styled.View`
  height: 46px;
  background: transparent;
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: "rgba(255,255,255,0.8)"
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #fff;
  border-bottom-width: 1px;
  border-bottom-color: #71a202;
`;
