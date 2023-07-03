import { styled } from "styled-components";

import Column from "#base/Column.styled";

export const Wrapper = styled.div`
  background-color: var(--palette-primary__light);
`;

export const Inner = styled(Column).attrs({ $sm: "span 12" })`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  justify-content: center;
  padding-block: 4rem;

  text-align: center;
`;
