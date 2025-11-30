import styled, { css } from "styled-components";
import { Board, Button } from "../../../shared/ui";
import { getButtonColorStyle } from "../../../shared/utils";

export const AcceptButton = styled(Button)`
  ${getAcceptBg()}

  &:hover {
    ${getAcceptBg()}
    ${getButtonColorStyle("#3BAE17", "rgba(59, 174, 23, 0.5)")}
  }

  &:active {
    ${getAcceptBg()}
    ${getButtonColorStyle("#308D13", "rgba(48, 141, 19, 0.5)")}
  }
`;

export const CancelButton = styled(Button)`
  ${getCancelBg()}

  &:hover {
    ${getCancelBg()}
    ${getButtonColorStyle("#D21216", "rgba(210, 18, 22, 0.5)")}
  }

  &:active {
    ${getCancelBg()}
    ${getButtonColorStyle("#AA1014", "rgba(170, 16, 20, 0.5)")}
  }
`;

function getAcceptBg() {
  return css`
    background: linear-gradient(
        0deg,
        rgba(49, 208, 28, 0.3),
        rgba(49, 208, 28, 0.3)
      ),
      linear-gradient(180deg, #754447 0%, #623437 50%, #4e2426 100%) !important;
  `;
}

function getCancelBg() {
  return css`
    background: linear-gradient(
        0deg,
        rgba(201, 31, 31, 0.3),
        rgba(201, 31, 31, 0.3)
      ),
      linear-gradient(180deg, #754447 0%, #623437 50%, #4e2426 100%) !important;
  `;
}

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: end;
  gap: 25px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 15px;
  gap: 20px;
`;

export const Content = styled.div`
  flex-grow: 1;
  color: white;
  align-items: center;
  justify-content: center;
  display: flex;
  max-height: 100px;
  overflow: hidden;
  font-size: 18px;
  font-weight: 400;
  padding: 10px 0;
  text-align: center;
`;

export const Wrapper = styled(Board)`
  width: 500px;
  display: flex;
  flex-direction: column;
`;
