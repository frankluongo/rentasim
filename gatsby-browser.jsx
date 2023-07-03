import React from "react";

import "#assets/global.css";
import Layout from "#features/Layout/Layout";

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
