import * as St from "./styled.ts";
import { Label, Link, Loader, Text } from "../../shared/ui";
import { useNavigate } from "react-router";
import { FieldRule } from "../../entities/Form/types.ts";
import { Form } from "../../entities/Form";
import { useAuthContext } from "../../app/AuthProvider";
import { useState } from "react";

//TODO: Реализовать соглашение на обработку данных

export const RegistrationPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const navigateToAuthPage = () => navigate("/auth");

  const { registration } = useAuthContext();

  function registrationHandler(login: string, email: string, password: string) {
    setIsLoading(true);
    registration(login, email, password)
      .then(() => navigate("/auth"))
      .finally(() => setIsLoading(false));
  }

  return (
    <St.Wrapper>
      <St.Body>
        <Label />
        <Text style={{ fontSize: 24 }}>Регистрация</Text>
        <Text style={{ fontSize: 16 }}>
          Пожалуйста введите логин, почту и пароль для регистрации аккаунта
        </Text>
        <Form
          inputs={[
            { name: "login", rules: [FieldRule.Required] },
            { name: "email", rules: [FieldRule.Required, FieldRule.Email] },
            {
              name: "password",
              rules: [FieldRule.Required, FieldRule.PasswordLength],
              type: "password",
            },
          ]}
          button={{ title: "Зарегистрироваться" }}
          onSubmit={({ login, email, password }) =>
            registrationHandler(login, email, password)
          }
        />
        <Link onClick={navigateToAuthPage}>Вернуться на страницу входа</Link>
      </St.Body>
      <Loader isLoading={isLoading} />
    </St.Wrapper>
  );
};
