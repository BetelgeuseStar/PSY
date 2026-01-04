import type { PsyType } from "../../../../shared/types";
import type { Person } from "../../../../shared/api";
import { MainPanelBase } from "../../../../widgets/MainPanelBase";
import noPhoto from "../../../../../public/img/noPhoto.jpg";

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
  sourceName?: string | null;
  authorName?: string | null;
  isLoading: boolean;
  allowEdit: boolean;
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
  isLoading,
  allowEdit,
}: Props) {
  const { name, info, isPublic, photoUrl } = person;

  return (
    <MainPanelBase
      backUrl="/persons"
      isPublic={isPublic}
      onToggleIsPublic={onToggleIsPublic}
      onDelete={onDeletePerson}
      onChangeSource={onChangeSource}
      onChangePhotoUrl={onChangePhotoUrl}
      fileName={`person_${person.id}_photo`}
      isDataLoading={isLoading}
      title={name}
      titlePlaceholder="Введите имя"
      info={info}
      onChangeTitle={onChangeName}
      onChangeInfo={onChangeInfo}
      pickerState={pickerState}
      onChangePickerState={onChangePickerState}
      authorName={authorName}
      sourceName={sourceName}
      photoUrl={photoUrl}
      noPhotoUrl={noPhoto as string}
      allowEdit={allowEdit}
      showSourceName
    />
  );
}
