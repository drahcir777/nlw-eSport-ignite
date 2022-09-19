import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 32px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BLACK};
`;

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.CAPTION_400};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
