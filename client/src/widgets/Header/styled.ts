import styled from "styled-components";
import { Link } from "../../shared/ui";
import { CaretDownIcon, UserIcon as OuterUserIcon } from "../../shared/icons";

export const Wrapper = styled.header`
  width: 100vw;
  height: 50px;
  z-index: 200;

  background: linear-gradient(180deg, #754447 0%, #623437 50%, #4e2426 100%);
  border-bottom: 2px solid #b38687;
  box-shadow: 0px 4px 31.2px 10px rgba(179, 134, 135, 0.5);

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 20px;
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;
`;

export const HeaderLink = styled(Link)`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;

  &[active="true"] {
    color: #3ba4a9 !important;

    cursor: default;

    svg {
      fill: #3ba4a9;
    }
  }
`;

export const UserLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;

  cursor: pointer;

  gap: 3px;

  &:hover {
    svg {
      fill: #3ba4a9;
    }

    a {
      color: #3ba4a9 !important;
    }
  }
`;

export const UserLink = styled(Link)`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 15px;
  padding-top: 2px !important;
`;

export const UserIcon = styled(OuterUserIcon)`
  width: 15px;
  height: 15px;

  svg {
    width: 15px;
    height: 15px;
    transition: 0.3s all;
    fill: #b38687;
  }
`;

export const CaretIcon = styled(CaretDownIcon)`
  width: 11px;
  height: 11px;
  margin-left: 1px;

  svg {
    padding-top: 3px;
    width: 11px;
    height: 11px;
    transition: 0.3s all;
    fill: #b38687;
  }
`;
