import * as St from "./styled.ts";
import { EditableText, IconButton } from "../../shared/ui";
import {
  BackIcon,
  BookIcon,
  DeleteIcon,
  InvisibleIcon,
  VisibleIcon,
} from "../../shared/icons";
import { ColoredInfoLine } from "../../entities/ColoredInfoLine";
import { projectColors } from "../../shared/utils";
import { FunctionPicker } from "../FunctionPicker";
import { useNavigate } from "react-router";
import type { PsyType } from "../../shared/types";
import { useFileByUrl } from "../../shared/hooks";

type Props = {
  backUrl: string;
  isPublic: boolean;
  onToggleIsPublic: () => void;
  onDelete: () => void;
  onChangeSource: () => void;
  onChangePhotoUrl: (value: string) => void;
  fileName: string;
  isDataLoading: boolean;
  title: string | null;
  titlePlaceholder: string;
  info: string | null;
  onChangeTitle: (value: string) => void;
  onChangeInfo: (value: string) => void;
  pickerState: PsyType;
  onChangePickerState: (value: PsyType) => void;
  photoUrl: string | null;
  noPhotoUrl: string;
  allowEdit: boolean;
  authorName?: string | null;
  sourceName?: string | null;
  showSourceName?: boolean;
};

export function MainPanelBase({
  backUrl,
  isPublic,
  onToggleIsPublic,
  onDelete,
  onChangeSource,
  onChangePhotoUrl,
  fileName,
  isDataLoading,
  title,
  titlePlaceholder,
  onChangeTitle,
  info,
  onChangeInfo,
  pickerState,
  onChangePickerState,
  authorName,
  photoUrl,
  noPhotoUrl,
  allowEdit,
  sourceName,
  showSourceName = false,
}: Props) {
  const navigate = useNavigate();

  const {
    fileUrl,
    refetch,
    isFetching: fileIsFetching,
  } = useFileByUrl(photoUrl ?? undefined);

  function changePhotoUrlHandler(value: string) {
    if (!value) return;
    onChangePhotoUrl(value);
    // Если url одинаковый, то браузер закэширует фото
    if (value === photoUrl) refetch();
  }

  const isLoading = isDataLoading || fileIsFetching;

  return (
    <St.Wrapper>
      <St.ExtraPanelWrapper>
        <St.ExtraButtonsWrapper>
          <IconButton onClick={() => navigate(backUrl)} icon={<BackIcon />} />
        </St.ExtraButtonsWrapper>
        {allowEdit && (
          <St.ExtraButtonsWrapper>
            <IconButton icon={<BookIcon />} onClick={onChangeSource} />
            <IconButton
              icon={isPublic ? <InvisibleIcon /> : <VisibleIcon />}
              onClick={onToggleIsPublic}
            />
            <IconButton icon={<DeleteIcon />} onClick={onDelete} />
          </St.ExtraButtonsWrapper>
        )}
      </St.ExtraPanelWrapper>
      <St.Photo
        src={fileUrl ?? noPhotoUrl}
        onChangeUrl={changePhotoUrlHandler}
        fileName={fileName}
        isLoading={isLoading}
        isPublic={isPublic}
        allowEdit={allowEdit}
      />
      <St.MainPanelWrapper>
        <St.InfoPanel>
          <EditableText
            onValueChange={onChangeTitle}
            editorValue={title ?? ""}
            placeholder={titlePlaceholder}
            isReadOnly={!allowEdit}
            isLoading={isDataLoading}
          />
          <EditableText
            onValueChange={onChangeInfo}
            editorValue={info ?? ""}
            placeholder="Введите описание"
            isTextArea
            style={{ height: "100%" }}
            isReadOnly={!allowEdit}
            isLoading={isDataLoading}
          />
          <St.ExtraInfoWrapper>
            <ColoredInfoLine
              keyText="Автор"
              valueText={authorName ?? ""}
              isLoading={isDataLoading}
              valueColor={
                allowEdit ? projectColors.green : projectColors.active
              }
            />
            {showSourceName && (
              <ColoredInfoLine
                keyText="Источник"
                valueText={sourceName ?? "Отсутствует"}
                isLoading={isDataLoading}
                valueColor={sourceName ? "#3ba4a9" : "red"}
                cursor="pointer"
                onClick={onChangeSource}
              />
            )}
          </St.ExtraInfoWrapper>
        </St.InfoPanel>
        <FunctionPicker state={pickerState} onChange={onChangePickerState} />
      </St.MainPanelWrapper>
    </St.Wrapper>
  );
}
