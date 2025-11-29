import type { PsyType } from "./PsyType.ts";
import type { OpenModalFunc } from "../../widgets/Modal";

export type MarkerInfo = PsyType & {
  id: number;
  value: string;
  extraInfo: string;
  rating: number;
  picked: boolean;
};

export type MarkerBarProps = MarkerInfo & {
  onPick: (picked: boolean) => void;
  onChangeRating: (rating: number) => void;
  onChangeValue: (value: string) => void;
  allowEdit: boolean;
  openModal: OpenModalFunc;
  sourceName: string;
};

export type RatingProps = {
  rating: number;
  onChange?: (rating: number) => void;
  readonly?: boolean;
};
