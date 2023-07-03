import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import useHero from "./useHero";

import Button from "#base/Button.styled";
import Column from "#base/Column.styled";
import Spacer from "#base/Spacer.styled";

import EmailLink from "#features/EmailLink/EmailLink";
import LogoFull from "#features/LogoFull/LogoFull";

import * as Styled from "./Hero.styled";

export default function Hero() {
  const data = useHero();
  return (
    <Styled.HeroWrapper>
      <Styled.HeroContainer>
        <Styled.HeroColumn $sm="span 12" $md="span 6" $lg="span 4">
          <LogoFull
            style={{ maxWidth: "100%", height: "auto" }}
            title="Rent a sim; we bring the fun to you!"
          />
          <Styled.HeroText>
            We bring a self-contained, state of the art simulator with the
            ability to set up anywhere within the tri-state area!
          </Styled.HeroText>
          <Spacer $top="1rem" />
        </Styled.HeroColumn>
        <Column $sm="span 12" $lg="span 8" />
        <Column $sm="span 12" $lg="span 2">
          <Styled.HeroText>
            email us to reserve yours or learn more!
          </Styled.HeroText>
        </Column>
        <Column $sm="span 12" $lg="span 2">
          <EmailLink Component={Button}>info@rentasim.co</EmailLink>
        </Column>
      </Styled.HeroContainer>
      <Styled.HeroImage>
        <GatsbyImage image={getImage(data.golfer)} alt="Rent a sim" />
      </Styled.HeroImage>
      <Styled.HeroOverflow />
    </Styled.HeroWrapper>
  );
}
