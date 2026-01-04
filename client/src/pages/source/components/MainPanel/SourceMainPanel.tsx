import type { PsyType } from "../../../../shared/types";
import type { Source } from "../../../../shared/api";
import { MainPanelBase } from "../../../../widgets/MainPanelBase";
import noPhoto from "../../../../../public/img/books.jpg";

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
  allowEdit: boolean;
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
  isLoading,
  allowEdit,
}: Props) {
  const { isPublic, photoUrl, title, info } = source;

  return (
    <MainPanelBase
      backUrl="/sources"
      isPublic={isPublic}
      onToggleIsPublic={onToggleIsPublic}
      onDelete={onDeleteSource}
      onChangeSource={onAddSource}
      onChangePhotoUrl={onChangePhotoUrl}
      fileName={`source_${source.id}_photo`}
      isDataLoading={isLoading}
      title={title}
      titlePlaceholder="Введите название"
      info={info}
      onChangeTitle={onChangeTitle}
      onChangeInfo={onChangeInfo}
      pickerState={pickerState}
      onChangePickerState={onChangePickerState}
      authorName={authorName}
      photoUrl={photoUrl}
      noPhotoUrl={noPhoto as string}
      allowEdit={allowEdit}
    />
  );
}
