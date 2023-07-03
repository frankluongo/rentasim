import React from "react";

export default function EmailLink({ children, Component, ...rest }) {
  return (
    <Component
      as="a"
      href="mailto:info@rentasim.co"
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
    </Component>
  );
}
