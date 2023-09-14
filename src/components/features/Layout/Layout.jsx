import React from "react";

import Footer from "#features/Footer/Footer";
import Header from "#features/Header/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
