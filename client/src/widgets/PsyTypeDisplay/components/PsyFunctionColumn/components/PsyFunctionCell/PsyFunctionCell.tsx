import * as St from "./styled";
import { getColorByFunctionAndActive, getPsyTypeText } from "./utils.ts";
import type { PsyFunctionCell as TPsyFunctionCell } from "../../../../types.ts";

export function PsyFunctionCell({
  psyFunction,
  psyLevel,
  percents,
  isActive,
}: TPsyFunctionCell) {
  const typeText = getPsyTypeText({ psyFunction, psyLevel });

  const color = getColorByFunctionAndActive(psyFunction, isActive);

  return (
    <St.Wrapper
      style={{
        borderColor: color,
        color,
        boxShadow: isActive
          ? `0px 4px 31.2px 5px ${color}`
          : "0px 4px 31.2px 5px rgba(179, 134, 135, 0.5)",
      }}
      active={isActive ? "true" : "false"}
    >
      <St.TypeText style={{ color: isActive ? color : "gray" }}>
        {typeText}
      </St.TypeText>
      <St.PercentText
        style={{ color: isActive ? color : "gray" }}
      >{`${percents} %`}</St.PercentText>
    </St.Wrapper>
  );
}
