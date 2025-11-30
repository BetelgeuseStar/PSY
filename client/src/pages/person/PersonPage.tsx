import { useParams } from "react-router";
import { PersonMainPanel } from "./components";
import * as St from "./styled.ts";
import { MarkerPicker } from "../../widgets/MarkerPicker";
import {
  useAddSourceModal,
  useConfirmModal,
  useMarkerDescriptionModal,
} from "../../widgets/Modal";
import type { Person } from "../../shared/api";
import { useState } from "react";
import type { PsyType } from "../../shared/types";
import { PsyFunctions } from "../../shared/types";

const initPerson: Person = {
  id: 0,
  name: "Илюша Мэддисон",
  info: "Самый красивый человек на планете земля мы все его так любим сейчас поцелую в животик такого величественного человека",
  isPublic: false,
  photoUrl: undefined,
  sourceId: undefined,
};

export function PersonPage() {
  const { personId } = useParams();

  const [person, setPerson] = useState<Person>(initPerson);
  const [pickerState, setPickerState] = useState<PsyType>({
    psyFunction: PsyFunctions.Will,
    psyLevel: 1,
  });

  const sourceName = "Какой-то источник";

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
      // TODO: функция удаления
      onOk: () => void 0,
    });
  }

  function changeSourceHandler() {
    addSourceModal.open({
      // TODO: функция изменения источника
      onPickSource: (sourceId) => console.log("Выбран источник: ", sourceId),
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
        sourceName={sourceName}
      />
      <MarkerPicker
        openDescriptionModal={markerModal.open}
        openConfirmModal={confirmModal.open}
        sourceId={person.sourceId}
        pickerState={pickerState}
        sourceName={sourceName}
      />
      {MarkerModalComponent}
      {ConfirmModalComponent}
      {AddSourceModalComponent}
    </St.Wrapper>
  );
}
