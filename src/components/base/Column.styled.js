import { styled, css } from "styled-components";

const Column = styled.div`
  grid-column: ${({ $sm }) => $sm || "span 12"};

  ${({ $md }) =>
    $md &&
    css`
      @media (min-width: 700px) {
        grid-column: ${$md};
      }
    `}

  ${({ $lg }) =>
    $lg &&
    css`
      @media (min-width: 900px) {
        grid-column: ${$lg};
      }
    `}
`;

export default Column;
