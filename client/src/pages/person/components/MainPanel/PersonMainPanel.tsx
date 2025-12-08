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
import type { Person } from "../../../../shared/api";
import noPhoto from "../../../../../public/img/noPhoto.jpg";
import { useFileByUrl } from "../../../../shared/hooks";

type Props = {
  person: Person;
  onChangeName: (value: string) => void;
  onChangeInfo: (value: string) => void;
  onToggleIsPublic: () => void;
  onChangePhotoUrl: (value: string) => void;
  onDeletePerson: () => void;
  pickerState: PsyType;
  onChangePickerState: (value: PsyType) => void;
  onChangeSource: () => void;
  sourceName: string | null;
  authorName: string | null;
};

export function PersonMainPanel({
  person,
  onChangePhotoUrl,
  onChangeInfo,
  onToggleIsPublic,
  onChangeName,
  onDeletePerson,
  pickerState,
  onChangePickerState,
  onChangeSource,
  sourceName,
  authorName,
}: Props) {
  const navigate = useNavigate();

  const { name, info, isPublic, photoUrl } = person;

  function changePhotoUrlHandler(value: string) {
    if (!value) return;
    onChangePhotoUrl(value);
    // Если url одинаковый, то браузер закэширует фото
    if (value === photoUrl) refetch();
  }

  const { fileUrl, refetch } = useFileByUrl(photoUrl);

  const isReadOnly = false;

  return (
    <St.Wrapper>
      <St.ExtraPanelWrapper>
        <St.ExtraButtonsWrapper>
          <IconButton
            onClick={() => navigate("/persons")}
            icon={<BackIcon />}
          />
        </St.ExtraButtonsWrapper>
        <St.ExtraButtonsWrapper>
          <IconButton icon={<BookIcon />} onClick={onChangeSource} />
          <IconButton
            icon={isPublic ? <VisibleIcon /> : <InvisibleIcon />}
            onClick={onToggleIsPublic}
          />
          <IconButton icon={<DeleteIcon />} onClick={onDeletePerson} />
        </St.ExtraButtonsWrapper>
      </St.ExtraPanelWrapper>
      <St.Photo
        src={fileUrl ?? (noPhoto as string)}
        onChangeUrl={changePhotoUrlHandler}
        fileName={`person_${person.id}_photo`}
      />
      <St.MainPanelWrapper>
        <St.InfoPanel>
          <EditableText
            onValueChange={onChangeName}
            editorValue={name ?? ""}
            placeholder="Введите имя"
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
              Автор: <St.ExtraInfoText>{authorName ?? ""}</St.ExtraInfoText>
            </St.ExtraInfoLine>
            <St.ExtraInfoLine>
              Источник:
              <St.ExtraInfoText
                style={{ color: sourceName ? "#3ba4a9" : "red" }}
              >
                {sourceName ?? "Отсутствует"}
              </St.ExtraInfoText>
            </St.ExtraInfoLine>
          </St.ExtraInfoWrapper>
        </St.InfoPanel>
        <FunctionPicker state={pickerState} onChange={onChangePickerState} />
      </St.MainPanelWrapper>
    </St.Wrapper>
  );
}
