import React from "react";

import Button from "#base/Button.styled";

import * as Styled from "./ContactForm.styled";

export default function ContactForm() {
  return (
    <Styled.Form onSubmit={handleForm}>
      <Styled.Label>
        <Styled.LabelText>Full Name</Styled.LabelText>
        <Styled.Input
          type="text"
          name="name"
          placeholder="full name"
          required={true}
        />
      </Styled.Label>
      <Styled.Label>
        <Styled.LabelText>Email Address</Styled.LabelText>
        <Styled.Input
          type="email"
          name="email"
          placeholder="yourname@emailaddress.com"
          required={true}
        />
      </Styled.Label>
      <Styled.Label>
        <Styled.LabelText>Full Name</Styled.LabelText>
        <Styled.Textarea
          name="message"
          placeholder="anything we need to know?"
        />
      </Styled.Label>
      <Button type="submit">send your message</Button>
    </Styled.Form>
  );

  async function handleForm(e) {
    e.preventDefault();
    const form = e.target;
    const body = new FormData(form);
    try {
      const response = await fetch(process.env.GATSBY_FORM_URL, {
        method: "POST",
        body,
        headers: {
          Accept: "application/json",
        },
      });
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  }
}
