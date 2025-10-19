import styled from "styled-components";
import { Input as AntInput } from "antd";

export const Input = styled(AntInput)`
  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  gap: 10px;

  /* White */
  background: #ffffff;
  /* Gray */
  border: 2px solid #b38687;
  border-width: 2px !important;
  border-radius: 4px;

  font-size: 16px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 19px;

  color: #414141 !important;

  &:hover {
    box-shadow: 0px 4px 31.2px 0px rgba(59, 164, 169, 0.5) !important;
  }

  &:focus {
    box-shadow: 0px 4px 31.2px 10px rgba(59, 164, 169, 0.5) !important;
  }

  &.ant-input-status-error {
    box-shadow: 0px 4px 31.2px 10px rgba(195, 23, 32, 0.5) !important;
  }
`;
