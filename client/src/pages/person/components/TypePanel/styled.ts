import styled from "styled-components";
import { Board } from "../../../../shared/ui";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InfoWrapper = styled(Board)`
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
