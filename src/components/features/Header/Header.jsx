import React from "react";

import Button from "#base/Button.styled";
import EmailLink from "#features/EmailLink/EmailLink";
import Icon from "#features/Icon/Icon";

import * as Styled from "./Header.styled";
import useHeader from "./useHeader";

export default function Header() {
  const { navigation, socials } = useHeader();
  console.log(navigation, socials);
  return (
    <Styled.Header>
      <Styled.Inner $row="1rem">
        <Styled.Block>
          <Styled.Logo />
          <Styled.Navigation>
            <Styled.List>
              {navigation.map((nav, i) => (
                <li key={`${nav.title}-${i}`}>
                  <Styled.Link href={nav.url}>{nav.title}</Styled.Link>
                </li>
              ))}
            </Styled.List>
          </Styled.Navigation>
        </Styled.Block>
        <Styled.Block $hide={true}>
          <EmailLink Component={Button}>book now!</EmailLink>
          {socials.map((social, i) => (
            <Styled.Social
              href={social.link}
              key={`${social.icon}-${i}`}
              title={social.name}
            >
              <Icon icon={social.icon} />
            </Styled.Social>
          ))}
        </Styled.Block>
      </Styled.Inner>
    </Styled.Header>
  );
}
