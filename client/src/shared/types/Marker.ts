import type { PsyType } from "./PsyType.ts";

export type MarkerInfo = PsyType & {
  id: number;
  value: string;
  extraInfo: string;
  rating: number;
  picked: boolean;
};

export type MarkerBarInfo = Pick<MarkerInfo, "value" | "rating" | "picked">;

export type MarkerBarProps = MarkerBarInfo & {
  onPick: (picked: boolean) => void;
  onChangeRating: (rating: number) => void;
  onChangeValue: (value: string) => void;
  onOpenDescription: () => void;
  onDelete: () => void;
  allowEdit: boolean;
};

export type RatingProps = {
  rating: number;
  onChange?: (rating: number) => void;
  readonly?: boolean;
};
