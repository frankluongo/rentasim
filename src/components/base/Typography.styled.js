import { styled } from "styled-components";

const Typography = styled.div`
  text-transform: lowercase;
  ${({ $variant }) => $variant && `font-size: var(--fs-${$variant || "p"});`};
`;

export default Typography;
