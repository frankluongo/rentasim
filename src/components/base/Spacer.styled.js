import { styled, css } from "styled-components";

const Spacer = styled.div`
  padding-top: ${({ $top }) => $top || 0};

  ${({ $mdTop }) =>
    $mdTop &&
    css`
      @media (min-width: 700px) {
        grid-column: ${$mdTop};
      }
    `}

  ${({ $lgTop }) =>
    $lgTop &&
    css`
      @media (min-width: 900px) {
        grid-column: ${$lgTop};
      }
    `}
`;

export default Spacer;
