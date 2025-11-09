import * as St from "./styled.ts";
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
    <St.Wrapper>
      <Label />
      <St.MenuWrapper>
        <St.HeaderLink
          active={path == "/personsList" ? "true" : "false"}
          onClick={() => navigate("/persons")}
        >
          Персоны
        </St.HeaderLink>
        <St.HeaderLink
          active={path == "/markers" ? "true" : "false"}
          onClick={() => navigate("/markers")}
        >
          Маркеры
        </St.HeaderLink>
        <Dropdown menu={{ items: dropdownItems }}>
          <St.HeaderLink>UserName</St.HeaderLink>
        </Dropdown>
      </St.MenuWrapper>
    </St.Wrapper>
  );
}
