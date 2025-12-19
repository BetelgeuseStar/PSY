import type { ForwardedRef } from "react";
import { forwardRef } from "react";
import { getCompletedPsyType, getTypeLetterObjectByTypeCode } from "./utils.ts";
import * as St from "./styled";

export type TypeLettersProps = {
  psyType: number[];
  gap?: number;
  fontSize?: number;
  fontWeight?: string;
};

export const TypeLetters = forwardRef(TypeLettersInner);

function TypeLettersInner(
  props: TypeLettersProps,
  ref: ForwardedRef<HTMLSpanElement>,
) {
  const { psyType, gap = 0, fontSize = 16, fontWeight = "normal" } = props;

  return (
    <St.Wrapper ref={ref} style={{ gap }}>
      {getCompletedPsyType(psyType).map((typeCode, i) => {
        const letterObject = getTypeLetterObjectByTypeCode(typeCode);

        return (
          <St.Text
            key={i}
            style={{ color: letterObject.color, fontSize, fontWeight }}
          >
            {letterObject.letter}
          </St.Text>
        );
      })}
    </St.Wrapper>
  );
}
