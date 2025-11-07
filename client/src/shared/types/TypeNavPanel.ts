export type TypesNavPanelState = {
  type: PsyType;
  number: 1 | 2 | 3 | 4;
};

export const PsyFunction = {
  Will: "Will",
  Physics: "Physics",
  Emotion: "Emotion",
  Logics: "Logics",
};

export type PsyType = (typeof PsyFunction)[keyof typeof PsyFunction];
