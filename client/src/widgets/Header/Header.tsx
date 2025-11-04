import * as Styled from "./styled.ts";
import { Dropdown, Label, Link } from "../../shared/ui";
import type { MenuProps } from "antd";

export function Header() {
  const dropdownItems: MenuProps["items"] = [
    {
      key: "1",
      label: <Link>Настройки</Link>,
    },
    {
      key: "2",
      label: <Link>Выход</Link>,
    },
  ];

  return (
    <Styled.Wrapper>
      <Label />
      <Styled.MenuWrapper>
        <Styled.HeaderLink>Анкеты</Styled.HeaderLink>
        <Styled.HeaderLink>Маркеры</Styled.HeaderLink>
        <Dropdown menu={{ items: dropdownItems }}>
          <Styled.HeaderLink>UserName</Styled.HeaderLink>
        </Dropdown>
      </Styled.MenuWrapper>
    </Styled.Wrapper>
  );
}
