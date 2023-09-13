import React from "react";
import { getImage } from "gatsby-plugin-image";

import Column from "#base/Column.styled";
import ContentColumn from "#base/ContentColumn.styled";
import Container from "#base/Container.styled";
import Typography from "#base/Typography.styled";

import useValueProps from "./useValueProps";

import * as Styled from "./ValueProps.styled";

export default function ValueProps() {
  const images = useValueProps();
  return (
    <Styled.Wrapper>
      <Container $row="2rem" $align="center">
        <Column as="header" $sm="span 12">
          <h2>how it all works</h2>
        </Column>
        <ContentColumn $sm="span 12" $md="span 6">
          <Styled.Subheading>
            we come to you, wherever you are
          </Styled.Subheading>
          <Typography as="p" $variant="h5">
            we drive to your location, set up, oversee the simulator and create
            a hassle-free entertainment experience
          </Typography>
          <Typography as="p" $variant="h5">
            all we need is a 10'W x 15'D x 10'H with access to power
          </Typography>
        </ContentColumn>
        <ContentColumn $sm="span 6" $md="span 3">
          <Styled.Image image={getImage(images.outside)} alt="Rent a sim" />
        </ContentColumn>
        <ContentColumn $sm="span 6" $md="span 3">
          <Styled.Image image={getImage(images.inside)} alt="Rent a sim" />
        </ContentColumn>
      </Container>
      <Container $row="2rem" $align="center">
        <Styled.ColumnReverse $sm="span 6" $md="span 3">
          <Styled.Image image={getImage(images.shooter)} alt="Rent a sim" />
          <Styled.Image image={getImage(images.hockey2)} alt="Rent a sim" />
        </Styled.ColumnReverse>
        <Styled.ColumnReverse $sm="span 6" $md="span 3">
          <Styled.Image image={getImage(images.zombies)} alt="Rent a sim" />
          <Styled.Image image={getImage(images.soccer2)} alt="Rent a sim" />
        </Styled.ColumnReverse>
        <ContentColumn $sm="span 12" $md="span 6">
          <Styled.Subheading>We have something for everyone</Styled.Subheading>
          <Typography as="p" $variant="h5">
            we have golf, soccer, baseball, hockey, zombies, etc. that can be
            switched seamlessly!
          </Typography>
        </ContentColumn>
      </Container>
      <Container $row="2rem" $align="center">
        <ContentColumn $sm="span 12" $md="span 6">
          <Styled.Subheading>
            we're the perfect fit for your event
          </Styled.Subheading>
          <Typography as="p" $variant="h5">
            corporate events, Bachelor parties, Weddings, Bar / Bat Mitzvahs,
            birthday parties, tailgates, you name it, we go there!
          </Typography>
        </ContentColumn>
        <ContentColumn $sm="span 6" $md="span 3">
          <Styled.Image image={getImage(images.movie)} alt="Rent a sim" />
        </ContentColumn>
        <ContentColumn $sm="span 6" $md="span 3">
          <Styled.Image image={getImage(images.golfer)} alt="Rent a sim" />
        </ContentColumn>
      </Container>
    </Styled.Wrapper>
  );
}
