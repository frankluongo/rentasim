import { styled } from "styled-components";

import Column from "#base/Column.styled";
import Container from "#base/Container.styled";
import Typography from "#base/Typography.styled";

export const HeroArrow = styled.svg`
  bottom: 0;
  position: absolute;
  right: 0;

  @media (max-width: 1299.5px) {
    display: none;
  }
`;

export const HeroContainer = styled(Container)`
  position: relative;
  z-index: 2;

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
  min-height: 30rem;

  background: var(--color-green-lightest);

  @media (max-width: 899.5px) {
    padding-inline: 2rem;
  }

  @media (min-width: 900px) {
    min-height: 40rem;
  }
`;

export const HeroColumn = styled(Column)`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 700px) {
    gap: 1.5rem;
  }
`;

export const HeroImage = styled.div`
  inset: 0;
  position: absolute;
  z-index: 1;

  [data-gatsby-image-wrapper] {
    height: 100%;
    width: 100%;
  }

  @media (min-width: 900px) {
    left: 42.5%;
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
