import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Column from "#base/Column.styled";
import ContactForm from "#features/ContactForm/ContactForm";
import Container from "#base/Container.styled";
import Typography from "#base/Typography.styled";

import usePricing from "./usePricing";

import * as Styled from "./Pricing.styled";

export default function Pricing() {
  const image = usePricing();
  return (
    <Styled.Pricing>
      <Container $row="2rem">
        <Column as="header" $sm="span 12">
          <h2>can't wait? book now!</h2>
          <Typography as="p" $variant="h5">
            Sessions start at $2,000
          </Typography>
        </Column>
        <Styled.Content $sm="span 12" $md="span 6" $lg="span 6">
          <Styled.Subheading>
            fill out our form to get started
          </Styled.Subheading>
          <ContactForm />
        </Styled.Content>
        <Styled.Content $sm="span 12" $md="span 6" $lg="8 / span 5">
          <Styled.Subheading>areas we serve (approximately)</Styled.Subheading>
          <GatsbyImage image={getImage(image)} alt="Rent a sim" />
        </Styled.Content>
      </Container>
    </Styled.Pricing>
  );
}
