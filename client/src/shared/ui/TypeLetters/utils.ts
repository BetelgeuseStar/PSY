import { projectColors } from "../../utils";

type TypeLetterObject = {
  letter: string;
  color: string;
};

export function getTypeLetterObjectByTypeCode(
  typeCode: number,
): TypeLetterObject {
  switch (typeCode) {
    case 1:
      return {
        letter: "В",
        color: projectColors.willActive,
      };
    case 2:
      return {
        letter: "Ф",
        color: projectColors.physicsActive,
      };
    case 3:
      return {
        letter: "Э",
        color: projectColors.emotionActive,
      };
    case 4:
      return {
        letter: "Л",
        color: projectColors.logicsActive,
      };
    default: {
      return {
        letter: "-",
        color: "white",
      };
    }
  }
}

export function getCompletedPsyType(psyType: number[]): number[] {
  let allTypeCodes = [1, 2, 3, 4];

  psyType.forEach((typeCode) => {
    allTypeCodes = allTypeCodes.filter((code) => code !== typeCode);
  });

  if (allTypeCodes.length == 1) {
    const index = psyType.indexOf(0);
    return psyType.map((code, i) => {
      if (i == index) return allTypeCodes[0];
      return code;
    });
  }

  return psyType;
}
