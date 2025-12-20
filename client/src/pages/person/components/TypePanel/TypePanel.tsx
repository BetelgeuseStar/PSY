import * as St from "./styled";
import { PsyTypeDisplay } from "../../../../widgets/PsyTypeDisplay";
import { useMarkersList } from "../../../../shared/api";
import {
  getPsyFunctionColumnsByMarkers,
  getTypeByPsyFunctionColumns,
} from "../../../../shared/utils";
import { useEffect, useState } from "react";
import type { TPsyFunctionColumn } from "../../../../shared/types";
import { TypeLetters } from "../../../../shared/ui";

type Props = {
  sourceId: number | null;
  pickedIds: number[];
  type: number[];
  onChangeType: (type: number[]) => void;
  isLoading?: boolean;
};

export function TypePanel({
  sourceId,
  pickedIds,
  type,
  onChangeType,
  isLoading = false,
}: Props) {
  const { data: markersList } = useMarkersList(sourceId);

  const [columns, setColumns] = useState<TPsyFunctionColumn[]>([]);

  useEffect(() => {
    const columns = getPsyFunctionColumnsByMarkers(markersList, pickedIds);
    const type = getTypeByPsyFunctionColumns(columns);

    setColumns(columns);
    onChangeType(type);
  }, [pickedIds.length, sourceId]);

  if (isLoading) return null;

  return (
    <St.Wrapper>
      <PsyTypeDisplay columns={columns} />
      <St.InfoWrapper>
        <TypeLetters psyType={type} gap={5} fontSize={60} fontWeight="bold" />
      </St.InfoWrapper>
    </St.Wrapper>
  );
}
