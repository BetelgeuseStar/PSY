import * as Styled from "./styled.ts";
import { Dropdown, Label, Link } from "../../shared/ui";
import type { MenuProps } from "antd";
import { useAuthContext } from "../../app/AuthProvider";
import { useNavigate } from "react-router";

export function Header() {
  const { logout } = useAuthContext();

  const navigate = useNavigate();
  const path = window.location.pathname;

  const dropdownItems: MenuProps["items"] = [
    {
      key: "1",
      label: <Link>Настройки</Link>,
    },
    {
      key: "2",
      label: <Link onClick={logout}>Выход</Link>,
    },
  ];

  return (
    <Styled.Wrapper>
      <Label />
      <Styled.MenuWrapper>
        <Styled.HeaderLink
          active={path == "/persons" ? "true" : "false"}
          onClick={() => navigate("/persons")}
        >
          Персоны
        </Styled.HeaderLink>
        <Styled.HeaderLink
          active={path == "/markers" ? "true" : "false"}
          onClick={() => navigate("/markers")}
        >
          Маркеры
        </Styled.HeaderLink>
        <Dropdown menu={{ items: dropdownItems }}>
          <Styled.HeaderLink>UserName</Styled.HeaderLink>
        </Dropdown>
      </Styled.MenuWrapper>
    </Styled.Wrapper>
  );
}
