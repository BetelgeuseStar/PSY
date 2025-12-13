import type { Marker } from "../api/marker/types.ts";

export type MarkerBarProps = {
  marker: Marker;
  onPick: (picked: boolean) => void;
  onOpenDescription: () => void;
  onDelete: () => void;
  allowEdit: boolean;
};

export type RatingProps = {
  rating: number;
  onChange?: (rating: number) => void;
  readonly?: boolean;
};
