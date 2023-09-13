import { styled } from "styled-components";

const Container = styled.section`
  padding-inline: 1rem;
  max-width: 80rem;
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 1rem;
  row-gap: ${(props) => props.$row || 0};
  align-items: ${(p) => p.$align || "normal"};
`;

export default Container;
