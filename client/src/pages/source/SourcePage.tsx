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
  debouncedFetchUpdateSource,
  deleteSource,
  useSource,
} from "../../shared/api";
import type { PsyType } from "../../shared/types";
import { PsyFunctions } from "../../shared/types";
import { useUser } from "../../shared/api/user/getUser.ts";

export function SourcePage() {
  const { sourceId } = useParams();
  const navigate = useNavigate();

  const [source, setSource] = useState({} as Source);

  const {
    data: fetchedSource,
    isFetched,
    dataUpdatedAt,
    isFetching: sourceIsFetching,
  } = useSource(Number(sourceId));

  const { data: author, authorIsFetching } = useUser(source?.userId);

  const isLoading = sourceIsFetching || authorIsFetching;

  useEffect(() => {
    if (!fetchedSource) return;
    setSource(fetchedSource);
  }, [dataUpdatedAt]);

  useEffect(() => {
    if (!isFetched) return;
    debouncedFetchUpdateSource(source);
  }, [source]);

  const [pickerState, setPickerState] = useState<PsyType>({
    psyFunction: PsyFunctions.Will,
    psyLevel: 1,
  });

  const { isPublic } = source;

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
        await deleteSource(source!.id);
        navigate("/sources");
      },
    });
  }

  function addSourceHandler() {
    addSourceModal.open({
      title: "Импорт маркеров",
      // TODO: функция импорта маркеров
      onPickSource: (sourceId) => console.log("Выбран источник: ", sourceId),
      excludeSourceId: source!.id,
      okButtonText: "Импортировать",
      message:
        "Выберите источник, маркеры которого вы хотите импортировать и добавить к маркерам текущего источника",
    });
  }

  function setSourceParamClosure<P extends keyof Source>(
    param: P,
  ): (value: Source[P]) => void {
    return (value) => {
      setSource((prev) => ({
        ...prev,
        [param]: value,
      }));
    };
  }

  return (
    <St.Wrapper>
      <SourceMainPanel
        onToggleIsPublic={togglePublicHandler}
        onDeleteSource={deleteHandler}
        onChangeTitle={setSourceParamClosure("title")}
        onChangeInfo={setSourceParamClosure("info")}
        onChangePhotoUrl={setSourceParamClosure("photoUrl")}
        source={source}
        pickerState={pickerState}
        onChangePickerState={setPickerState}
        onAddSource={addSourceHandler}
        authorName={author?.login}
        isLoading={isLoading}
      />
      <MarkerPicker
        allowEdit={true}
        sourceId={source.id}
        openDescriptionModal={markerModal.open}
        pickerState={pickerState}
        sourceName={source.title ?? ""}
        openConfirmModal={confirmModal.open}
      />
      {MarkerModalComponent}
      {ConfirmModalComponent}
      {AddSourceModalComponent}
    </St.Wrapper>
  );
}
