import type { TPsyFunctionColumn } from "../types";

export function getTypeByPsyFunctionColumns(
  columns: TPsyFunctionColumn[],
): number[] {
  const type: number[] = [0, 0, 0, 0];

  columns.forEach((column, columnIndex) => {
    column.items.forEach((cell, cellIndex) => {
      if (cell.isActive) {
        type[cellIndex] = columnIndex + 1;
      }
    });
  });

  return type;
}
