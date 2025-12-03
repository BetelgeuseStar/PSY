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
import noPhoto from "../../../../../public/img/noPhoto.jpg";
import type { Person } from "../../../../shared/api";

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
  sourceName: string;
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
}: Props) {
  const navigate = useNavigate();

  const { name, info, isPublic, photoUrl } = person;

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
      <St.Photo src={photoUrl ?? (noPhoto as string)} />
      <St.MainPanelWrapper>
        <St.InfoPanel>
          <EditableText
            onValueChange={onChangeName}
            editorValue={name ?? ""}
            placeholder="Введите имя"
            style={{ marginBottom: 8 }}
          />
          <EditableText
            onValueChange={onChangeInfo}
            editorValue={info ?? ""}
            placeholder="Введите описание"
            isTextArea
            style={{ height: "100%" }}
          />
          {sourceName?.length ? (
            <St.SourceText>{sourceName}</St.SourceText>
          ) : (
            <></>
          )}
        </St.InfoPanel>
        <FunctionPicker state={pickerState} onChange={onChangePickerState} />
      </St.MainPanelWrapper>
    </St.Wrapper>
  );
}
