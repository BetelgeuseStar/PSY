import * as Styled from "./styled.ts";
import type { PersonPickerInfo } from "../../shared/types";
import { forwardRef } from "react";
import noPhoto from "../../../public/img/noPhoto.jpg";

export const PersonPicker = forwardRef(PersonPickerInner);

function PersonPickerInner({ name, type, photoUrl }: PersonPickerInfo, ref) {
  return (
    <Styled.Wrapper ref={ref}>
      <Styled.Photo src={photoUrl ?? noPhoto} />
      <Styled.InfoWrapper>
        <Styled.Name>{name}</Styled.Name>
        <Styled.Type>{type}</Styled.Type>
      </Styled.InfoWrapper>
    </Styled.Wrapper>
  );
}
