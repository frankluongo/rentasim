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
      <Styled.HeroContainer $row="1rem">
        <Styled.HeroColumn $sm="span 12" $md="span 6" $lg="span 4">
          <LogoFull
            style={{ maxWidth: "100%", height: "auto" }}
            title="Rent a sim; we bring the fun to you!"
          />
          <Styled.HeroText $variant="h5">
            We bring a self-contained, state of the art simulator with the
            ability to set up anywhere within the tri-state area!
          </Styled.HeroText>
          <Spacer $top="1rem" />
        </Styled.HeroColumn>

        <Column $sm="span 12" $lg="1 / span 2" style={{ position: "relative" }}>
          <Styled.HeroText>
            email us to reserve yours or learn more!
          </Styled.HeroText>
          <Styled.HeroArrow
            width="110"
            height="24"
            viewBox="0 0 110 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M99.058 1.05797C98.4737 0.47367 97.5263 0.473671 96.942 1.05797C96.3581 1.64191 96.3577 2.58852 96.9411 3.17297L104.255 10.5H1.50001C0.671578 10.5 0 11.1716 0 12C0 12.8284 0.671573 13.5 1.5 13.5H104.255L96.9411 20.827C96.3577 21.4115 96.3581 22.3581 96.942 22.942C97.5263 23.5263 98.4737 23.5263 99.058 22.942L108.939 13.0607C109.525 12.4749 109.525 11.5251 108.939 10.9393L99.058 1.05797Z"
              fill="#69A339"
            />
          </Styled.HeroArrow>
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
