import styled from "styled-components";
import { Link } from "../../shared/ui";

export const Wrapper = styled.header`
  width: 100vw;
  height: 50px;

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
  }
`;
