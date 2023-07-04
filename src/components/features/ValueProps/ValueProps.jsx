import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Column from "#base/Column.styled";
import Container from "#base/Container.styled";
import Spacer from "#base/Spacer.styled";

import useValueProps from "./useValueProps";

import * as Styled from "./ValueProps.styled";

export default function ValueProps() {
  const { data, items } = useValueProps();
  return (
    <Container $row="1rem">
      <Column as="header" $sm="span 12">
        <h2 style={{ color: `var(--palette-primary__default)` }}>
          we're perfect for your next event
        </h2>
      </Column>
      <Styled.LineWrapper $sm="1 / span 2" $md="7 / span 1" $lg="5 / span 1">
        <Styled.Line />
      </Styled.LineWrapper>
      <Column $sm="span 12" />
      {items.map((item) => (
        <React.Fragment key={item.number}>
          <Styled.Image $sm="span 12" $md="span 6" $lg="1 / span 4">
            <GatsbyImage
              image={getImage(data[item.image])}
              alt={item.heading}
            />
          </Styled.Image>
          <Styled.NumberWrapper $sm="span 2" $md="span 1" $lg="span 1">
            <Styled.Number>{item.number}</Styled.Number>
            <Styled.NumberLineWrapper>
              {!item.last && (
                <Styled.Line
                  height="calc(100% + 2rem)"
                  style={{ position: "absolute", top: "0" }}
                />
              )}
            </Styled.NumberLineWrapper>
          </Styled.NumberWrapper>
          <Column $sm="span 10" $md="span 5" $lg="span 6">
            <Styled.Heading>{item.heading}</Styled.Heading>
            <Styled.Description>{item.description}</Styled.Description>
          </Column>
          {!item.last && (
            <Spacer as={Column} $sm="span 12" $top="3rem" $lgTop="6rem" />
          )}
        </React.Fragment>
      ))}
    </Container>
  );
}
