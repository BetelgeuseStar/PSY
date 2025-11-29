export type PsyType = {
  psyFunction: PsyFunction;
  psyLevel: PsyLevel;
};

export const PsyFunctions = {
  Will: "Will",
  Physics: "Physics",
  Emotion: "Emotion",
  Logics: "Logics",
};

export type PsyFunction = (typeof PsyFunctions)[keyof typeof PsyFunctions];

export type PsyLevel = 1 | 2 | 3 | 4;
