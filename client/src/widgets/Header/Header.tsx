import * as St from "./styled.ts";
import { Dropdown, Label, Link } from "../../shared/ui";
import type { MenuProps } from "antd";
import { useAuthContext } from "../../app/AuthProvider";
import { useNavigate } from "react-router";
import { getUsers } from "../../shared/api";

export function Header() {
  const { logout, user } = useAuthContext();

  const navigate = useNavigate();
  const path = window.location.pathname;

  function getUsersReq() {
    getUsers().then((users) => console.log("Список пользователей: ", users));
  }

  const dropdownItems: MenuProps["items"] = [
    {
      key: "1",
      label: <Link onClick={getUsersReq}>Получить список пользователей</Link>,
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
          active={path == "/persons" ? "true" : "false"}
          onClick={() => navigate("/persons")}
        >
          Персоны
        </St.HeaderLink>
        <St.HeaderLink
          active={path == "/sources" ? "true" : "false"}
          onClick={() => navigate("/sources")}
        >
          Источники
        </St.HeaderLink>
        <Dropdown
          menu={{
            items: dropdownItems,
            style: {
              borderRadius: "4px",
              background:
                "linear-gradient(180deg, #754447 0%, #623437 50%, #4e2426 100%)",
              border: "2px solid #b38687",
            },
          }}
          overlayStyle={{}}
        >
          <St.UserLinkWrapper>
            <St.UserIcon />
            <St.UserLink>{user?.login ?? "noname"}</St.UserLink>
            <St.CaretIcon />
          </St.UserLinkWrapper>
        </Dropdown>
      </St.MenuWrapper>
    </St.Wrapper>
  );
}
