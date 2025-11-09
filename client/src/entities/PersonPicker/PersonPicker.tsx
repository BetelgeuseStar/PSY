import * as St from "./styled.ts";
import type { PersonPickerInfo } from "../../shared/types";
import type { ForwardedRef } from "react";
import { forwardRef } from "react";
import noPhoto from "../../../public/img/noPhoto.jpg";
import { useNavigate } from "react-router";

export const PersonPicker = forwardRef(PersonPickerInner);

function PersonPickerInner(
  { name, type, photoUrl, id }: PersonPickerInfo,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const navigate = useNavigate();

  return (
    <St.Wrapper onClick={() => navigate(`/persons/${id}`)} ref={ref}>
      <St.Photo src={photoUrl ?? noPhoto} />
      <St.InfoWrapper>
        <St.Name>{name}</St.Name>
        <St.Type>{type}</St.Type>
      </St.InfoWrapper>
    </St.Wrapper>
  );
}
