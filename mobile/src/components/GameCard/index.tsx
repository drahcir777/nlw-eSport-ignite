import React from "react";
import { TouchableOpacityProps } from "react-native";

import * as S from "./styles";

export interface GameCardProps {
  id: string;
  title: string;
  _count: {
    ads: number;
  };
  bannerUrl: string;
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps;
}

export function GameCard({ data, ...rest }: Props) {
  return (
    <S.Container {...rest}>
      <S.Cover
        source={{
          uri: `${data.bannerUrl}`,
        }}
      >
        <S.Footer>
          <S.Name>{data.title}</S.Name>
          <S.Ads>{data._count.ads} anuncios</S.Ads>
        </S.Footer>
      </S.Cover>
    </S.Container>
  );
}
