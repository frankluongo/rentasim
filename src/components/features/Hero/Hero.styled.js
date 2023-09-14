import { styled } from "styled-components";

import Column from "#base/Column.styled";
import Container from "#base/Container.styled";
import Typography from "#base/Typography.styled";

export const HeroContainer = styled(Container)`
  position: relative;
  z-index: 2;

  max-width: none;
  padding-inline: 0;
`;

export const HeroColumn = styled(Column)`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: #fff;

  @media (min-width: 700px) {
    gap: 1.5rem;
  }
`;

export const HeroImage = styled(Column)`
  position: relative;

  padding-top: 52.65%;

  iframe {
    position: absolute;
    inset: 0;

    height: 100%;
    width: 100%;

    pointer-events: none;
  }
`;

export const HeroText = styled(Typography)`
  color: var(--color-green-default);
  font-style: italic;
  font-weight: 600;
  line-height: 1.6;
`;

export const Overlay = styled(Column)`
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  padding: 1rem;

  background: white;

  @media (min-width: 900px) {
    grid-column: 9 / span 4;
    padding: 3rem;
  }
`;
