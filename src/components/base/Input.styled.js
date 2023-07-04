import { styled } from "styled-components";

const Input = styled.input`
  display: block;
  height: 2.5rem;
  padding: 0.25rem 1rem;

  background: var(--color-blue-darkest);
  border: 1px solid var(--color-gray-default);
  border-radius: 0.25rem;
  transition: border-color 150ms ease-in-out, background 150ms ease-in-out;

  &:is(:focus) {
    background: var(--color-blue-darker);
    border: 1px solid var(--color-white);
    outline: none;
  }
`;

export default Input;
