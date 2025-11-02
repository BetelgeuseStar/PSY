import { FieldRule } from "./types.ts";

export function getRules(rules: FieldRule[], name: string) {
  const result: Record<string, string | object> = {};

  rules.forEach((rule) => {
    switch (rule) {
      case FieldRule.Required:
        result.required = `Заполните поле ${name}`;
        break;
      case FieldRule.Email:
        result.pattern = {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          message: "Некорректный email адрес",
        };
        break;
      case FieldRule.PasswordLength:
        result.minLength = {
          value: 6,
          message: "Пароль должен содержать как минимум 6 символов",
        };
        result.maxLength = {
          value: 32,
          message: "Пароль не должен содержать больше 32 символов",
        };
        break;
    }
  });

  return result;
}
