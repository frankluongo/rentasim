import * as React from "react";

import BookNow from "#features/BookNow/BookNow";
import Hero from "#features/Hero/Hero";
import Pricing from "#features/Pricing/Pricing";
import ValueProps from "#features/ValueProps/ValueProps";
import AboutUs from "#features/AboutUs/AboutUs";

const IndexPage = () => {
  return (
    <>
      <Hero />
      <Pricing />
      <ValueProps />
      <AboutUs />
      <BookNow />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>rent•a•sim</title>;
