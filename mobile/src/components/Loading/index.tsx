import React from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";

import { Container } from "./styles";

export function Loading() {
  const theme = useTheme();
  return (
    <Container>
      <ActivityIndicator color={theme.COLORS.PRIMARY} />
    </Container>
  );
}
