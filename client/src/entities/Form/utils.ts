import { FieldRule } from "./types.ts";

export function getRules(rules: FieldRule[], name: string) {
  const result: object = {};

  rules.forEach((rule) => {
    switch (rule) {
      case FieldRule.required:
        result.required = `Заполните поле ${name}`;
        break;
      case FieldRule.email:
        result.pattern = {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          message: "Некорректный email адрес",
        };
        break;
      case FieldRule.passwordLength:
        result.minLength = {
          value: 6,
          message: "Пароль должен содержать как минимум 6 символов",
        };
        break;
    }
  });

  return result;
}
