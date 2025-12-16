import type { PsyFunction, PsyType } from "../../../../../../shared/types";
import { PsyFunctions } from "../../../../../../shared/types";
import { projectColors } from "../../../../../../shared/utils";

export function getPsyTypeText(type: PsyType) {
  const { psyFunction, psyLevel } = type;

  switch (psyFunction) {
    case PsyFunctions.Will:
      return `В${psyLevel}`;
    case PsyFunctions.Physics:
      return `Ф${psyLevel}`;
    case PsyFunctions.Emotion:
      return `Э${psyLevel}`;
    case PsyFunctions.Logics:
      return `Л${psyLevel}`;
  }
}

export function getColorByFunctionAndActive(
  psyFunction: PsyFunction,
  isActive: boolean,
) {
  switch (psyFunction) {
    case PsyFunctions.Will:
      return isActive ? projectColors.willActive : projectColors.willInactive;
    case PsyFunctions.Physics:
      return isActive
        ? projectColors.physicsActive
        : projectColors.physicsInactive;
    case PsyFunctions.Emotion:
      return isActive
        ? projectColors.emotionActive
        : projectColors.emotionInactive;
    case PsyFunctions.Logics:
      return isActive
        ? projectColors.logicsActive
        : projectColors.logicsInactive;
  }
}
