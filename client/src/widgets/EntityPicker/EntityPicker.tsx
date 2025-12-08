import * as St from "./styled.ts";
import type { ForwardedRef } from "react";
import { forwardRef } from "react";
import { useNavigate } from "react-router";
import { useFileByUrl } from "../../shared/hooks";

type EntityPickerProps = {
  id: number;
  title: string;
  url: string;
  extraInfo?: string;
  photoUrl?: string | null;
  noPhoto: string;
};

export const EntityPicker = forwardRef(PersonPickerInner);

function PersonPickerInner(
  { title, extraInfo = "", photoUrl, id, url, noPhoto }: EntityPickerProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const navigate = useNavigate();

  const { fileUrl } = useFileByUrl(photoUrl);

  return (
    <St.Wrapper onClick={() => navigate(`/${url}/${id}`)} ref={ref}>
      <St.Photo src={fileUrl ?? (noPhoto as string)} />
      <St.InfoWrapper>
        <St.Name>{title}</St.Name>
        <St.Type>{extraInfo}</St.Type>
      </St.InfoWrapper>
    </St.Wrapper>
  );
}
