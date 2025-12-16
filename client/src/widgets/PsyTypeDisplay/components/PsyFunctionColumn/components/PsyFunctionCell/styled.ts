import styled from "styled-components";
import { Board, Text } from "../../../../../../shared/ui";

export const Wrapper = styled(Board)`
  display: flex;
  width: 110px;
  padding: 6px;
  justify-content: space-between;
  align-items: center;
`;

export const TypeText = styled(Text)`
  font-size: 24px;
`;

export const PercentText = styled(Text)`
  font-size: 20px;
`;
