import { styled } from "styled-components";

import Container from "#base/Container.styled";
import Typography from "#base/Typography.styled";

import LogoName from "#features/LogoName/LogoName";

export const Block = styled.div`
  align-items: center;
  display: flex;
  gap: 2rem;

  @media (max-width: 899.5px) {
    gap: 1rem;
    flex-direction: column;
  }

  ${(p) =>
    p.$hide &&
    `
      @media (max-width: 899.5px) {
        display: none;
      }
    `}
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 99;

  padding-block: 1rem;

  background-color: var(--color-white);
`;

export const Inner = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

export const Link = styled(Typography).attrs({ as: "a" })`
  color: var(--palette-secondary__default);
  font-weight: 700;
  text-decoration: none;

  transition: color 0.2s ease-in-out;

  &:is(:hover, :focus) {
    color: var(--palette-secondary__dark);
  }

  @media (max-width: 899.5px) {
    font-size: 12px;
  }
`;

export const List = styled.ul`
  align-items: center;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;

  list-style: none;

  @media (min-width: 900px) {
    gap: 2rem;
  }
`;

export const Logo = styled(LogoName)`
  height: 1.5rem;
  width: auto;

  @media (min-width: 900px) {
    height: 3.5rem;
  }
`;

export const Navigation = styled.nav`
  align-items: center;
  display: flex;
`;

export const Social = styled.a.attrs({
  rel: "noopener noreferrer",
  target: "_blank",
})`
  align-items: center;
  display: flex;
  gap: 0.5rem;

  color: var(--color-white);
  font-weight: 700;
  font-style: italic;
  letter-spacing: 0.5px;
  text-decoration: none;
`;
