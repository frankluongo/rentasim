import { styled } from "styled-components";

const styles = {
  default: {
    bg: {
      dark: "var(--color-blue-darkest)",
      light: "var(--color-gray-lightest)",
    },
    border: {
      dark: "var(--color-gray-default)",
      light: "var(--color-gray-default)",
    },
    color: {
      dark: "var(--color-white)",
      light: "var(--color-black)",
    },
  },
  active: {
    bg: {
      dark: "var(--color-black)",
      light: "var(--color-white)",
    },
    border: {
      dark: "var(--color-white)",
      light: "var(--color-blue-default)",
    },
  },
};

const Input = styled.input`
  display: block;
  height: 2.5rem;
  padding: 0.25rem 1rem;

  color: ${(props) => styles.default.color[props.$variant || "light"]};

  background: ${(props) => styles.default.bg[props.$variant || "light"]};
  border: 1px solid
    ${(props) => styles.default.border[props.$variant || "light"]};
  border-radius: 0.25rem;
  transition: border-color 150ms ease-in-out, background 150ms ease-in-out;

  &:is(:focus) {
    background: ${(props) => styles.active.bg[props.$variant || "light"]};
    border: 1px solid
      ${(props) => styles.active.border[props.$variant || "light"]};
    outline: none;
  }
`;

export default Input;
