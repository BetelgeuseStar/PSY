import type { FieldError, FieldPath } from "react-hook-form";
import { Controller, useForm } from "react-hook-form";
import { Button, Input, Text } from "../../shared/ui";
import * as Styled from "./styled.ts";
import React from "react";
import type { FormProps } from "./types.ts";
import { getRules } from "./utils.ts";

export function Form({ inputs, button, onSubmit }: FormProps) {
  type FieldNames = (typeof inputs)[number]["name"];
  type FieldValues = Record<FieldNames, string>;

  const {
    control,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm<FieldValues>();

  const onError = (errors) => {
    const currentError = Object.keys(errors)?.[0] as FieldPath<FieldValues>;
    setFocus(currentError);
  };

  const currentError: FieldError | null = Object.values(errors)?.[0] ?? null;

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit, onError)}>
      {inputs.map((input) => {
        const { name, rules } = input;
        return (
          <Controller
            name={name}
            control={control}
            rules={getRules(rules, name)}
            key={name}
            render={({ field }) => (
              <Input
                status={errors[name] === currentError ? "error" : ""}
                placeholder={name}
                {...field}
              />
            )}
          />
        );
      })}
      <Styled.ErrorMessageWrapper>
        <Text type="danger">{currentError?.message ?? ""}</Text>
      </Styled.ErrorMessageWrapper>
      <Button htmlType="submit">{button.title}</Button>
    </Styled.Form>
  );
}
