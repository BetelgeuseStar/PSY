import * as St from "./styled";
import { MarkerPicker } from "../../widgets/MarkerPicker";
import { SourceMainPanel } from "./components";
import { useParams } from "react-router";
import {
  useConfirmModal,
  useMarkerDescriptionModal,
} from "../../widgets/Modal";
import { useState } from "react";
import type { Source } from "../../shared/api";
import type { PsyType } from "../../shared/types";
import { PsyFunctions } from "../../shared/types";

const initSource: Source = {
  id: 0,
  title: "Синтаксис Любви",
  info: "Отличный базовый источник по психософии ЭТО БАЗА!!",
  isPublic: false,
};

export function SourcePage() {
  const { sourceId } = useParams();

  const [source, setSource] = useState<Source>(initSource);
  const [pickerState, setPickerState] = useState<PsyType>({
    psyFunction: PsyFunctions.Will,
    psyLevel: 1,
  });

  const { isPublic } = source;

  const { ModalComponent: ConfirmModalComponent, modal: confirmModal } =
    useConfirmModal();
  const { ModalComponent: MarkerModalComponent, modal: markerModal } =
    useMarkerDescriptionModal();

  function togglePublicHandler() {
    confirmModal.confirm({
      title: isPublic ? "Сделать приватным?" : "Сделать публичным?",
      message: isPublic
        ? "Этот источник будет скрыт от других пользователей"
        : "Этот источник будет виден другим пользователям",
      onOk: () => setSourceParam("isPublic", !isPublic),
    });
  }

  function deleteHandler() {
    confirmModal.confirm({
      title: "Удалить источник?",
      message: "Вы уверены что хотите удалить источник?",
      okButtonText: "Удалить",
      // TODO: функция удаления
      onOk: () => void 0,
    });
  }

  function setSourceParam<P extends keyof Source>(param: P, value: Source[P]) {
    setSource((prev) => ({
      ...prev,
      [param]: value,
    }));
  }

  function changeTitleHandler(value: string) {
    setSourceParam("title", value);
  }

  function changeInfoHandler(value: string) {
    setSourceParam("info", value);
  }

  function changePhotoUrlHandler(value: string) {
    setSourceParam("photoUrl", value);
  }

  function changePickerStateHandler(value: PsyType) {
    setPickerState(value);
  }

  return (
    <St.Wrapper>
      <SourceMainPanel
        onToggleIsPublic={togglePublicHandler}
        onDeleteSource={deleteHandler}
        onChangeTitle={changeTitleHandler}
        onChangeInfo={changeInfoHandler}
        onChangePhotoUrl={changePhotoUrlHandler}
        source={source}
        pickerState={pickerState}
        onChangePickerState={changePickerStateHandler}
      />
      <MarkerPicker
        allowEdit={true}
        sourceId={source.id}
        openModal={markerModal.open}
        pickerState={pickerState}
      />
      {MarkerModalComponent}
      {ConfirmModalComponent}
    </St.Wrapper>
  );
}
