import { styled } from "styled-components";

const Container = styled.section`
  padding-inline: 1.5rem;
  max-width: 80rem;
  margin-inline: auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 1rem;
  row-gap: ${(props) => props.$row || 0};
`;

export default Container;