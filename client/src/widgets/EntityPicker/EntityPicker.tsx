import * as St from "./styled.ts";
import type { ForwardedRef } from "react";
import { forwardRef } from "react";
import { useNavigate } from "react-router";
import { useFileByUrl } from "../../shared/hooks";
import { Spin } from "antd";

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

  const { fileUrl, isFetching } = useFileByUrl(photoUrl);

  return (
    <St.Wrapper onClick={() => navigate(`/${url}/${id}`)} ref={ref}>
      <St.PhotoWrapper>
        {isFetching ? (
          <Spin />
        ) : (
          <St.Photo src={fileUrl ?? (noPhoto as string)} />
        )}
      </St.PhotoWrapper>
      <St.InfoWrapper>
        <St.Name>{title}</St.Name>
        <St.Type>{extraInfo}</St.Type>
      </St.InfoWrapper>
    </St.Wrapper>
  );
}
