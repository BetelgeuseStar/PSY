import styled from "styled-components";
import { Select as AntSelect } from "antd";

export const Select = styled(AntSelect)`
  box-sizing: border-box;

  /* White */
  background: #ffffff;
  /* Gray */
  border: 2px solid #b38687 !important;
  border-radius: 4px;

  transition: 0.3s all;

  height: 40px;

  & .ant-select-selector {
    overflow: hidden;
    border: none !important;
    border-radius: 4px !important;

    font-size: 18px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: 19px;

    color: #414141 !important;
  }

  &:hover {
    box-shadow: 0px 4px 31.2px 0px rgba(59, 164, 169, 0.5) !important;
    border: 2px solid #3ba4a9 !important;
  }

  &.ant-select-focused {
    box-shadow: 0px 4px 31.2px 0px rgba(59, 164, 169, 0.5) !important;
    border: 2px solid rgba(41, 104, 108, 0.5) !important;
  }
`;
