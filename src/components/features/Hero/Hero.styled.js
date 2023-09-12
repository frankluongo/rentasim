import { styled } from "styled-components";

import Column from "#base/Column.styled";
import Container from "#base/Container.styled";
import Typography from "#base/Typography.styled";

export const HeroContainer = styled(Container)`
  position: relative;
  z-index: 2;

  margin-bottom: 15dvh;
  max-width: none;
  padding-inline: 0;

  @media (max-width: 899.5px) {
    padding-block: 1rem;
    padding-inline: 1rem;

    background-color: rgba(222, 239, 207, 0.85);
  }
`;

export const HeroWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  /* min-height: 74.25dvh; */
  min-height: 52.65dvw;
  max-height: 90dvh;

  background: var(--color-green-lightest);

  @media (max-width: 899.5px) {
    padding-inline: 2rem;
  }
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

export const HeroImage = styled.div`
  inset: 0;
  position: absolute;
  z-index: 1;

  iframe {
    height: 100%;
    width: 100%;

    pointer-events: none;
  }
`;

export const HeroOverflow = styled.div`
  left: 0;
  position: absolute;
  top: 100%;
  z-index: -1;

  height: 12rem;
  width: 42.5%;

  background: var(--color-green-lightest);
  border-radius: 0 0 4rem 0;

  @media (max-width: 899.5px) {
    display: none;
  }
`;

export const HeroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const HeroText = styled(Typography)`
  color: var(--color-green-default);
  font-style: italic;
  font-weight: 600;
  line-height: 1.6;
`;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  grid-column: 9 / span 4;
  padding: 3rem;

  background: white;
  border-radius: 1rem 0 0 3rem;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
`;
