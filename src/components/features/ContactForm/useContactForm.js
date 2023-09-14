import { useState } from "react";

export default function useContactForm() {
  const [status, setStatus] = useState({ msg: null, type: "idle" });

  return { handleForm, status };

  async function handleForm(e) {
    e.preventDefault();
    setStatus({ msg: "Sending...", type: "pending" });
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
      if (!response.ok) throw new Error(response.statusText);
      form.reset();
      setStatus({
        msg: "Thank you for reaching out! We'll be in touch soon",
        type: "success",
      });
    } catch (err) {
      setStatus({ msg: "Something went wrong", type: "error" });
      console.error(err);
    }
  }
}
