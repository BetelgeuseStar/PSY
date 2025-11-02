import type { FieldValues, SubmitHandler } from "react-hook-form";

export type FormInput = {
  name: string;
  rules: FieldRule[];
};

export type FormProps = {
  inputs: FormInput[];
  button: { title: string };
  onSubmit: SubmitHandler<FieldValues>;
};

export const FieldRule = {
  Email: "email",
  Required: "required",
  PasswordLength: "passwordLength",
} as const;

export type FieldRule = (typeof FieldRule)[keyof typeof FieldRule];
