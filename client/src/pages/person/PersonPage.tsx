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
      onOk: () => setPersonParam("isPublic", !isPublic),
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
      onOk: () => void 0,
    });
  }

  function setPersonParam<P extends keyof Person>(param: P, value: Person[P]) {
    setPerson((prev) => ({
      ...prev,
      [param]: value,
    }));
  }

  function changeNameHandler(value: string) {
    setPersonParam("name", value);
  }

  function changeInfoHandler(value: string) {
    setPersonParam("info", value);
  }

  function changePhotoUrlHandler(value: string) {
    setPersonParam("photoUrl", value);
  }

  function changePickerStateHandler(value: PsyType) {
    setPickerState(value);
  }

  return (
    <St.Wrapper>
      <PersonMainPanel
        onToggleIsPublic={togglePublicHandler}
        onDeletePerson={deleteHandler}
        onChangeName={changeNameHandler}
        onChangeInfo={changeInfoHandler}
        onChangePhotoUrl={changePhotoUrlHandler}
        person={person}
        pickerState={pickerState}
        onChangePickerState={changePickerStateHandler}
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
