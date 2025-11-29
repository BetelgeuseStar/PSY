import { useParams } from "react-router";
import { PersonMainPanel } from "./components";
import * as St from "./styled.ts";
import { MarkerPicker } from "../../widgets/MarkerPicker";
import {
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

  const { isPublic } = person;

  const { ModalComponent: MarkerModalComponent, modal: markerModal } =
    useMarkerDescriptionModal();

  const { ModalComponent: ConfirmModalComponent, modal: confirmModal } =
    useConfirmModal();

  async function togglePublicHandler() {
    confirmModal.confirm({
      title: isPublic ? "Сделать приватной?" : "Сделать публичной?",
      message: isPublic
        ? "Эта персона будет скрыта от других пользователей"
        : "Эта персона будет видна другим пользователям",
      onOk: () => setPersonParam("isPublic", !isPublic),
    });
  }

  async function deleteHandler() {
    confirmModal.confirm({
      title: "Удалить персону?",
      message: "Вы уверены что хотите удалить пресону?",
      okButtonText: "Удалить",
      // TODO: функция удаления
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
      />
      <MarkerPicker
        openModal={markerModal.open}
        sourceId={person.sourceId}
        pickerState={pickerState}
      />
      {MarkerModalComponent}
      {ConfirmModalComponent}
    </St.Wrapper>
  );
}
