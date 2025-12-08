import * as St from "./styled.ts";
import booksImg from "../../../../../public/img/books.jpg";
import {
  BackIcon,
  BookIcon,
  DeleteIcon,
  InvisibleIcon,
  VisibleIcon,
} from "../../../../shared/icons";
import { FunctionPicker } from "../../../../widgets/FunctionPicker";
import type { PsyType } from "../../../../shared/types";
import { EditableText, IconButton } from "../../../../shared/ui";
import { useNavigate } from "react-router";
import type { Source } from "../../../../shared/api";

type Props = {
  source: Source;
  onChangeTitle: (value: string) => void;
  onChangeInfo: (value: string) => void;
  onToggleIsPublic: () => void;
  onChangePhotoUrl: (value: string) => void;
  onDeleteSource: () => void;
  pickerState: PsyType;
  onChangePickerState: (value: PsyType) => void;
  onAddSource: () => void;
  authorName: string;
};

export function SourceMainPanel({
  source,
  onChangePhotoUrl,
  onChangeInfo,
  onChangeTitle,
  onDeleteSource,
  onToggleIsPublic,
  pickerState,
  onChangePickerState,
  onAddSource,
  authorName,
}: Props) {
  const navigate = useNavigate();
  const { isPublic, photoUrl, title, info } = source;

  const isReadOnly = false;

  return (
    <St.Wrapper>
      <St.ExtraPanelWrapper>
        <St.ExtraButtonsWrapper>
          <IconButton
            onClick={() => navigate("/sources")}
            icon={<BackIcon />}
          />
        </St.ExtraButtonsWrapper>
        <St.ExtraButtonsWrapper>
          <IconButton icon={<BookIcon />} onClick={onAddSource} />
          <IconButton
            icon={isPublic ? <VisibleIcon /> : <InvisibleIcon />}
            onClick={onToggleIsPublic}
          />
          <IconButton icon={<DeleteIcon />} onClick={onDeleteSource} />
        </St.ExtraButtonsWrapper>
      </St.ExtraPanelWrapper>
      <St.Photo
        src={photoUrl ?? (booksImg as string)}
        fileName={`source_${source.id}_photo`}
      />
      <St.MainPanelWrapper>
        <St.InfoPanel>
          <EditableText
            onValueChange={onChangeTitle}
            editorValue={title ?? ""}
            placeholder="Введите название"
            isReadOnly={isReadOnly}
          />
          <EditableText
            onValueChange={onChangeInfo}
            editorValue={info ?? ""}
            placeholder="Введите описание"
            isTextArea
            style={{ height: "100%" }}
            isReadOnly={isReadOnly}
          />
          <St.ExtraInfoWrapper>
            <St.ExtraInfoLine>
              Автор: <St.ExtraInfoText>{authorName}</St.ExtraInfoText>
            </St.ExtraInfoLine>
          </St.ExtraInfoWrapper>
        </St.InfoPanel>
        <FunctionPicker state={pickerState} onChange={onChangePickerState} />
      </St.MainPanelWrapper>
    </St.Wrapper>
  );
}
