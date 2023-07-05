import React, { useState } from "react";

import Button from "#base/Button.styled";
import Input from "#base/Input.styled";

import * as Styled from "./SubscribeForm.styled";

const Idle = () => null;

const message = { Idle, Error, Loading, Success };

export default function SubscribeForm(props) {
  const [status, setStatus] = useState("Idle");
  const Message = message[status];

  return (
    <>
      <Styled.SubscribeForm
        action="/"
        data-netlify="true"
        method="post"
        name="subscribe"
        onSubmit={submitHandler}
        {...props}
      >
        <input type="hidden" name="form-name" value="subscribe" />
        <Input
          type="email"
          name="email"
          placeholder="Email"
          $variant="dark"
          required
        />
        <div>
          <Button type="submit">sign up</Button>
        </div>
      </Styled.SubscribeForm>
      <Message />
    </>
  );

  async function submitHandler(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    try {
      setStatus("Loading");
      const response = await fetch(form.action, {
        method: form.method,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });
      if (!response.ok) return setStatus("Error");
      setStatus("Success");
    } catch (err) {
      setStatus("Error");
      console.error(err);
    }
  }
}

function Error() {
  return <>Oh no! Something went wrong. Please try again later.</>;
}

function Loading() {
  return <>Subscribing...</>;
}

function Success() {
  return <>Thank you for subscribing!</>;
}
