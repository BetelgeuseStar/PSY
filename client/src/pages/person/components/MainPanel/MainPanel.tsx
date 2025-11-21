import * as St from "./styled.ts";
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
import noPhoto from "../../../../../public/img/noPhoto.jpg";

export function MainPanel() {
  const [pickerState, setPickerState] = useState<FunctionPickerState>({
    type: PsyFunction.Will,
    number: 1,
  });

  const navigate = useNavigate();

  const photoUrl = undefined;

  const [name, setName] = useState("Илюша Мэддисон");
  const [info, setInfo] = useState(
    "Самый красивый человек на планете земля мы все его так любим сейчас поцелую в животик такого величественного человека Самый красивый человек на планете земля мы все его так любим сейчас поцелую в животик такого величественного человека Самый красивый человек на планете земля мы все его так любим сейчас поцелую в животик такого величественного человека",
  );
  const [isPublic, setIsPublic] = useState(true);

  return (
    <St.Wrapper>
      <St.ExtraPanelWrapper>
        <St.ExtraButtonsWrapper>
          <IconButton
            onClick={() => navigate("/persons")}
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
      <St.Photo src={photoUrl ?? (noPhoto as string)} />
      <St.MainPanelWrapper>
        <St.InfoPanel>
          <EditableText
            onValueChange={setName}
            editorValue={name}
            placeholder="Введите имя"
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
