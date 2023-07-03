import { styled } from "styled-components";
import Column from "#base/Column.styled";

export const Header = styled.header`
  grid-column: 1 / -1;
`;

export const Option = styled(Column)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;

  background: var(--palette-background__default);
  border: 1px solid var(--palette-border__default);
  border-radius: 0.5rem;
`;

export const OptionDescription = styled.p`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;

  font-size: 1.25rem;
  font-style: italic;

  strong {
    font-size: 2em;
    font-weight: 900;
  }
`;

export const OptionTitle = styled.h3`
  align-items: center;
  display: flex;
  gap: 0.5rem;

  color: var(--palette-primary__default);

  span {
    font-size: 4rem;
  }

  small {
    font-size: 1em;
    line-height: 0.875;
  }
`;
