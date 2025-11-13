import * as St from "./styled.ts";
import type { ForwardedRef } from "react";
import { forwardRef } from "react";
import { useNavigate } from "react-router";

type EntityPickerProps = {
  id: number;
  title: string;
  url: string;
  extraInfo?: string;
  photoUrl?: string;
};

export const EntityPicker = forwardRef(PersonPickerInner);

function PersonPickerInner(
  { title, extraInfo = "", photoUrl, id, url }: EntityPickerProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const navigate = useNavigate();

  return (
    <St.Wrapper onClick={() => navigate(`/${url}/${id}`)} ref={ref}>
      <St.Photo src={photoUrl} />
      <St.InfoWrapper>
        <St.Name>{title}</St.Name>
        <St.Type>{extraInfo}</St.Type>
      </St.InfoWrapper>
    </St.Wrapper>
  );
}
