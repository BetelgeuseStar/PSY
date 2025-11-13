export type MarkerInfo = {
  id: number;
  text: string;
  extraInfo: string;
  rating: number;
  checked: boolean;
  allowEdit: boolean;
};

export type MarkerBarProps = MarkerInfo & {
  onCheck: (checked: boolean) => void;
  onChangeRating: (rating: number) => void;
};

export type RatingProps = {
  rating: number;
  onChange: (rating: number) => void;
};
