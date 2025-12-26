import styled from "styled-components";
import { Board, Text as UiText } from "../../../../shared/ui";
import { projectColors } from "../../../../shared/utils";

export const Wrapper = styled(Board)`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 50px;
  width: 100%;

  align-self: center;

  &:hover {
    border: 2px solid ${projectColors.active} !important;
    box-shadow: 0px 4px 31.2px 10px rgba(59, 164, 169, 0.5) !important;

    color: ${projectColors.active} !important;

    span {
      color: ${projectColors.active} !important;
    }
  }

  &:active {
    border: 2px solid #2a7276 !important;
    box-shadow: 0px 4px 31.2px 10px rgba(41, 104, 108, 0.5) !important;

    span {
      color: #2a7276 !important;
    }
  }

  cursor: pointer;
`;

export const Text = styled(UiText)`
  transition: 0.3s all;
  font-size: 20px;

  color: ${projectColors.default};
`;
