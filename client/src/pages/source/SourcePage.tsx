import * as St from "./styled";
import { MarkerPicker } from "../../widgets/MarkerPicker";
import { SourceMainPanel } from "./components";
import { useNavigate, useParams } from "react-router";
import {
  useAddSourceModal,
  useConfirmModal,
  useMarkerDescriptionModal,
} from "../../widgets/Modal";
import { useEffect, useState } from "react";
import type { Source } from "../../shared/api";
import {
  useDeleteMutationSource,
  useSource,
  useUpdateMutationSource,
} from "../../shared/api";
import type { PsyType } from "../../shared/types";
import { PsyFunctions } from "../../shared/types";
import { Loader } from "../../shared/ui";
import { useAuthContext } from "../../app/AuthProvider";

export function SourcePage() {
  const { sourceId } = useParams();
  const id = Number(sourceId);
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const [localSource, setLocalSource] = useState<Source>();

  const allowEdit = localSource?.userId == user?.id;

  const {
    data: source,
    dataUpdatedAt,
    isLoading: sourceIsLoading,
  } = useSource(id);

  const { debouncedMutate: debouncedUpdateSource } =
    useUpdateMutationSource(id);
  const { mutateAsync: deleteSource } = useDeleteMutationSource(id);

  const isLoading = sourceIsLoading;

  useEffect(() => {
    if (localSource) return;
    setLocalSource(source);
  }, [dataUpdatedAt]);

  useEffect(() => {
    return () => {
      debouncedUpdateSource.flush();
    };
  }, []);

  const [pickerState, setPickerState] = useState<PsyType>({
    psyFunction: PsyFunctions.Will,
    psyLevel: 1,
  });

  const isPublic = localSource?.isPublic;

  const { ModalComponent: ConfirmModalComponent, modal: confirmModal } =
    useConfirmModal();
  const { ModalComponent: MarkerModalComponent, modal: markerModal } =
    useMarkerDescriptionModal();
  const { ModalComponent: AddSourceModalComponent, modal: addSourceModal } =
    useAddSourceModal();

  function togglePublicHandler() {
    confirmModal.open({
      title: isPublic ? "Сделать приватным?" : "Сделать публичным?",
      message: isPublic
        ? "Этот источник будет скрыт от других пользователей"
        : "Этот источник будет виден другим пользователям",
      onOk: () => setSourceParamClosure("isPublic")(!isPublic),
    });
  }

  function deleteHandler() {
    confirmModal.open({
      title: "Удалить источник?",
      message: "Вы уверены что хотите удалить источник?",
      okButtonText: "Удалить",
      onOk: async () => {
        await deleteSource(localSource!.id);
        navigate("/sources");
      },
    });
  }

  function addSourceHandler() {
    addSourceModal.open({
      title: "Импорт маркеров",
      // TODO: функция импорта маркеров
      onPickSource: (sourceId) => console.log("Выбран источник: ", sourceId),
      excludeSourceId: localSource!.id,
      okButtonText: "Импортировать",
      message:
        "Выберите источник, маркеры которого вы хотите импортировать и добавить к маркерам текущего источника",
    });
  }

  function setSourceParamClosure<P extends keyof Source>(
    param: P,
  ): (value: Source[P]) => void {
    return (value) => {
      setLocalSource((prev) => {
        const newSourceData = {
          ...prev!,
          [param]: value,
        };

        debouncedUpdateSource(newSourceData);

        return newSourceData;
      });
    };
  }

  if (!localSource) return <Loader isLoading />;

  return (
    <St.Wrapper>
      <Loader isLoading={isLoading} />
      <SourceMainPanel
        onToggleIsPublic={togglePublicHandler}
        onDeleteSource={deleteHandler}
        onChangeTitle={setSourceParamClosure("title")}
        onChangeInfo={setSourceParamClosure("info")}
        onChangePhotoUrl={setSourceParamClosure("photoUrl")}
        source={localSource}
        pickerState={pickerState}
        onChangePickerState={setPickerState}
        onAddSource={addSourceHandler}
        authorName={source?.author}
        isLoading={isLoading}
        allowEdit={allowEdit}
      />
      <MarkerPicker
        allowEdit={allowEdit}
        sourceId={localSource.id}
        openDescriptionModal={markerModal.open}
        pickerState={pickerState}
        sourceName={localSource.title ?? ""}
        openConfirmModal={confirmModal.open}
        allowPick={false}
      />
      {MarkerModalComponent}
      {ConfirmModalComponent}
      {AddSourceModalComponent}
    </St.Wrapper>
  );
}
