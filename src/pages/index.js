import * as React from "react";

import Spacer from "#base/Spacer.styled";

import BookNow from "#features/BookNow/BookNow";
import Hero from "#features/Hero/Hero";
import Pricing from "#features/Pricing/Pricing";
import ValueProps from "#features/ValueProps/ValueProps";

const IndexPage = () => {
  return (
    <>
      <Hero />
      <Pricing />
      <Spacer $top="3rem" $lgTop="6rem" />
      <ValueProps />
      <Spacer $top="3rem" $lgTop="6rem" />
      <BookNow />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>rent•a•sim</title>;
