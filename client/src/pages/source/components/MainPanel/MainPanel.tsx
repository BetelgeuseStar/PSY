import * as St from "./styled.ts";
import booksImg from "../../../../../public/img/books.jpg";
import {
  BackIcon,
  DeleteIcon,
  InvisibleIcon,
  VisibleIcon,
} from "../../../../shared/icons";
import { FunctionPicker } from "../../../../widgets/FunctionPicker";
import { useState } from "react";
import type { FunctionPickerState } from "../../../../shared/types";
import { PsyFunction } from "../../../../shared/types";
import { EditableText, IconButton } from "../../../../shared/ui";
import { useNavigate } from "react-router";

export function MainPanel() {
  const [pickerState, setPickerState] = useState<FunctionPickerState>({
    type: PsyFunction.Will,
    number: 1,
  });

  const navigate = useNavigate();

  const photoUrl = undefined;

  const [title, setTitle] = useState("Синтаксис Любви");
  const [author, setAuthor] = useState("Афанасьев");
  const [info, setInfo] = useState(
    "Отличный базовый источник по психософии ЭТО БАЗА!!",
  );
  const [isPublic, setIsPublic] = useState(true);

  return (
    <St.Wrapper>
      <St.ExtraPanelWrapper>
        <St.ExtraButtonsWrapper>
          <IconButton
            onClick={() => navigate("/sources")}
            icon={<BackIcon />}
          />
        </St.ExtraButtonsWrapper>
        <St.ExtraButtonsWrapper>
          <IconButton icon={<DeleteIcon />} />
          <IconButton
            icon={isPublic ? <VisibleIcon /> : <InvisibleIcon />}
            onClick={() => setIsPublic((prev) => !prev)}
          />
        </St.ExtraButtonsWrapper>
      </St.ExtraPanelWrapper>
      <St.Photo src={photoUrl ?? (booksImg as string)} />
      <St.MainPanelWrapper>
        <St.InfoPanel>
          <EditableText
            onValueChange={setTitle}
            editorValue={title}
            placeholder="Введите название"
            style={{ marginBottom: 5 }}
          />
          <EditableText
            onValueChange={setAuthor}
            editorValue={author}
            placeholder="Введите имя автора"
            style={{ marginBottom: 8 }}
          />
          <EditableText
            onValueChange={setInfo}
            editorValue={info}
            placeholder="Введите описание"
            isTextArea
            style={{ height: "100%" }}
          />
        </St.InfoPanel>
        <FunctionPicker state={pickerState} onChange={setPickerState} />
      </St.MainPanelWrapper>
    </St.Wrapper>
  );
}
