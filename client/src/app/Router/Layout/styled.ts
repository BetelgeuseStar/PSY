import styled from "styled-components";
import spaceBackgroundImage from "/img/space.jpeg";

export const Layout = styled.div`
  background-image: url(${spaceBackgroundImage});
  background-repeat: repeat-y;
  background-size: 100%;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
`;
