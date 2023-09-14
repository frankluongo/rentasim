import { styled } from "styled-components";

import Typography from "#base/Typography.styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;

  background: #ffffff;
  border: 1px solid var(--color-gray-lighter);
  border-radius: 0.5rem 0.5rem 0.5rem 1rem;
`;

export const Input = styled.input`
  height: 2.5rem;
  padding-left: 1rem;
  width: 100%;

  font-size: 1rem;

  border: 1px solid var(--color-gray-light);
  border-radius: 0.375rem;
`;

export const Label = styled.label`
  width: 100%;
`;

export const LabelText = styled.span`
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
`;

export const Message = styled(Typography)``;

export const Textarea = styled.textarea`
  height: 6rem;
  padding: 1rem;
  width: 100%;

  font-size: 1rem;

  border: 1px solid var(--color-gray-light);
  border-radius: 0.375rem;
`;
