import type { PsyFunction, PsyType } from "../../shared/types";

export type PsyFunctionCell = PsyType & {
  percents: number;
  isActive: boolean;
};

export type PsyFunctionColumn = {
  items: PsyFunctionCell[];
  psyFunction: PsyFunction;
};
