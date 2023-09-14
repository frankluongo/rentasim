import { styled } from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

import BaseWrapper from "#base/Wrapper.styled";

const opts = {
  shouldForwardProp: (p) => p !== "image",
};

export const Image = styled(GatsbyImage, opts)`
  position: relative;

  border-radius: 1rem;
  overflow: hidden;

  [data-gatsby-image-wrapper] {
    inset: 0;
    position: absolute;

    height: 100%;
    width: 100%;
  }
`;

export const Wrapper = styled(BaseWrapper)`
  background: var(--color-blue-darkest);

  color: var(--color-white);
`;
