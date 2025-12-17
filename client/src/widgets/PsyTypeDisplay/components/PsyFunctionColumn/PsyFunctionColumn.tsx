import * as St from "./styled";
import { PsyFunctionCell } from "./components";
import type { PsyFunctionCell as TPsyFunctionCell } from "../../types.ts";

type Props = {
  items: TPsyFunctionCell[];
};

export function PsyFunctionColumn({ items }: Props) {
  return (
    <St.Wrapper>
      {items.map((item) => (
        <PsyFunctionCell key={item.psyLevel} {...item} />
      ))}
    </St.Wrapper>
  );
}
