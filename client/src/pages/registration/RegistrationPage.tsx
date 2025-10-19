import React from "react";
import * as Styled from "./styled.ts";
import { Label, Link, Text } from "../../shared/ui";
import { useNavigate } from "react-router";
import { FieldRule } from "../../entities/Form/types.ts";
import { Form } from "../../entities/Form";

export function RegistrationPage() {
  const navigate = useNavigate();
  const navigateToAuthPage = () => navigate("/auth");

  return (
    <Styled.Wrapper>
      <Styled.Body>
        <Label />
        <Text style={{ fontSize: 24 }}>Регистрация</Text>
        <Text style={{ fontSize: 16 }}>
          Пожалуйста введите логин, почту и пароль для регистрации аккаунта
        </Text>
        <Form
          inputs={[
            { name: "login", rules: [FieldRule.required] },
            { name: "email", rules: [FieldRule.required, FieldRule.email] },
            {
              name: "password",
              rules: [FieldRule.required, FieldRule.passwordLength],
            },
          ]}
          button={{ title: "Зарегистрироваться" }}
          onSubmit={(data) => console.log(data)}
        />
        <Link onClick={navigateToAuthPage}>Вернуться на страницу входа</Link>
      </Styled.Body>
    </Styled.Wrapper>
  );
}
