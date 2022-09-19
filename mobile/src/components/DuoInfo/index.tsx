import React from "react";
import { ColorValue } from "react-native";

import * as S from "./styles";

interface Props {
  label: string;
  value: string;
  colorValue?: ColorValue;
}

export function DuoInfo({ label, value, colorValue }: Props) {
  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Value style={[{ color: colorValue }]} numberOfLines={1}>
        {value}
      </S.Value>
    </S.Container>
  );
}
