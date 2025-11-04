import * as Styled from "./styled.ts";
import { Label, Link, Text } from "../../shared/ui";
import { useNavigate } from "react-router";
import { Form } from "../../entities/Form";
import { FieldRule } from "../../entities/Form/types.ts";
import { useAuthContext } from "../../app/AuthProvider";

export const AuthPage = () => {
  const navigate = useNavigate();
  const navigateToRegistrationPage = () => navigate("/registration");

  const { login } = useAuthContext();

  function loginHandler(email: string, password: string) {
    login(email, password).then(() => navigate("/worksheetsList"));
  }

  return (
    <Styled.Wrapper>
      <Styled.Body>
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
            },
          ]}
          button={{ title: "Войти" }}
          onSubmit={({ email, password }) => loginHandler(email, password)}
        />
        <Link onClick={navigateToRegistrationPage}>
          Зарегистрировать новый аккаунт
        </Link>
      </Styled.Body>
    </Styled.Wrapper>
  );
};
