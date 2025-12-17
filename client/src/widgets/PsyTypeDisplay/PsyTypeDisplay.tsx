import * as St from "./styled";
import { useMarkersList } from "../../shared/api";
import { getPsyFunctionColumnsByMarkers } from "./utils.ts";
import { PsyFunctionColumn } from "./components";

type Props = { sourceId: number | null; pickedMarkerIds: number[] };

export function PsyTypeDisplay({ sourceId, pickedMarkerIds }: Props) {
  const { data: markersList } = useMarkersList(sourceId);

  const columns = getPsyFunctionColumnsByMarkers(markersList, pickedMarkerIds);

  return (
    <St.Wrapper>
      {columns.map((column) => (
        <PsyFunctionColumn key={column.psyFunction} items={column.items} />
      ))}
    </St.Wrapper>
  );
}
