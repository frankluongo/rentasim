import React from "react";

import Button from "#base/Button.styled";

import useContactForm from "./useContactForm";

import * as Styled from "./ContactForm.styled";

export default function ContactForm() {
  const { handleForm, status } = useContactForm();

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
      <div>
        <Button type="submit">send your message</Button>
      </div>
      {status.msg && <Styled.Message>{status.msg}</Styled.Message>}
    </Styled.Form>
  );
}
