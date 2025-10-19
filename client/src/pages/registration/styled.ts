import styled from "styled-components";
import { Board } from "../../shared/ui";

export const Body = styled(Board)`
  box-sizing: border-box;

  width: 443px;
  min-height: 440px;

  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 25px 60px;

  gap: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
