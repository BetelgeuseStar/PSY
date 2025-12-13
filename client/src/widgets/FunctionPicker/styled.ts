import styled, { css } from "styled-components";
import { Button as AntButton } from "../../shared/ui";
import { getButtonColorStyle, projectColors } from "../../shared/utils";

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
    ${getButtonColorStyle("#3ba4a9", "rgba(59, 164, 169, 0.5)")}
    cursor: default
  }
`;

export const WillButton = styled(Button)`
  &[active="true"] {
    ${getWillButtonColor()}
  }
  &:hover {
    ${getWillButtonColor()}
  }

  &:active[active="false"] {
    ${getButtonColorStyle(projectColors.willInactive, "rgba(169, 136, 0, 0.5)")}
  }
`;

export const PhysicsButton = styled(Button)`
  &[active="true"] {
    ${getPhysicsButtonColor()}
  }
  &:hover {
    ${getPhysicsButtonColor()}
  }

  &:active[active="false"] {
    ${getButtonColorStyle(
      projectColors.physicsInactive,
      "rgba(137, 53, 7, 0.5)",
    )}
  }
`;

export const EmotionButton = styled(Button)`
  &[active="true"] {
    ${getEmotionButtonColor()}
  }
  &:hover {
    ${getEmotionButtonColor()}
  }

  &:active[active="false"] {
    ${getButtonColorStyle(
      projectColors.emotionInactive,
      "rgba(153, 49, 77, 0.5)",
    )}
  }
`;

export const LogicsButton = styled(Button)`
  &[active="true"] {
    ${getLogicsButtonColor()}
  }
  &:hover {
    ${getLogicsButtonColor()}
  }

  &:active[active="false"] {
    ${getButtonColorStyle(
      projectColors.logicsInactive,
      "rgba(28, 84, 158, 0.5)",
    )}
  }
`;

function getWillButtonColor() {
  return css`
    ${getButtonColorStyle(projectColors.willActive, "rgba(223, 179, 0, 0.5)")}
  `;
}

function getPhysicsButtonColor() {
  return css`
    ${getButtonColorStyle(
      projectColors.physicsActive,
      "rgba(170, 66, 10, 0.5)",
    )}
  `;
}

function getEmotionButtonColor() {
  return css`
    ${getButtonColorStyle(
      projectColors.emotionActive,
      "rgba(216, 75, 112, 0.5)",
    )}
  `;
}

function getLogicsButtonColor() {
  return css`
    ${getButtonColorStyle(
      projectColors.logicsActive,
      "rgba(40, 116, 216, 0.5)",
    )}
  `;
}
