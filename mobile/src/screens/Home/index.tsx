import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { GameCard, GameCardProps } from "../../components/GameCard";
import { Header } from "../../components/Header";

import * as S from "./styles";

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/games")
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <S.Container>
      <S.Logo />
      <Header
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: 32,
          paddingRight: 64,
        }}
      />
    </S.Container>
  );
}
