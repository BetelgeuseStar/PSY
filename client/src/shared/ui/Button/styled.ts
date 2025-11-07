import styled from "styled-components";
import { Button as AntButton } from "antd";

export const Button = styled(AntButton)`
  box-sizing: border-box;

  min-width: 140px;
  height: 40px;

  background: linear-gradient(180deg, #754447 0%, #623437 50%, #4e2426 100%);
  border: 2px solid #b38687;
  border-radius: 15px;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #b38687;

  &:hover {
    background: linear-gradient(
      180deg,
      #754447 0%,
      #623437 50%,
      #4e2426 100%
    ) !important;
    border: 2px solid #3ba4a9 !important;
    box-shadow: 0px 4px 31.2px 10px rgba(59, 164, 169, 0.5) !important;

    color: #3ba4a9 !important;
  }

  &:active {
    color: #2a7276 !important;
    background: linear-gradient(
      180deg,
      #754447 0%,
      #623437 50%,
      #4e2426 100%
    ) !important;
    border: 2px solid #2a7276 !important;
    box-shadow: 0px 4px 31.2px 10px rgba(41, 104, 108, 0.5) !important;
  }
`;
