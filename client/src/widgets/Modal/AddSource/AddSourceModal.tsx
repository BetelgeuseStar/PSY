import type { CommonModalProps } from "../useCustomModal.tsx";
import { CloseIcon, ModalHeader, ModalMask, ModalTitle } from "../styled.ts";
import * as St from "./styled.ts";
import type { AddSourceModalProps } from "./useAddSourceModal.tsx";
import type { Source } from "../../../shared/api";
import { getSourcesList } from "../../../shared/api";
import { useEffect, useState } from "react";

export function AddSourceModal({
  isOpen,
  title = "Выберите источник",
  okButtonText = "Выбрать",
  onOk,
  onClose,
  message,
  onPickSource,
  currentSourceId,
  excludeSourceId,
}: AddSourceModalProps & CommonModalProps) {
  const [pickedSourceId, setPickedSourceId] = useState<number | undefined>(
    currentSourceId,
  );

  useEffect(() => {
    setPickedSourceId(currentSourceId);
  }, [currentSourceId]);

  function okHandler() {
    if (pickedSourceId) onPickSource(pickedSourceId);
    onOk?.();
  }

  const [sources, setSources] = useState<Source[]>([]);

  async function fetchSources() {
    setSources(await getSourcesList());
  }

  useEffect(() => {
    fetchSources();
  }, []);

  return (
    <ModalMask style={{ display: isOpen ? "flex" : "none" }}>
      <St.Wrapper>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseIcon onClick={onClose} />
        </ModalHeader>
        <St.Body>
          <St.Content>{message}</St.Content>
          <St.Select
            defaultValue={currentSourceId}
            onChange={setPickedSourceId}
            value={pickedSourceId}
            options={sources
              .filter((source) => source.id !== excludeSourceId)
              .map((source) => ({
                value: source.id,
                label: source.title ?? `Без названия ${source.id}`,
              }))}
          />
          <St.ButtonsWrapper>
            <St.AcceptButton onClick={okHandler}>
              {okButtonText}
            </St.AcceptButton>
            <St.CancelButton onClick={onClose}>Отмена</St.CancelButton>
          </St.ButtonsWrapper>
        </St.Body>
      </St.Wrapper>
    </ModalMask>
  );
}
