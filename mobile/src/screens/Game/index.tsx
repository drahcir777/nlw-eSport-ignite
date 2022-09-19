import { Entypo } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { GameParams } from "../../@types/navigation";
import { Background } from "../../components/Background";

import logoImg from "../../assets/logo-nlw-esports.png";

import { useTheme } from "styled-components";
import { DuoCard, DuoCardProps } from "../../components/DuoCard";
import { DuoMatch } from "../../components/DuoMatch";
import { Heading } from "../../components/Heading";
import * as S from "./styles";

export function Game() {
  const [duos, setDuos] = useState<DuoCardProps[]>([]);
  const [discordDuoSelected, setDiscordDuoSelected] = useState("");
  const theme = useTheme();
  const route = useRoute();
  const game = route.params as GameParams;

  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  async function getDiscordUser(adsId: string) {
    fetch(`http://localhost:3000/ads/${adsId}/discord`)
      .then((response) => response.json())
      .then((data) => setDiscordDuoSelected(data.discord));
  }

  useEffect(() => {
    fetch(`http://localhost:3000/games/${game.id}/ads`)
      .then((response) => response.json())
      .then((data) => setDuos(data));
  }, []);

  return (
    <Background>
      <S.Container>
        <S.Header>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              size={20}
              color={theme.COLORS.CAPTION_300}
            />
          </TouchableOpacity>

          <S.Logo source={logoImg} />

          <S.Right />
        </S.Header>

        <S.Cover source={{ uri: game.bannerUrl }} resizeMode="cover" />

        <Heading title={game.title} subtitle="Conecte-se e comece a jogar" />

        <FlatList
          data={duos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DuoCard
              data={item}
              onConnect={() => {
                getDiscordUser(item.id);
              }}
            />
          )}
          horizontal
          style={{
            width: "100%",
          }}
          contentContainerStyle={
            duos.length > 0
              ? { paddingLeft: 32, paddingRight: 64, alignItems: "center" }
              : { flex: 1, alignItems: "center", justifyContent: "center" }
          }
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
            <S.EmptyListText>Não há anúncios publicados ainda.</S.EmptyListText>
          )}
        />

        <DuoMatch
          visible={discordDuoSelected.length > 0}
          onClose={() => setDiscordDuoSelected("")}
          discord={discordDuoSelected}
        />
      </S.Container>
    </Background>
  );
}
