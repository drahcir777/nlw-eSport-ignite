import styled from "styled-components/native";

export const Container = styled.View`
  width: 200px;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
  border-radius: 8px;
  padding: 20px;
  margin-right: 16px;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 36px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
  margin-left: 8px;
`;
