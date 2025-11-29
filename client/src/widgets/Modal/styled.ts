import styled from "styled-components";
import { Board, Text } from "../../shared/ui";
import { getClickableIconStyle } from "../../shared/utils";
import { CloseIcon as OuterCloseIcon } from "../../shared/icons";

export const CloseIcon = styled(OuterCloseIcon)`
  width: 20px;
  height: 20px;
  ${getClickableIconStyle()}
`;

export const ModalHeader = styled(Board)`
  border-top: none;
  border-right: none;
  border-left: none;
  box-shadow: none;
  border-radius: 15px 15px 0 0;
  height: 45px;

  display: flex;
  align-items: center;
  padding: 15px;
  justify-content: space-between;
`;

export const ModalTitle = styled(Text)`
  color: #3ba4a9;

  font-weight: 500;
  font-size: 18px;
`;

export const ModalMask = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;
