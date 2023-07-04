import { styled } from "styled-components";

const Typography = styled.div`
  ${({ $variant }) => $variant && `font-size: var(--fs-${$variant});`};
`;

export default Typography;
