import React from "react";
import { ViewProps } from "react-native";

import * as S from "./styles";

interface Props extends ViewProps {
  title: string;
  subtitle: string;
}

export function Heading({ title, subtitle, ...rest }: Props) {
  return (
    <S.Container {...rest}>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subtitle}</S.SubTitle>
    </S.Container>
  );
}
