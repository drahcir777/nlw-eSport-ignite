import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding-left: 32px;
  padding-right: 32px;
  margin-top: 28px;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  width: 72px;
  height: 40px;
`;

export const Right = styled.View`
  width: 20px;
  height: 20px;
`;

export const Cover = styled.Image`
  width: 311px;
  height: 160px;
  border-radius: 8px;
  margin-top: 32px;
`;

export const EmptyListContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const EmptyListText = styled.Text`
  color: ${({ theme }) => theme.COLORS.CAPTION_300};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
