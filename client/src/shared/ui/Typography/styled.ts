import styled from "styled-components";
import { Typography } from "antd";

export const Text = styled(Typography.Text)`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;

  color: #ffffff;

  text-align: center;
`;

export const Link = styled(Typography.Link)`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.25px;

  color: #b38687 !important;

  &:hover {
    color: #3ba4a9 !important;
  }

  &:active {
    color: #c31720 !important;
  }
`;
