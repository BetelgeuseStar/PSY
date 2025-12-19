import * as St from "./styled";
import { PsyFunctionCell } from "./components";
import type { TPsyFunctionCell } from "../../../../shared/types";

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
