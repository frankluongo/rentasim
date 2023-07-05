import { styled } from "styled-components";

import Column from "#base/Column.styled";

export const Copyright = styled.div`
  padding-block: 1rem;

  background-color: var(--color-black);
`;

export const CopyrightColumn = styled(Column)`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const CopyrightText = styled.small`
  color: var(--color-white);
  font-weight: 700;
  line-height: 1.2;
`;

export const Footer = styled.footer`
  position: relative;

  padding-top: 2rem;

  background-color: var(--color-blue-darkest);
`;

export const FooterColumn = styled(Column)`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  color: var(--color-white);
`;

export const FooterDivider = styled.div`
  left: 0;
  position: absolute;
  top: 6.75rem;

  height: 0.25rem;
  width: 24.5%;

  background: var(--color-blue-default);
  border-radius: 0 0.25rem 0.25rem 0;

  @media (max-width: 899.5px) {
    display: none;
  }
`;

export const FooterLink = styled.a.attrs({
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
