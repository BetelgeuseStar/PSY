import type { FieldError, FieldPath } from "react-hook-form";
import { Controller, useForm } from "react-hook-form";
import { Button, Input, Text } from "../../shared/ui";
import * as Styled from "./styled.ts";
import React, { useState } from "react";
import type { FormProps } from "./types.ts";
import { getRules } from "./utils.ts";

//TODO: Типизировать по нормальному

export function Form({ inputs, button, onSubmit }: FormProps) {
  type FieldNames = (typeof inputs)[number]["name"];
  type FieldValues = Record<FieldNames, string>;
  const [currentError, setCurrentError] = useState<FieldError | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
    setFocus,
    subscribe,
  } = useForm<FieldValues>();

  const onError = (errKeys) => {
    const currentErrorKey = Object.keys(errKeys)?.[0] as FieldPath<FieldValues>;
    setFocus(currentErrorKey);

    const unsubscribe = subscribe({
      formState: { errors: true },
      callback: ({ errors }) => {
        setCurrentError(
          Object.values(errors as Record<string, FieldError>)?.[0] ?? null,
        );
        unsubscribe();
      },
    });
  };

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
                onInput={() => setCurrentError(null)}
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
