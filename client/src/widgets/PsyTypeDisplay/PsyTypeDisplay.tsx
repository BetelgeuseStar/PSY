import * as St from "./styled";
import type { TPsyFunctionColumn } from "../../shared/types";
import { PsyFunctionColumn } from "./components";

type Props = { columns: TPsyFunctionColumn[] };

export function PsyTypeDisplay({ columns }: Props) {
  return (
    <St.Wrapper>
      {columns.map((column) => (
        <PsyFunctionColumn key={column.psyFunction} items={column.items} />
      ))}
    </St.Wrapper>
  );
}
