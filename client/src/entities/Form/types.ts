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

export enum FieldRule {
  email,
  required,
  passwordLength,
}
