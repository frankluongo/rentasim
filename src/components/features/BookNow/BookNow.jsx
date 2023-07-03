import React from "react";

import Button from "#base/Button.styled";
import EmailLink from "#features/EmailLink/EmailLink";
import Container from "#base/Container.styled";

import * as Styled from "./BookNow.styled";

export default function BookNow() {
  return (
    <Styled.Wrapper>
      <Container>
        <Styled.Inner>
          <h2 style={{ color: `var(--palette-primary__default)` }}>
            what are you waiting for?
          </h2>
          <EmailLink Component={Button} as="a" href="mailto:info@rentasim.co">
            email us to book now
          </EmailLink>
        </Styled.Inner>
      </Container>
    </Styled.Wrapper>
  );
}
