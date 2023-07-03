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
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1.2;

  @media (min-width: 700px) {
    font-size: 0.875rem;
  }
`;

export const Footer = styled.footer`
  padding-top: 2rem;

  background-color: var(--color-blue-darkest);
`;

export const FooterColumn = styled(Column)`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  color: var(--color-white);
`;

export const FooterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

export const FooterText = styled.p`
  font-size: 1rem;

  @media (min-width: 700px) {
    font-size: 1.25rem;
  }
`;
