import { Layout as AntLayout } from "antd";
import { Header as AntHeader } from "antd/es/layout/layout";
import AntSider from "antd/es/layout/Sider";
import { Content as AntContent } from "antd/lib/layout/layout";
import styled from "styled-components";

export const Layout = styled(AntLayout)`
  height: 100%;
  background-color: transparent;
`;

export const Header = styled(AntHeader)``;

export const Sider = styled(AntSider)``;

export const Content = styled(AntContent)`
  background-color: transparent;
`;
