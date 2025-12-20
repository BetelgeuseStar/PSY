import * as St from "./styled.ts";
import type { ForwardedRef } from "react";
import { forwardRef } from "react";
import { useNavigate } from "react-router";
import { useFileByUrl } from "../../shared/hooks";
import { Spin } from "antd";
import { ColoredInfoLine } from "../../entities/ColoredInfoLine";
import { EditableText, TypeLetters } from "../../shared/ui";

type EntityPickerProps = {
  id: number;
  title: string;
  url: string;
  author?: string;
  photoUrl?: string | null;
  noPhoto: string;
  isPublic: boolean;
  isLoading?: boolean;
  psyType?: number[];
};

export const EntityPicker = forwardRef(EntityPickerInner);

function EntityPickerInner(
  {
    title,
    author,
    photoUrl,
    id,
    url,
    noPhoto,
    psyType,
    isLoading = false,
  }: EntityPickerProps,
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
        <EditableText isReadOnly editorValue={title} cursor="pointer" />
        {psyType?.length && (
          <TypeLetters
            psyType={psyType}
            fontSize={22}
            fontWeight="bold"
            gap={1}
          />
        )}
        <ColoredInfoLine
          keyText="Автор"
          valueText={author ?? ""}
          isLoading={isLoading}
          cursor="pointer"
        />
      </St.InfoWrapper>
    </St.Wrapper>
  );
}
