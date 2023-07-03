import React from "react";

import Footer from "#features/Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
