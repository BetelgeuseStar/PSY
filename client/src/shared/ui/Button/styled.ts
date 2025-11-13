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

export const IconButton = styled(Button)`
  min-width: 50px;
  min-height: 50px;

  & > span {
    padding-top: 2px;
    width: 25px;

    fill: #b38687;

    transition: all 0.3s;
  }

  & svg {
    width: 25px;
    height: 25px;
  }

  &:hover {
    & span {
      fill: #3ba4a9;
      transition: all 0.3s;
    }
  }

  &:active {
    & span {
      fill: #2a7276;
      transition: all 0.3s;
    }
  }
`;
