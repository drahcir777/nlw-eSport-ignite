import { GameController } from "phosphor-react-native";
import React from "react";
import { useTheme } from "styled-components";

import * as S from "./styles";

export interface DuoCardProps {
  id: string;
  name: string;
  hourEnd: string;
  hourStart: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

interface Props {
  data: DuoCardProps;
  onConnect: () => void;
}

export function DuoCard({ data, onConnect }: Props) {
  const theme = useTheme();
  return (
    <S.Container>
      <S.Button onPress={onConnect}>
        <GameController color={theme.COLORS.TEXT} size={20} />
        <S.ButtonText>Conectar</S.ButtonText>
      </S.Button>
    </S.Container>
  );
}
