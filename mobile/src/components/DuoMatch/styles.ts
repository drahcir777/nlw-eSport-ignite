import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.OVERLAY};
`;

export const Content = styled.View`
  width: 311px;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const CloseIcon = styled.TouchableOpacity`
  align-self: flex-end;
  margin: 16px;
`;

export const Label = styled.TouchableOpacity`
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
  margin-top: 24px;
  margin-bottom: 8px;
`;

export const DiscordButton = styled.TouchableOpacity`
  color: ${({ theme }) => theme.COLORS.TEXT};
  width: 231px;
  height: 48px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-bottom: 32px;
`;

export const Discord = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
