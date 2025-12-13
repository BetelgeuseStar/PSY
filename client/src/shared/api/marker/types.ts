import type { PsyType } from "../../types";

export type Marker = PsyType & {
  id: number;
  sourceId: number;
  rating: number;
  value: string | null;
  info: string | null;
};
