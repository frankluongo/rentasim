import React from "react";
import useFooter from "./useFooter";

import Column from "#base/Column.styled";
import Container from "#base/Container.styled";
import Spacer from "#base/Spacer.styled";
import Typography from "#base/Typography.styled";

import Icon from "#features/Icon/Icon";
import LogoName from "#features/LogoName/LogoName";
import SubscribeForm from "#features/SubscribeForm/SubscribeForm";

import * as Styled from "./Footer.styled";

export default function Footer() {
  const data = useFooter();
  return (
    <Styled.Footer>
      <Container as="section" $row="2rem">
        <Column as="h2" $sm="span 12" style={{ color: "var(--color-white)" }}>
          {data.title}
        </Column>
        <Styled.FooterDivider />

        <Styled.FooterColumn $sm="span 12" $md="span 6" $lg="1 / span 3">
          <Typography
            as="h3"
            $variant="h3"
            style={{ color: "var(--palette-primary__default" }}
          >
            {data.columnOne.title}
          </Typography>
          <Typography as="p">{data.columnOne.description}</Typography>
          <Styled.FooterLink href={`mailto:${data.columnOne.email}`}>
            <Icon icon="Envelope" />
            {data.columnOne.email}
          </Styled.FooterLink>
          <Styled.FooterLink href={`tel:${data.columnOne.phone}`}>
            <Icon icon="Phone" />
            {data.columnOne.phone}
          </Styled.FooterLink>
        </Styled.FooterColumn>

        <Styled.FooterColumn $sm="span 12" $md="8 / span 5" $lg="5 / span 4">
          <h3>{data.columnTwo.title}</h3>
          <Typography as="p" $variant="h5">
            {data.columnTwo.description}
          </Typography>
          <SubscribeForm />
        </Styled.FooterColumn>

        <Styled.FooterColumn $sm="span 12" $lg="10 / span 3">
          <h3>{data.columnThree.title}</h3>
          {data.columnThree.socials.map((social, i) => (
            <Styled.FooterLink href={social.link} key={`${social.icon}-${i}`}>
              <Icon icon={social.icon} />
              {social.name}
            </Styled.FooterLink>
          ))}
        </Styled.FooterColumn>
      </Container>
      <Spacer $top="6rem" />
      <Styled.Copyright>
        <Container>
          <Styled.CopyrightColumn $sm="span 12">
            <LogoName style={{ height: "2rem", width: "auto" }} />
            <Styled.CopyrightText>
              &copy; Copyright {new Date().getFullYear()} SRZP Enterprises, LLC.
              All rights reserved.
            </Styled.CopyrightText>
          </Styled.CopyrightColumn>
        </Container>
      </Styled.Copyright>
    </Styled.Footer>
  );
}
