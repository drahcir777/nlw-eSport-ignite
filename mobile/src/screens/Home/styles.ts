import { ImageProps } from "react-native";
import styled from "styled-components/native";
import logoImg from "./../../assets/logo-nlw-esports.png";

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Logo = styled.Image.attrs(({ source }: ImageProps) => ({
  source: logoImg,
}))`
  width: 214px;
  height: 120px;
  margin-top: 74px;
  margin-bottom: 48px;
`;
