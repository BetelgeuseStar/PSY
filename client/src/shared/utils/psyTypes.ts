import type { PsyFunction, PsyLevel } from "../types";
import { PsyFunctions } from "../types";

export function getPsyLevelName(level: PsyLevel): string {
  switch (level) {
    case 1:
      return "Первая";
    case 2:
      return "Вторая";
    case 3:
      return "Третья";
    case 4:
      return "Четвертая";
    default:
      return "Нет имени для такого уровня функции";
  }
}

export function getPsyFunctionName(psyFunction: PsyFunction): string {
  switch (psyFunction) {
    case PsyFunctions.Will:
      return "Воля";
    case PsyFunctions.Physics:
      return "Физика";
    case PsyFunctions.Emotion:
      return "Эмоция";
    case PsyFunctions.Logics:
      return "Логика";
    default:
      return "Нет такой функции";
  }
}

export function getPsyFunctionColor(psyFunction: PsyFunction): string {
  switch (psyFunction) {
    case PsyFunctions.Will:
      return "#DFB300";
    case PsyFunctions.Physics:
      return "#AA420A";
    case PsyFunctions.Emotion:
      return "#D84B70";
    case PsyFunctions.Logics:
      return "#2874D8";
    default:
      return "Нет такой функции";
  }
}
