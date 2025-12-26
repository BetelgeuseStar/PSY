import styled from "styled-components";
import { projectColors } from "../../shared/utils";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% + 30px);
  gap: 10px;

  overflow-y: scroll;
  padding: 30px;
  flex-grow: 1;

  margin: -10px 0 0 -30px;

  scrollbar-color: ${projectColors.default} transparent;
  scrollbar-width: thin;
`;
