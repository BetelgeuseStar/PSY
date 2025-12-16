import type { Marker } from "../../shared/api/marker/types.ts";
import type { PsyFunctionCell, PsyFunctionColumn } from "./types.ts";
import type { PsyFunction, PsyLevel, PsyType } from "../../shared/types";
import { PsyFunctions } from "../../shared/types";

export function getPsyFunctionColumnsByMarkers(
  markers: Marker[],
  pickedMarkerIds: number[],
): PsyFunctionColumn[] {
  const willColumn = getColumnByFunction(
    markers,
    PsyFunctions.Will,
    pickedMarkerIds,
  );
  const physicsColumn = getColumnByFunction(
    markers,
    PsyFunctions.Physics,
    pickedMarkerIds,
  );
  const emotionColumn = getColumnByFunction(
    markers,
    PsyFunctions.Emotion,
    pickedMarkerIds,
  );
  const logicsColumn = getColumnByFunction(
    markers,
    PsyFunctions.Logics,
    pickedMarkerIds,
  );

  return getColumnsWithCalculatedActiveCells([
    willColumn,
    physicsColumn,
    emotionColumn,
    logicsColumn,
  ]);
}

export function getColumnByFunction(
  markers: Marker[],
  psyFunction: PsyFunction,
  pickedMarkerIds: number[],
): PsyFunctionColumn {
  const functionMarkers = markers.filter(
    (marker) => marker.psyFunction === psyFunction,
  );

  const ratings: Record<PsyLevel, number> = {
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
  };

  const pickedRatings: Record<PsyLevel, number> = {
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
  };

  functionMarkers.forEach((marker) => {
    ratings[marker.psyLevel] += marker.rating;
    if (pickedMarkerIds.includes(marker.id))
      pickedRatings[marker.psyLevel] += marker.rating;
  });

  const items: PsyFunctionCell[] = Object.keys(ratings).map((psyLevel) => {
    const percents =
      ratings[psyLevel] > 0
        ? Math.round((pickedRatings[psyLevel] / ratings[psyLevel]) * 100)
        : 0;

    return {
      psyFunction,
      psyLevel: Number(psyLevel) as PsyLevel,
      percents,
      isActive: false,
    };
  });

  return {
    items,
    psyFunction,
  };
}

export function getColumnsWithCalculatedActiveCells(
  columns: PsyFunctionColumn[],
) {
  // транспозирую что бы совпадали строки и столбцы
  const percentsMatrix = transpose(
    columns.map((column) => {
      return column.items.map((item) => {
        return item.percents;
      });
    }),
  ) as number[][];

  const activeCellsTypes = getActiveCellsTypes(percentsMatrix);

  return columns.map((column) => {
    return {
      ...column,
      items: column.items.map((item) => {
        const isActive = activeCellsTypes.some((activeCellType) => {
          return (
            item.psyFunction === activeCellType.psyFunction &&
            item.psyLevel === activeCellType.psyLevel
          );
        });

        return {
          ...item,
          isActive,
        };
      }),
    };
  });
}

type Ignore = {
  rows: number[];
  columns: number[];
};

type Position = {
  row: number;
  column: number;
};

type BiggestWithPosition = Position & {
  biggest: number;
};

type ActiveCellsTypes = PsyType[];

function getActiveCellsTypes(matrix: number[][]): ActiveCellsTypes {
  const ignore: Ignore = {
    rows: [],
    columns: [],
  };

  const activeCellsTypes: PsyType[] = [];
  let outerBiggest = 0;

  do {
    if (activeCellsTypes.length == 4) break;
    const { row, column, biggest } = getBiggestWithPosition(matrix, ignore);

    if (biggest == 0) break;

    ignore.rows.push(row);
    ignore.columns.push(column);

    activeCellsTypes.push({
      psyLevel: (row + 1) as PsyLevel,
      psyFunction: getPsyFunctionByPosition(column + 1),
    });

    outerBiggest = biggest;
  } while (outerBiggest > 0);

  return activeCellsTypes;
}

function getBiggestWithPosition(
  matrix: number[][],
  ignore: Ignore,
): BiggestWithPosition {
  let biggestWithPosition: BiggestWithPosition = {
    row: 0,
    column: 0,
    biggest: 0,
  };

  matrix.forEach((row, rowId) => {
    if (ignore.rows.includes(rowId)) return;

    row.forEach((percents, columnId) => {
      if (ignore.columns.includes(columnId)) return;
      if (biggestWithPosition.biggest >= percents) return;

      biggestWithPosition = {
        row: rowId,
        column: columnId,
        biggest: percents,
      };
    });
  });

  return biggestWithPosition;
}

function transpose(matrix) {
  return matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]));
}

function getPsyFunctionByPosition(pos: number) {
  switch (pos) {
    case 1:
      return PsyFunctions.Will;
    case 2:
      return PsyFunctions.Physics;
    case 3:
      return PsyFunctions.Emotion;
    case 4:
      return PsyFunctions.Logics;
  }
}
