import * as St from "./styled";
import type { RatingProps } from "../../shared/types";
import { useEffect, useState } from "react";
import { Star } from "./Star.tsx";

export function Rating({ rating, onChange, readonly }: RatingProps) {
  const [activeRating, setActiveRating] = useState<number>(rating);

  useEffect(() => {
    setActiveRating(rating);
  }, [rating]);

  function changeHoverHandler(activeRating: number) {
    if (readonly) return;
    setActiveRating(activeRating);
  }

  function clickHandler(position: number) {
    if (readonly) return;
    onChange?.(position);
  }

  function getStarWithPosition(position: number) {
    return (
      <Star
        readonly={readonly ?? false}
        isActive={activeRating >= position}
        onChangeHover={(hovered) =>
          changeHoverHandler(hovered ? position : rating)
        }
        onClick={() => clickHandler(position)}
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
