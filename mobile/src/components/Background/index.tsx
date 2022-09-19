import React from "react";

import { Container } from "./styles";

interface Props {
  children?: React.ReactNode;
}
export function Background({ children }: Props) {
  return <Container>{children}</Container>;
}
