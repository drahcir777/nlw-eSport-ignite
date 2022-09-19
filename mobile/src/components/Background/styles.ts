import styled from "styled-components/native";
import backgroundImg from "../../assets/background-galaxy.png";

export const Container = styled.ImageBackground.attrs(({ theme }) => ({
  source: backgroundImg,
  defaultSource: backgroundImg,
}))`
  flex: 1;
  background-color: "#18181B";
`;
