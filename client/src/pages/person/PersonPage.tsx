import { useNavigate, useParams } from "react-router";
import { PersonMainPanel } from "./components";
import * as St from "./styled.ts";
import { MarkerPicker } from "../../widgets/MarkerPicker";
import {
  useAddSourceModal,
  useConfirmModal,
  useMarkerDescriptionModal,
} from "../../widgets/Modal";
import type { Person } from "../../shared/api";
import {
  usePerson,
  useSource,
  useUpdateMutationPerson,
} from "../../shared/api";
import { useEffect, useState } from "react";
import type { PsyType } from "../../shared/types";
import { PsyFunctions } from "../../shared/types";
import { Loader } from "../../shared/ui";
import { useDeleteMutationPerson } from "../../shared/api/person/deletePerson.ts";
import { useUser } from "../../shared/api/user/getUser.ts";
import { PsyTypeDisplay } from "../../widgets/PsyTypeDisplay";

export function PersonPage() {
  const { personId } = useParams();
  const id = Number(personId);

  const navigate = useNavigate();

  const [localePerson, setLocalePerson] = useState<Person>();

  const {
    data: person,
    isLoading: personIsLoading,
    dataUpdatedAt,
  } = usePerson(id);

  const { debouncedMutate: debouncedUpdatePerson } =
    useUpdateMutationPerson(id);
  const { mutateAsync: deletePerson } = useDeleteMutationPerson(id);

  useEffect(() => {
    if (localePerson) return;
    setLocalePerson(person);
  }, [dataUpdatedAt]);

  useEffect(() => {
    return () => {
      debouncedUpdatePerson.flush();
    };
  }, []);

  function setPersonParamClosure<P extends keyof Person>(
    param: P,
  ): (value: Person[P]) => void {
    return (value) => {
      setLocalePerson((prev) => {
        const newPersonData = {
          ...prev!,
          [param]: value,
        };

        debouncedUpdatePerson(newPersonData);

        return newPersonData;
      });
    };
  }

  const { data: source, isFetching: sourceIsFetching } = useSource(
    localePerson?.sourceId,
  );

  const { data: author, isFetching: authorIsFetching } = useUser(
    localePerson?.userId,
  );

  const isLoading = personIsLoading || sourceIsFetching || authorIsFetching;

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

  const isPublic = localePerson?.isPublic;

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
        await deletePerson(localePerson!.id);
        navigate("/persons");
      },
    });
  }

  function changeSourceHandler() {
    addSourceModal.open({
      onPickSource: setPersonParamClosure("sourceId"),
      currentSourceId: localePerson!.sourceId ?? undefined,
      message: "Выберите источник из которого будут взяты маркеры для персоны",
    });
  }

  if (!localePerson) return <Loader isLoading />;

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
          person={localePerson}
          pickerState={pickerState}
          onChangePickerState={setPickerState}
          onChangeSource={changeSourceHandler}
          sourceName={source?.title}
          authorName={author?.login}
          isLoading={isLoading}
        />
        <PsyTypeDisplay
          sourceId={source?.id ?? null}
          pickedMarkerIds={localePerson.pickedMarkerIds}
        />
      </St.PanelsWrapper>
      <MarkerPicker
        openDescriptionModal={markerModal.open}
        openConfirmModal={confirmModal.open}
        sourceId={localePerson.sourceId}
        pickerState={pickerState}
        sourceName={source?.title ?? "Нет источника"}
        pickedMarkerIds={localePerson.pickedMarkerIds}
        onChangePickedMarkerIds={setPersonParamClosure("pickedMarkerIds")}
      />
      {MarkerModalComponent}
      {ConfirmModalComponent}
      {AddSourceModalComponent}
    </St.Wrapper>
  );
}
