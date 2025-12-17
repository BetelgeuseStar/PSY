import { useNavigate } from "react-router";
import { PersonMainPanel } from "./components";
import * as St from "./styled.ts";
import { MarkerPicker } from "../../widgets/MarkerPicker";
import {
  useAddSourceModal,
  useConfirmModal,
  useMarkerDescriptionModal,
} from "../../widgets/Modal";
import { useSource } from "../../shared/api";
import { useState } from "react";
import type { PsyType } from "../../shared/types";
import { PsyFunctions } from "../../shared/types";
import { Loader } from "../../shared/ui";
import { useUser } from "../../shared/api/user/getUser.ts";
import { PsyTypeDisplay } from "../../widgets/PsyTypeDisplay";
import { usePersonData } from "./hooks";

export function PersonPage() {
  const navigate = useNavigate();

  const {
    person,
    setPersonParamClosure,
    deletePerson,
    pickedMarkerIds,
    updatePickedMarkerIds,
    isLoading: personDataIsLoading,
  } = usePersonData();

  const { data: source, isFetching: sourceIsFetching } = useSource(
    person?.sourceId,
  );

  const { data: author, isFetching: authorIsFetching } = useUser(
    person?.userId,
  );

  const isLoading = personDataIsLoading || sourceIsFetching || authorIsFetching;

  const [pickerState, setPickerState] = useState<PsyType>({
    psyFunction: PsyFunctions.Will,
    psyLevel: 1,
  });

  const { ModalComponent: MarkerModalComponent, modal: markerModal } =
    useMarkerDescriptionModal();

  const { ModalComponent: ConfirmModalComponent, modal: confirmModal } =
    useConfirmModal();

  const { ModalComponent: AddSourceModalComponent, modal: addSourceModal } =
    useAddSourceModal();

  const isPublic = person?.isPublic;

  function togglePublicHandler() {
    confirmModal.open({
      title: isPublic ? "Сделать приватной?" : "Сделать публичной?",
      message: isPublic
        ? "Эта персона будет скрыта от других пользователей"
        : "Эта персона будет видна другим пользователям",
      onOk: () => setPersonParamClosure("isPublic")(!isPublic),
    });
  }

  function deleteHandler() {
    confirmModal.open({
      title: "Удалить персону?",
      message: "Вы уверены что хотите удалить персону?",
      okButtonText: "Удалить",
      onOk: async () => {
        await deletePerson(person!.id);
        navigate("/persons");
      },
    });
  }

  function changeSourceHandler() {
    addSourceModal.open({
      onPickSource: setPersonParamClosure("sourceId"),
      currentSourceId: person!.sourceId ?? undefined,
      message: "Выберите источник из которого будут взяты маркеры для персоны",
    });
  }

  if (!person) return <Loader isLoading />;

  return (
    <St.Wrapper>
      <Loader isLoading={isLoading} />
      <St.PanelsWrapper>
        <PersonMainPanel
          onToggleIsPublic={togglePublicHandler}
          onDeletePerson={deleteHandler}
          onChangeName={setPersonParamClosure("name")}
          onChangeInfo={setPersonParamClosure("info")}
          onChangePhotoUrl={setPersonParamClosure("photoUrl")}
          person={person}
          pickerState={pickerState}
          onChangePickerState={setPickerState}
          onChangeSource={changeSourceHandler}
          sourceName={source?.title}
          authorName={author?.login}
          isLoading={isLoading}
        />
        <PsyTypeDisplay
          sourceId={source?.id ?? null}
          pickedMarkerIds={pickedMarkerIds ?? []}
        />
      </St.PanelsWrapper>
      <MarkerPicker
        openDescriptionModal={markerModal.open}
        openConfirmModal={confirmModal.open}
        sourceId={person.sourceId}
        pickerState={pickerState}
        sourceName={source?.title ?? "Нет источника"}
        pickedMarkerIds={pickedMarkerIds ?? []}
        onChangePickedMarkerIds={updatePickedMarkerIds}
      />
      {MarkerModalComponent}
      {ConfirmModalComponent}
      {AddSourceModalComponent}
    </St.Wrapper>
  );
}
