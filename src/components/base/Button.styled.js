import { styled } from "styled-components";

const Button = styled.button`
  display: inline-block;
  padding: 0.75rem 1.5rem;

  color: var(--color-white);
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 1px;
  line-height: 1.6;
  text-decoration: none;

  appearance: none;
  background: var(--palette-secondary__dark);
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 150ms ease-in-out, color 150ms ease-in-out;

  &:is(:hover, :focus) {
    background: var(--palette-secondary__light);
  }

  &:is(:disabled, [disabled]) {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

export default Button;
