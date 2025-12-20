import * as St from "./styled.ts";
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
import { useFileByUrl } from "../../../../shared/hooks";
import noPhoto from "../../../../../public/img/books.jpg";
import { ColoredInfoLine } from "../../../../entities/ColoredInfoLine";
import { useAuthContext } from "../../../../app/AuthProvider";
import { projectColors } from "../../../../shared/utils";

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
  authorName?: string | null;
  isLoading: boolean;
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
  ...restProps
}: Props) {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const userIsAuthor = user?.login === authorName;

  const { isPublic, photoUrl, title, info } = source;

  function changePhotoUrlHandler(value: string) {
    if (!value) return;
    onChangePhotoUrl(value);
    // Если url одинаковый, то браузер закэширует фото
    if (value === photoUrl) refetch();
  }

  const {
    fileUrl,
    refetch,
    isFetching: FileIsFetching,
  } = useFileByUrl(photoUrl ?? undefined);

  const isSourceDataLoading = restProps.isLoading;
  const isLoading = isSourceDataLoading || FileIsFetching;

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
            icon={isPublic ? <InvisibleIcon /> : <VisibleIcon />}
            onClick={onToggleIsPublic}
          />
          <IconButton icon={<DeleteIcon />} onClick={onDeleteSource} />
        </St.ExtraButtonsWrapper>
      </St.ExtraPanelWrapper>
      <St.Photo
        src={fileUrl ?? (noPhoto as string)}
        fileName={`source_${source.id}_photo`}
        onChangeUrl={changePhotoUrlHandler}
        isLoading={isLoading}
        isPublic={isPublic}
      />
      <St.MainPanelWrapper>
        <St.InfoPanel>
          <EditableText
            onValueChange={onChangeTitle}
            editorValue={title ?? ""}
            placeholder="Введите название"
            isReadOnly={isReadOnly}
            isLoading={isSourceDataLoading}
          />
          <EditableText
            onValueChange={onChangeInfo}
            editorValue={info ?? ""}
            placeholder="Введите описание"
            isTextArea
            style={{ height: "100%" }}
            isReadOnly={isReadOnly}
            isLoading={isSourceDataLoading}
          />
          <St.ExtraInfoWrapper>
            <ColoredInfoLine
              keyText="Автор"
              valueText={authorName ?? ""}
              isLoading={isSourceDataLoading}
              valueColor={
                userIsAuthor ? projectColors.green : projectColors.active
              }
            />
          </St.ExtraInfoWrapper>
        </St.InfoPanel>
        <FunctionPicker state={pickerState} onChange={onChangePickerState} />
      </St.MainPanelWrapper>
    </St.Wrapper>
  );
}
