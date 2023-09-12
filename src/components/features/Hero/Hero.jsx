import React from "react";

import Button from "#base/Button.styled";

import EmailLink from "#features/EmailLink/EmailLink";
import LogoFull from "#features/LogoFull/LogoFull";

import * as Styled from "./Hero.styled";
import useHero from "./useHero";

export default function Hero() {
  const url = useHero();
  return (
    <Styled.HeroWrapper>
      <Styled.HeroContainer $row="1rem">
        <Styled.Overlay>
          <LogoFull
            style={{ maxWidth: "100%", height: "auto" }}
            title="Rent a sim; we bring the fun to you!"
          />
          <Styled.HeroText $variant="p">
            We bring a self-contained, state of the art simulator with the
            ability to set up anywhere within the tri-state area!
          </Styled.HeroText>
          <Styled.HeroText>
            email us to reserve yours or learn more!
          </Styled.HeroText>
          <EmailLink Component={Button}>info@rentasim.co</EmailLink>
        </Styled.Overlay>
      </Styled.HeroContainer>
      <Styled.HeroImage>
        <iframe
          width="560"
          height="315"
          src={url}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
      </Styled.HeroImage>
    </Styled.HeroWrapper>
  );
}
