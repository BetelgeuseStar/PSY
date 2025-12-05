import { useNavigate, useParams } from "react-router";
import { PersonMainPanel } from "./components";
import * as St from "./styled.ts";
import { MarkerPicker } from "../../widgets/MarkerPicker";
import {
  useAddSourceModal,
  useConfirmModal,
  useMarkerDescriptionModal,
} from "../../widgets/Modal";
import type { Person, Source } from "../../shared/api";
import {
  debouncedFetchUpdatePerson,
  getPerson,
  getSource,
} from "../../shared/api";
import { useEffect, useState } from "react";
import type { PsyType } from "../../shared/types";
import { PsyFunctions } from "../../shared/types";
import { Loader } from "../../shared/ui";
import { deletePerson } from "../../shared/api/person/deletePerson.ts";
import type { SafeUser } from "../../shared/api/user/types.ts";
import { getUser } from "../../shared/api/user/getUser.ts";

export function PersonPage() {
  const { personId } = useParams();
  const navigate = useNavigate();

  const [person, setPerson] = useState<Person>({} as Person);
  const [source, setSource] = useState<Source>({} as Source);
  const [author, setAuthor] = useState<SafeUser>({} as SafeUser);
  const [isFetched, setIsFetched] = useState<boolean>(false);

  useEffect(() => {
    if (!isFetched) return;
    debouncedFetchUpdatePerson(person);
  }, [person]);

  useEffect(() => {
    fetchSource();
  }, [person.sourceId]);

  useEffect(() => {
    if (!isFetched) return;
    fetchAuthor();
  }, [person.userId]);

  async function fetchAuthor() {
    const fetchedAuthor = await getUser(Number(person.userId));
    setAuthor(fetchedAuthor);
  }

  async function fetchPerson() {
    const fetchedPerson = await getPerson(Number(personId));
    setPerson(fetchedPerson);
    setIsFetched(true);
  }

  async function fetchSource() {
    if (!person.sourceId) return;
    const fetchedSource = await getSource(person.sourceId);
    setSource(fetchedSource);
  }

  useEffect(() => {
    fetchPerson();
  }, []);

  const [pickerState, setPickerState] = useState<PsyType>({
    psyFunction: PsyFunctions.Will,
    psyLevel: 1,
  });

  const { isPublic } = person;

  const { ModalComponent: MarkerModalComponent, modal: markerModal } =
    useMarkerDescriptionModal();

  const { ModalComponent: ConfirmModalComponent, modal: confirmModal } =
    useConfirmModal();

  const { ModalComponent: AddSourceModalComponent, modal: addSourceModal } =
    useAddSourceModal();

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
        await deletePerson(person.id);
        navigate("/persons");
      },
    });
  }

  function changeSourceHandler() {
    addSourceModal.open({
      onPickSource: setPersonParamClosure("sourceId"),
      currentSourceId: person.sourceId ?? undefined,
      message: "Выберите источник из которого будут взяты маркеры для персоны",
    });
  }

  function setPersonParamClosure<P extends keyof Person>(
    param: P,
  ): (value: Person[P]) => void {
    return (value) => {
      setPerson((prev) => ({
        ...prev,
        [param]: value,
      }));
    };
  }

  if (!person) return <Loader isLoading />;

  return (
    <St.Wrapper>
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
        sourceName={source.title}
        authorName={author.login}
      />
      <MarkerPicker
        openDescriptionModal={markerModal.open}
        openConfirmModal={confirmModal.open}
        sourceId={person.sourceId}
        pickerState={pickerState}
        sourceName={source.title ?? "Нет источника"}
      />
      {MarkerModalComponent}
      {ConfirmModalComponent}
      {AddSourceModalComponent}
    </St.Wrapper>
  );
}
