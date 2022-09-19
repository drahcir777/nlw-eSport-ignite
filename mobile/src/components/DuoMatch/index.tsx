import { MaterialIcons } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";
import { CheckCircle } from "phosphor-react-native";
import React, { useState } from "react";
import { ActivityIndicator, Alert, Modal, ModalProps } from "react-native";

import { useTheme } from "styled-components";
import { Heading } from "../Heading";
import * as S from "./styles";

interface Props extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
  const [isCopying, setIsCopying] = useState(false);
  const theme = useTheme();

  async function handleCopyDiscordToClipboard() {
    setIsCopying(true);
    await Clipboard.setStringAsync(discord);

    Alert.alert(
      "Discord Copiado!",
      "Usuário copiado para você colar no Discord."
    );
    setIsCopying(false);
  }

  return (
    <Modal animationType="fade" transparent statusBarTranslucent {...rest}>
      <S.Container>
        <S.Content>
          <S.CloseIcon onPress={onClose}>
            <MaterialIcons
              name="close"
              size={20}
              color={theme.COLORS.CAPTION_500}
            />
          </S.CloseIcon>

          <CheckCircle size={64} color={theme.COLORS.SUCCESS} weight="bold" />

          <Heading
            title="Let's play!"
            subtitle="Agora é só começar a jogar"
            style={{ alignItems: "center", marginTop: 24 }}
          />
          <S.Label>Adicione no discord</S.Label>

          <S.DiscordButton
            onPress={handleCopyDiscordToClipboard}
            disabled={isCopying}
          >
            <S.Discord>
              {isCopying ? (
                <ActivityIndicator color={theme.COLORS.PRIMARY} />
              ) : (
                discord
              )}
            </S.Discord>
          </S.DiscordButton>
        </S.Content>
      </S.Container>
    </Modal>
  );
}
