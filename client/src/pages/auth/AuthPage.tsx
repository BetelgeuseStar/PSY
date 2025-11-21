import * as St from "./styled.ts";
import { Label, Link, Loader, Text } from "../../shared/ui";
import { useNavigate } from "react-router";
import { Form } from "../../entities/Form";
import { FieldRule } from "../../entities/Form/types.ts";
import { useAuthContext } from "../../app/AuthProvider";
import { useState } from "react";

export const AuthPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const navigateToRegistrationPage = () => navigate("/registration");

  const { login } = useAuthContext();

  function loginHandler(email: string, password: string) {
    setIsLoading(true);
    login(email, password)
      .then(() => navigate("/persons"))
      .finally(() => setIsLoading(false));
  }

  return (
    <St.Wrapper>
      <St.Body>
        <Label />
        <Text style={{ fontSize: 24 }}>Вход</Text>
        <Text style={{ fontSize: 16, width: "75%" }}>
          Пожалуйста введите почту и пароль для входа
        </Text>
        <Form
          inputs={[
            { name: "email", rules: [FieldRule.Required, FieldRule.Email] },
            {
              name: "password",
              rules: [FieldRule.Required, FieldRule.PasswordLength],
              type: "password",
            },
          ]}
          button={{ title: "Войти" }}
          onSubmit={({ email, password }) => loginHandler(email, password)}
        />
        <Link onClick={navigateToRegistrationPage}>
          Зарегистрировать новый аккаунт
        </Link>
      </St.Body>
      <Loader isLoading={isLoading} />
    </St.Wrapper>
  );
};
