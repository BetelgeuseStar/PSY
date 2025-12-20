import * as St from "./styled";
import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  keyText: string;
  valueText: string;
  isLoading?: boolean;
  valueColor?: string;
  cursor?: "string";
};

export function ColoredInfoLine({
  keyText,
  valueText,
  valueColor = "#3ba4a9",
  isLoading,
  cursor = "default",
  ...htmlAttributes
}: Props) {
  return (
    <St.Wrapper {...htmlAttributes} style={{ cursor }}>
      {keyText}:{" "}
      {isLoading ? (
        <St.SkeletonText style={{ height: 21 }} />
      ) : (
        <St.TextLine style={{ color: valueColor, cursor }}>
          {valueText}
        </St.TextLine>
      )}
    </St.Wrapper>
  );
}
