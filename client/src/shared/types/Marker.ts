import type { Marker } from "../api/marker/types.ts";
import type { MarkerModalProps, OpenModalFunc } from "../../widgets/Modal";

export type MarkerBarProps = {
  marker: Marker;
  onPick: (picked: boolean) => void;
  openDescriptionModal: OpenModalFunc<MarkerModalProps>;
  onDelete: () => void;
  allowEdit: boolean;
  sourceName: string;
};

export type RatingProps = {
  rating: number;
  onChange?: (rating: number) => void;
  readonly?: boolean;
};
