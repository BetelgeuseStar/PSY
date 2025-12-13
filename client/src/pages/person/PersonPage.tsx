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
  debouncedFetchUpdatePerson,
  usePerson,
  useSource,
} from "../../shared/api";
import { useEffect, useState } from "react";
import type { PsyType } from "../../shared/types";
import { PsyFunctions } from "../../shared/types";
import { Loader } from "../../shared/ui";
import { deletePerson } from "../../shared/api/person/deletePerson.ts";
import { useUser } from "../../shared/api/user/getUser.ts";

export function PersonPage() {
  const { personId } = useParams();
  const navigate = useNavigate();

  const [person, setPerson] = useState<Person>();

  const {
    data: fetchedPerson,
    isFetching: personIsFetching,
    isFetched: personIsFetched,
    dataUpdatedAt,
  } = usePerson(Number(personId));

  const { data: source, isFetching: sourceIsFetching } = useSource(
    person?.sourceId,
  );

  const { data: author, isFetching: authorIsFetching } = useUser(
    person?.userId,
  );

  const isLoading = personIsFetching || sourceIsFetching || authorIsFetching;

  useEffect(() => {
    if (!fetchedPerson) return;
    setPerson(fetchedPerson);
  }, [dataUpdatedAt]);

  useEffect(() => {
    if (!personIsFetched || !person) return;
    debouncedFetchUpdatePerson(person);
  }, [person]);

  useEffect(() => {
    return () => {
      debouncedFetchUpdatePerson.flush();
    };
  }, []);

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

  function setPersonParamClosure<P extends keyof Person>(
    param: P,
  ): (value: Person[P]) => void {
    return (value) => {
      setPerson((prev) => ({
        ...prev!,
        [param]: value,
      }));
    };
  }

  if (!person) return <Loader isLoading />;

  return (
    <St.Wrapper>
      <Loader isLoading={isLoading} />
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
      <MarkerPicker
        openDescriptionModal={markerModal.open}
        openConfirmModal={confirmModal.open}
        sourceId={person.sourceId}
        pickerState={pickerState}
        sourceName={source?.title ?? "Нет источника"}
        pickedMarkerIds={person.pickedMarkerIds}
        onChangePickedMarkerIds={setPersonParamClosure("pickedMarkerIds")}
      />
      {MarkerModalComponent}
      {ConfirmModalComponent}
      {AddSourceModalComponent}
    </St.Wrapper>
  );
}
