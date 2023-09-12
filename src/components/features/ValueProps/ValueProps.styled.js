import { styled } from "styled-components";

import { GatsbyImage } from "gatsby-plugin-image";

import Column from "#base/Column.styled";
import Typography from "#base/Typography.styled";

export const Description = styled(Typography).attrs({
  as: "p",
  $variant: "h5",
})`
  margin-top: 0.5rem;

  font-style: italic;
`;

export const Heading = styled.h3`
  display: flex;
  align-items: center;

  color: var(--palette-primary__default);

  @media (min-width: 900px) {
    height: 6.5rem;
  }
`;

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

export const Line = styled.div`
  height: ${({ height }) => height || "5rem"};
  width: 0.2rem;

  background-color: var(--palette-background__light);
  border-radius: 0.25rem;
`;

export const LineWrapper = styled(Column)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Number = styled.div`
  min-height: 3.5rem;

  color: var(--palette-primary__light);
  font-size: 3rem;
  font-style: italic;
  font-weight: 900;

  @media (min-width: 700px) {
    min-height: 6.5rem;

    font-size: 6rem;
  }
`;

export const NumberWrapper = styled(Column)`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const NumberLineWrapper = styled.div`
  position: relative;

  height: 100%;
`;

export const Subheading = styled.h3`
  color: var(--palette-primary__default);
`;
