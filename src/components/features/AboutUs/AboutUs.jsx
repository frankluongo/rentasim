import React from "react";
import { getImage } from "gatsby-plugin-image";

import Container from "#base/Container.styled";
import ContentCol from "#base/ContentColumn.styled";
import Typography from "#base/Typography.styled";

import useAboutUs from "./useAboutUs";

import * as Styled from "./AboutUs.styled";

export default function AboutUs() {
  const image = useAboutUs();

  return (
    <Styled.Wrapper>
      <Container $row="1rem">
        <ContentCol $sm="span 12" $md="span 6">
          <h2>about us</h2>
          <Typography as="p" $variant="h5">
            Welcome to Rent-a-Sim, where community, entertainment, and
            technology come together to provide the ultimate entertainment
            experience.
          </Typography>
          <Typography as="p" $variant="p">
            We are Zach and Scott, two friends who met freshman year at Drexel
            University. We've spent many years working in various financial and
            technology roles but with a passion for bringing people together in
            innovative ways. One of the best ways to get to know someone is by
            competing and having fun in a casual and informal setting
          </Typography>
        </ContentCol>
        <ContentCol $sm="span 12" $md="span 6">
          <Styled.Image image={getImage(image)} alt="Rent a sim" />
        </ContentCol>
      </Container>
    </Styled.Wrapper>
  );
}
