import styled, { css } from "styled-components";
import { Button as AntButton } from "../../shared/ui";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Bar = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled(AntButton)`
  &[active="true"] {
    ${getButtonColor("#3ba4a9", "rgba(59, 164, 169, 0.5)")}
  }
`;

export const WillButton = styled(Button)`
  &[active="true"] {
    ${getWillButtonColor()}
  }
  &:hover {
    ${getWillButtonColor()}
  }

  ${getActiveCss}
`;

export const PhysicsButton = styled(Button)`
  &[active="true"] {
    ${getPhysicsButtonColor()}
  }
  &:hover {
    ${getPhysicsButtonColor()}
  }

  ${getActiveCss}
`;

export const EmotionButton = styled(Button)`
  &[active="true"] {
    ${getEmotionButtonColor()}
  }
  &:hover {
    ${getEmotionButtonColor()}
  }

  ${getActiveCss}
`;

export const LogicsButton = styled(Button)`
  &[active="true"] {
    ${getLogicsButtonColor()}
  }
  &:hover {
    ${getLogicsButtonColor()}
  }

  ${getActiveCss}
`;

function getWillButtonColor() {
  return css`
    ${getButtonColor("#dfb300", "rgba(223, 179, 0, 0.5)")}
  `;
}

function getPhysicsButtonColor() {
  return css`
    ${getButtonColor("#aa420a", "rgba(170, 66, 10, 0.5)")}
  `;
}

function getEmotionButtonColor() {
  return css`
    ${getButtonColor("#d84b70", "rgba(216, 75, 112, 0.5)")}
  `;
}

function getLogicsButtonColor() {
  return css`
    ${getButtonColor("#2874d8", "rgba(40, 116, 216, 0.5)")}
  `;
}

function getButtonColor(color: string, shadow: string) {
  return css`
    color: ${color} !important;
    border: 2px solid ${color} !important;
    box-shadow: 0px 4px 31.2px 10px ${shadow} !important;
  `;
}

function getActiveCss() {
  return css`
    &:active {
      ${getButtonColor("#c31720", "rgba(195, 23, 32, 0.5)")}
    }
  `;
}
