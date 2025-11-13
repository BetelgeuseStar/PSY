import * as St from "./styled";
import type { RatingProps } from "../../shared/types";
import { useState } from "react";
import { Star } from "./Star.tsx";

export function Rating({ rating, onChange }: RatingProps) {
  const [activeRating, setActiveRating] = useState<number>(rating);

  function getStarWithPosition(position: number) {
    return (
      <Star
        isActive={activeRating >= position}
        onChangeHover={(hovered) =>
          setActiveRating(hovered ? position : rating)
        }
        onClick={() => onChange(position)}
      />
    );
  }

  return (
    <St.Wrapper>
      {getStarWithPosition(1)}
      {getStarWithPosition(2)}
      {getStarWithPosition(3)}
      {getStarWithPosition(4)}
      {getStarWithPosition(5)}
    </St.Wrapper>
  );
}
