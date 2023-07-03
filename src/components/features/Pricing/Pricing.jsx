import React from "react";

import Column from "#base/Column.styled";
import Container from "#base/Container.styled";
import ExternalLink from "#base/ExternalLink.styled";

import * as Styled from "./Pricing.styled";

export default function Pricing() {
  return (
    <Container $row="2rem">
      <Column as="header" $sm="span 12">
        <h2>simulator pricing</h2>
      </Column>
      <Styled.Option as="article" $sm="span 12" $md="span 6" $lg="span 4">
        <Styled.OptionTitle>
          <span>3</span>
          <small>
            hour
            <br />
            session
          </small>
        </Styled.OptionTitle>
        <Styled.OptionDescription>
          cost: <strong>$2000</strong>
        </Styled.OptionDescription>
      </Styled.Option>
      <Styled.Option as="article" $sm="span 12" $md="span 6" $lg="span 4">
        <Styled.OptionTitle>
          <span>4</span>
          <small>
            hour
            <br />
            session
          </small>
        </Styled.OptionTitle>
        <Styled.OptionDescription>
          cost: <strong>$2500</strong>
        </Styled.OptionDescription>
      </Styled.Option>
      <Styled.Option as="article" $sm="span 12" $md="span 6" $lg="span 4">
        <Styled.OptionTitle>
          need
          <br />
          something else?
        </Styled.OptionTitle>
        <Styled.OptionDescription>
          contact{" "}
          <ExternalLink href="mailto:info@rentasim.co">
            info@rentasim.co
          </ExternalLink>{" "}
          for more pricing options
        </Styled.OptionDescription>
      </Styled.Option>
    </Container>
  );
}
